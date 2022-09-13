import React, { useEffect, useState } from 'react';
import { configurationObj } from '../../config/config';
import { zegoInstance } from '../../utils/zego-config';
import { useLocation, useNavigate } from 'react-router-dom';
import { LocalStorageFN } from '../../utils/localstorage';

function VideoCalling(props) {

    const { state } = useLocation()
    const history = useNavigate()
    const instance = zegoInstance()
    const zegoCloudCallingConfig = LocalStorageFN.getFromLocalStorage('zego-room-config')
    const auth = LocalStorageFN.getFromLocalStorage('auth-credits')
    const joinUsers = []
    const [roomAudioVideoSetting, setRoomAudioVideoSetting] = useState({
        audio: true,
        video: true
    })

    let localStream = null

    useEffect(() => {
        createRoom()
    }, [])

    const createRoom = async () => {
        const deviceInfo = await instance.enumDevices()
        try {
            const systemRequirements = await instance.checkSystemRequirements();
            if (systemRequirements?.result == undefined) {
                const streamRoom = null;
                try {
                    streamRoom = await instance.loginRoom(
                        zegoCloudCallingConfig.roomId,
                        zegoCloudCallingConfig.token,
                        {
                            userID: String(auth._id),
                            userName: auth.email
                        });

                } catch (error) {
                    console.log("error", error);
                }

                localStream = await instance.createStream({
                    camera: {
                        audioInput: deviceInfo.microphones[0].deviceID,
                        videoInput: deviceInfo.cameras[0].deviceID,
                        video: true,
                        audio: true,
                    }
                });
                const localView = instance.createLocalStreamView(localStream);
                instance.startPublishingStream(zegoCloudCallingConfig.streamId,
                    localStream,
                    { videoCodec: 'VP8' })
                localView.play("local-video-streaming-container", {
                    mirror: true,
                    objectFit: "cover",
                    enableAutoplayDialog: true,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }


    async function stopPlayingStream(streamId) {
        instance.stopPlayingStream(streamId);
    }

    function clearStream() {
        localStream && instance.destroyStream(localStream);
        localStream = null;
    }

    const handleLeave = () => {
        stopPlayingStream(configurationObj.videoCallingConfigObj.streamId)
        clearStream();
        history('/home')
    }

    const otherJoin = async (id) => {
        const remoteStream = await instance.startPlayingStream(zegoCloudCallingConfig.streamId, {});
        const remoteView = instance.createRemoteStreamView(remoteStream);
        remoteView.play(`remote-video-streaming-container-${id}`, {
            objectFit: "cover",
            enableAutoplayDialog: true,
        })
    }

    // const handleCamera = async (flag) => {
    //     try {
    //         if (flag) {
    //             await instance.mutePlayStreamVideo(configurationObj.videoCallingConfigObj.streamId, true)
    //         }
    //         if (!flag) {
    //             await instance.mutePlayStreamVideo(configurationObj.videoCallingConfigObj.streamId, false)
    //         }
    //         setRoomAudioVideoSetting({ ...roomAudioVideoSetting, video: !roomAudioVideoSetting.video })
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // const handleVolume = async (flag) => {
    //     try {
    //         instance.muteMicrophone(flag)
    //         setRoomAudioVideoSetting({ ...roomAudioVideoSetting, video: !roomAudioVideoSetting.audio })

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div className='h-screen'>
            <div className="flex flex-wrap h-screen">
                <div controls autoplay muted playsInline className={`${joinUsers.length === 0 ? 'w-full h-fit' : 'w-1/2 h-1/2'} border`} style={{
                }} id='local-video-streaming-container' />
                {joinUsers.length > 0 &&
                    joinUsers.map((item, index) => {
                        return <div className='w-1/2 h-1/2 border' style={{
                        }} id={`remote-video-streaming-container-${index}`} />
                    })}
            </div>
        </div >
    );
}

export default VideoCalling;