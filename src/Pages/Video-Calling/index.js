import React, { useEffect } from 'react';
import { configurationObj } from '../../config/config';
import { zegoInstance } from '../../utils/zego-config';

function VideoCalling(props) {

    const users = [1]

    // const instance = zegoInstance()

    // const createRoom = async () => {
    //     const result = await instance.checkSystemRequirements();
    //     const streamRoom = await instance.loginRoom(
    //         configurationObj.videoCallingConfigObj.roomId,
    //         configurationObj.videoCallingConfigObj.token,
    //         {
    //             userID: configurationObj.videoCallingConfigObj.userID,
    //             userName: configurationObj.videoCallingConfigObj.userName
    //         },
    //         { userUpdate: true });

    //     // Callback for updates on the current user's room connection status.
    //     instance.on('roomStateUpdate', (roomID, state, errorCode, extendedData) => {
    //         if (state == 'DISCONNECTED') {
    //             // Disconnected from the room
    //         }

    //         if (state == 'CONNECTING') {
    //             // Connecting to the room
    //         }

    //         if (state == 'CONNECTED') {
    //             // Connected to the room
    //         }
    //     })

    //     // Callback for updates on the status of ther users in the room.
    //     instance.on('roomUserUpdate', (roomID, updateType, userList) => {
    //         console.warn(
    //             `roomUserUpdate: room ${roomID}, user ${updateType === 'ADD' ? 'added' : 'left'} `,
    //             JSON.stringify(userList),
    //         );
    //     });

    //     // Callback for updates on the status of the streams in the room.
    //     instance.on('roomStreamUpdate', async (roomID, updateType, streamList, extendedData) => {
    //         if (updateType == 'ADD') {
    //             // New stream added, start playing the stream. 
    //         } else if (updateType == 'DELETE') {
    //             // Stream deleted, stop playing the stream.
    //         }
    //     });

    //     // After calling the CreateStream method, you need to wait for the ZEGOCLOUD server to return the local stream object before any further operation.
    //     // console.log("result", result)
    //     // window.navigator.getUserMedia({ audio: true, video: true }, (stream) => {
    //     //     console.log("stream", stream)
    //     // })
    //     const deviceInfo = await instance.enumDevices()
    //     console.log("deviceInfo", deviceInfo.cameras)
    //     const localStream = await instance.createStream({
    //         camera: {
    //             audioInput: '',
    //             videoInput: '',
    //             video: true,
    //             audio: true,
    //         }
    //     });
    //     // Get the audio tag.
    //     const localVideo = document.getElementById('local-video-streaming-container');
    //     // const localAudio = document.getElementById('local-audio');
    //     // The local stream is a MediaStream object. You can render audio by assigning the local stream to the srcObject property of video or audio.
    //     localVideo.srcObject = localStream;
    //     instance.startPublishingStream(configurationObj.videoCallingConfigObj.streamId,
    //         localStream,
    //         { videoCodec: 'H264' })
    //     const localView = instance.createLocalStreamView()
    //     console.log("localStream", localStream)
    //     // const localView = instance.createLocalStreamView(localStream);
    //     // localView.play()
    // }
    // useEffect(() => {
    //     createRoom()
    // }, [])

    return (
        <div className='h-screen'>
            <div className='border p-3 text-center'>
                <button onClick={props.handleJoin} className="mb-2 mx-2 md:mb-0  border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={15}
                        width={15}
                        viewBox="0 0 60 60"
                        style={{
                            enableBackground: "new 0 0 60 60",
                        }}
                        xmlSpace="preserve"
                    >
                        <path d="M51.707 8.293a.999.999 0 0 0-1.414 0l-42 42a.999.999 0 1 0 1.414 1.414l42-42a.999.999 0 0 0 0-1.414zM52.841 10.561 42 21.402v27.491A3.11 3.11 0 0 1 38.893 52c-.547 0-1.09-.149-1.571-.432a.967.967 0 0 1-.174-.131L24.106 39.296 10.561 52.841C15.982 57.469 22.795 60 30 60c8.013 0 15.547-3.121 21.213-8.787S60 38.013 60 30c0-7.205-2.531-14.018-7.159-19.439zM15.104 39A3.108 3.108 0 0 1 12 35.896V23.104A3.108 3.108 0 0 1 15.104 20h8.324c.166 0 .329-.037.479-.109L37.148 7.563c.053-.05.112-.094.174-.131A3.102 3.102 0 0 1 38.893 7 3.11 3.11 0 0 1 42 10.106v4.479l7.433-7.432C44.013 2.529 37.203 0 30 0 21.987 0 14.453 3.121 8.787 8.787S0 21.987 0 30c0 7.202 2.528 14.013 7.153 19.432L17.586 39h-2.482z" />
                    </svg>
                </button>
                <button onClick={props.handleJoin} className="mb-2 mx-2 md:mb-0  border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={15}
                        width={15}
                        viewBox="0 0 300.003 300.003"
                        style={{
                            enableBackground: "new 0 0 300.003 300.003",
                        }}
                        xmlSpace="preserve"
                    >
                        <path d="M150.005 0C67.164 0 .001 67.159.001 150c0 82.838 67.162 150.003 150.003 150.003S300.002 232.838 300.002 150c0-82.841-67.158-150-149.997-150zm47.24 100.506 27.358-15.793a6.438 6.438 0 0 1 6.44 11.15l-27.358 15.795a6.438 6.438 0 0 1-8.795-2.355 6.444 6.444 0 0 1 2.355-8.797zm-31.38 124.118a10.104 10.104 0 0 1-10.66-1.131L122.04 197.51a19.959 19.959 0 0 1-4.796.607H84.01c-10.898 0-19.735-8.836-19.735-19.732v-57.56c0-10.896 8.837-19.735 19.735-19.735h33.235c1.932 0 3.792.29 5.561.809l32.397-25.389a10.112 10.112 0 0 1 10.66-1.131 10.106 10.106 0 0 1 5.683 9.088v131.069h.002a10.113 10.113 0 0 1-5.683 9.088zm68.372-11.241a6.435 6.435 0 0 1-8.795 2.355l-27.358-15.793a6.443 6.443 0 0 1-2.355-8.798 6.436 6.436 0 0 1 8.795-2.355l27.358 15.795c3.079 1.775 4.129 5.712 2.355 8.796zm-3.104-56.588H199.55a6.435 6.435 0 0 1-6.437-6.437 6.436 6.436 0 0 1 6.437-6.437h31.585a6.436 6.436 0 0 1 6.437 6.437 6.436 6.436 0 0 1-6.439 6.437z" />
                    </svg>
                </button>
                <button onClick={props.handleJoin} className="mb-2 mx-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={15}
                        width={15}
                        viewBox="0 0 208.014 208.014"
                        style={{
                            enableBackground: "new 0 0 208.014 208.014",
                        }}
                        xmlSpace="preserve"
                    >
                        <path
                            style={{
                                fill: "#010002",
                            }}
                            d="M61.644 139.278C15.13 92.463 7.632 65.096 10.835 38.53c.419-3.654 1.324-7.294 2.766-11.112 2.613-6.667 6.159-11.17 8.672-13.771l5.458-5.536c1.689-1.686 4.069-2.656 6.535-2.656 2.233 0 4.255.784 5.672 2.215l31.326 31.315c3.239 3.242 3.053 8.722-.422 12.207L51.276 70.74l-.394.401 1.084 1.836c1.095 1.843 2.248 3.915 3.493 6.177 5.615 10.117 13.31 23.892 27.718 38.609l3.887-3.901C73.179 99.685 65.72 86.311 60.27 76.469l-2.502-4.445 16.96-16.953c5.608-5.626 5.801-14.58.422-19.974L43.825 3.779C41.384 1.342 37.991 0 34.266 0c-3.933 0-7.716 1.535-10.393 4.219l-7.695 7.734-.723 1.181a49.08 49.08 0 0 0-6.961 12.301c-1.628 4.287-2.645 8.36-3.106 12.447-4.015 33.273 11.198 63.865 52.369 105.29l3.887-3.894zM199.333 159.305l-31.326-31.344c-2.441-2.434-5.841-3.776-9.57-3.776-3.933 0-7.712 1.539-10.397 4.216l-16.924 16.924-4.574-2.53c-7.287-4.048-16.534-9.205-26.605-17.264l-3.915 3.922c10.608 8.568 20.288 13.95 27.894 18.166a243.738 243.738 0 0 1 6.22 3.525l1.84 1.102 19.956-19.956c1.671-1.671 4.041-2.63 6.503-2.63 2.248 0 4.266.78 5.694 2.215l31.311 31.297c3.228 3.25 3.046 8.725-.408 12.19l-5.544 5.476c-2.62 2.52-7.129 6.066-13.728 8.643-3.718 1.435-7.365 2.351-11.127 2.802-.211.025-1.056.075-2.434.075-10.239 0-44.94-3.264-87.922-41.171l-3.89 3.887c44.546 39.435 80.703 42.814 91.357 42.814 1.979 0 3.174-.115 3.511-.147 4.273-.523 8.364-1.553 12.487-3.146 4.452-1.736 8.564-4.069 12.225-6.929l1.746-1.378 7.201-7.068c5.612-5.585 5.795-14.536.419-19.915zM5.538 203.923 169.103 40.362l4.091 4.091L9.629 208.014l-4.091-4.091z"
                        />
                    </svg>
                </button>
            </div>
            {/* <div className={`${users.length == 1 && 'flex border h-full'} `}>
                <div className={`
                ${users.length == 1 && 'w-full h-full border'}
                ${users.length == 2 && 'w-full h-full border'}
                `}>

                </div>
            </div> */}

            {/* <div style={{
                height: '100px',
                width: '100px',
                border: 'solid',
            }} id='local-video-streaming-container'>

            </div> */}
        </div>
    );
}

export default VideoCalling;