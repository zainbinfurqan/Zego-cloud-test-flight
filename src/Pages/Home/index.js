import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinCall from '../../components/modals/Join-call';
import { authMiddleware } from '../../middleware/auth';
import { LocalStorageFN } from '../../utils/localstorage';

function Home(props) {
    const history = useNavigate()
    const [isJoinCallPanelOpen, setIsJoinCallPanelOpen] = useState(false)
    const [joinCallPanelProps, setJoinCallPanelProps] = useState({ title: '' })
    const handleSelectCall = (obj, flag) => {
        setJoinCallPanelProps(obj)
        setIsJoinCallPanelOpen(flag)
    }

    const handleJoinOrCreate = async (data) => {
        console.log("data", data)
        const tokenResponse = true
        if (data.type == 'make') {
            // tokenResponse = await authMiddleware.generateTokenForCalling()
            // data.token = tokenResponse.token
        } else {
            // tokenResponse = await authMiddleware.getTokenByRoomId()
            // data.token = tokenResponse.token
        }
        if (tokenResponse) {
            // history.push({
            //     pathname: data.type == 'make' ? '/calling-video' : 'calling-audio',
            //     state: { ...data }
            // })
            history(data.callingType == 'video' ? '/calling-video' : '/calling-audio', { state: { ...data } })
            setRoomAndTokenInLocal(data)
            setIsJoinCallPanelOpen(!isJoinCallPanelOpen)
        }
    }

    const setRoomAndTokenInLocal = (data) => {
        LocalStorageFN.addToLocalStorage('zego-room-id', { roomId: data.roomId, token: data.token })
    }

    return (
        <div class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10">
            {isJoinCallPanelOpen && <JoinCall
                handleClose={() => setIsJoinCallPanelOpen(!isJoinCallPanelOpen)}
                handleJoinOrCreate={handleJoinOrCreate}
                type={joinCallPanelProps.type}
                callingType={joinCallPanelProps.callingType}
                title={joinCallPanelProps.title} />}
            <div class="grid grid-cols-1 md:lg:xl:grid-cols-2 group bg-white shadow-xl shadow-neutral-100  ">
                <div
                    class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Video Call</p>
                    <p class="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                        set of people.</p>
                    <div className='flex my-2 p-3 justify-around w-full'>
                        <div onClick={() => handleSelectCall({ title: 'Make a video call', type: 'make', callingType: 'video' }, true,)} className='border p-2'><p>Make Video call</p></div>
                        <div onClick={() => handleSelectCall({ title: 'Join a video call', type: 'join', callingType: 'video' }, true)} className='border p-2'><p>Join Video call</p></div>
                    </div>
                </div>
                <div
                    class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Audio Call</p>
                    <p class="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
                    <div className='flex my-2  p-3 justify-around w-full'>
                        <div onClick={() => handleSelectCall({ title: 'Make a Audio call', type: 'make', callingType: 'audio' }, true)} className='border p-2'><p>Make Audio call</p></div>
                        <div onClick={() => handleSelectCall({ title: 'Make a Audio call', type: 'join', callingType: 'audio' }, true)} className='border p-2'><p>Join Audio call</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;