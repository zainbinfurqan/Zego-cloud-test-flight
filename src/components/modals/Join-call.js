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
        server: props.type == 'make' ? Array(9).fill().map(() => ((Math.random() * 36) | 0).toString(36)).join('') : '',
    })

    const handleTextChange = (key, value) => {
        setConfigObj({ ...configObj, [key]: value })
    }

    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
            id="modal-id">
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <h2 className='text-3xl text-center font-medium'>{props.title}</h2>
                <div className="">
                    <div className="text-center p-5 flex-auto justify-center">
                        <div className='border my-2'>
                            <input
                                onChange={(e) => handleTextChange('server', e.target.value)}
                                disabled={props.type == 'make' ? true : false}
                                value={configObj.server}
                                type="text"
                                className="w-full  leading-normal  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                placeholder="placeholder"
                            />
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg> */}
                        {/* <p className="text-sm text-gray-500 px-8">Do you really want to delete your account?
                            This process cannot be undone</p> */}
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={props.handleClose} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Cancel
                        </button>
                        <button onClick={props.handleJoin} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                            {props.type == 'make' ? 'Create' : 'Join'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinCall;