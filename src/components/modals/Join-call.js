import React, { useState, useReducer } from 'react';
import { configurationObj } from '../../config/config';

const initialState = {
    error: {}
};
function reducer(state, action) {
    switch (action.type) {
        case "ON_ERROR":
            return { ...state, error: { ...action.payload } };
        default:
            return state;
    }
}

function JoinCall(props) {

    // const [state, dispatch] = useReducer(reducer, initialState);

    const [configObj, setConfigObj] = useState({
        streamId: props.type == 'make' ? Array(9).fill().map(() => ((Math.random() * 36) | 0).toString(36)).join('') : '',
        roomId: props.type == 'make' ? Array(9).fill().map(() => ((Math.random() * 36) | 0).toString(36)).join('') : '',
    })

    const handleTextChange = (key, value) => {
        setConfigObj({ ...configObj, [key]: value })
    }

    const copyConfigKeys = () => {
        const node = document.getElementById('config-keys');
        navigator.clipboard.writeText(node.textContent)
    }
    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
            id="modal-id">
            <p className='hidden' id="config-keys">streamID : {configObj.streamId} RoomID : {configObj.roomId}</p>
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <h2 className='text-3xl text-center font-medium'>{props.title}</h2>
                <div className="">
                    <div className='flex'>
                        <p className="text-base py-2 text-sm px-2">Please copy streamId and RoomId</p>
                        <p className='border p-2 w-fit cursor-pointer' onClick={copyConfigKeys}>Copy!</p>
                    </div>
                    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                        <div class="px-5 py-7">
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Stream ID</label>
                            <input
                                onChange={(e) => handleTextChange('streamId', e.target.value)}
                                disabled={props.type == 'make' ? true : false}
                                value={configObj.streamId}
                                type="text"
                                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Room ID</label>
                            <input
                                onChange={(e) => handleTextChange('roomId', e.target.value)}
                                disabled={props.type == 'make' ? true : false}
                                value={configObj.roomId}
                                type="text"
                                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        </div>
                    </div>
                    {/* <div className="text-center p-5 flex-auto justify-center">
                        <div className='border my-2'>
                            <input
                                onChange={(e) => handleTextChange('roomId', e.target.value)}
                                disabled={props.type == 'make' ? true : false}
                                value={configObj.roomId}
                                type="text"
                                className="w-full  leading-normal  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="placeholder"
                            />
                        </div>
                        <div className='border my-2'>
                            <input
                                onChange={(e) => handleTextChange('streamId', e.target.value)}
                                disabled={props.type == 'make' ? true : false}
                                value={configObj.streamId}
                                type="text"
                                className="w-full  leading-normal  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="placeholder"
                            />
                        </div>
                      
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={props.handleClose} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Cancel
                        </button>
                        <button onClick={() => props.handleJoinOrCreate({ streamId: configObj.streamId, roomId: configObj.roomId, roomType: props.type, callingType: props.callingType })} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                            {props.type == 'make' ? 'Create' : 'Join'}
                        </button>
                    </div>
                 */}
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={props.handleClose} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Cancel
                        </button>
                        <button onClick={() => props.handleJoinOrCreate({ streamId: configObj.streamId, roomId: configObj.roomId, roomType: props.type, callingType: props.callingType })} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                            {props.type == 'make' ? 'Create' : 'Join'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinCall;