import React, { useEffect } from 'react';
import { configurationObj } from '../../config/config';
import { zegoInstance } from '../../utils/zego-config';
import { useLocation } from 'react-router-dom';

function VideoCalling(props) {

    const { state } = useLocation()
    console.log("state", state)

    const users = [1]

    const instance = zegoInstance()

    const createRoom = async () => {
        try {
            await instance.checkSystemRequirements();
            const streamRoom = await instance.loginRoom(
                configurationObj.videoCallingConfigObj.roomId,
                configurationObj.videoCallingConfigObj.token,
                {
                    userID: configurationObj.videoCallingConfigObj.userID,
                    userName: configurationObj.videoCallingConfigObj.userName
                });

            // console.log("streamRoom", streamRoom)

            instance.on('roomUserUpdate', (roomID, updateType, userList) => {
                console.warn(
                    `roomUserUpdate: room ${roomID}, user ${updateType === 'ADD' ? 'added' : 'left'} `,
                    JSON.stringify(userList),
                );
            });

            // Callback for updates on the status of the streams in the room.
            instance.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
                if (updateType == 'ADD') {
                    // New stream added, start playing the stream. 
                } else if (updateType == 'DELETE') {
                    // Stream deleted, stop playing the stream.
                }
            });

            const deviceInfo = await instance.enumDevices()

            // console.log("microphones", deviceInfo.microphones[0])
            // console.log("cameras", deviceInfo.cameras[0])

            const localStream = await instance.createStream({
                camera: {
                    audioInput: deviceInfo.microphones[0].deviceID,
                    videoInput: deviceInfo.cameras[0].deviceID,
                    video: true,
                    audio: true,
                }
            });
            // Get the audio tag.
            const localVideo = document.getElementById('local-video-streaming-container');
            // const localAudio = document.getElementById('local-audio');
            // The local stream is a MediaStream object. You can render audio by assigning the local stream to the srcObject property of video or audio.
            // localVideo.srcObject = localStream;
            // console.log("localStream", localStream)
            instance.startPublishingStream(configurationObj.videoCallingConfigObj.streamId,
                localStream,
                { videoCodec: 'VP8' })
            // console.log("instance.getVersion()", instance.getVersion())
            // const localView = instance.createLocalStreamView()
            const localView = instance.createLocalStreamView(localStream);
            // console.log("localView", localView)
            localView.play("local-video-streaming-container", {
                mirror: true,
                objectFit: "cover",
                enableAutoplayDialog: true,
            })
            const remoteStream = await instance.startPlayingStream(configurationObj.videoCallingConfigObj.streamId, {});
            console.log("remoteStream", remoteStream)
            const remoteView = instance.createRemoteStreamView(remoteStream);
            remoteView.play("remote-video-streaming-container", {
                objectFit: "cover",
                enableAutoplayDialog: true,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        createRoom()
    }, [])

    useEffect(() => {
        // const remoteStream = await instance.startPlayingStream(configurationObj.videoCallingConfigObj.streamId, {});
        // console.log("remoteStream", remoteStream)
        // const remoteView = instance.createRemoteStreamView(remoteStream);
        // remoteView.play("remote-video-streaming-container", {
        //     objectFit: "cover",
        //     enableAutoplayDialog: true,
        // })
    }, [])

    return (
        <div className='h-screen'>
            <div style={{
                height: '500px',
                width: '500px',
                border: 'solid',
            }} id='local-video-streaming-container' />

            <div style={{
                height: '500px',
                width: '500px',
                border: 'solid',
            }} id='remote-video-streaming-container' />
        </div >
    );
}

export default VideoCalling;