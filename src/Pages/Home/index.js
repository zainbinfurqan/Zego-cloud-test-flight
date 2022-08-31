import React, { useEffect } from 'react';
import { zegoInstance } from '../../utils/zego-config';



function Home(props) {
    const config = {
        roomId: '00001',
        token: '04AAAAAGMRLpUAEDQ0NmpkNXN2bmxpYnQ3eGUAoI+g69oSQgqfLjc2TEv6RxgWPF3kmcibkjx3dd6wPJBMnRFy3PB7qvReYsqwYZk7eW06DzkfLrY5V2ptBXsrHyrLFd+3ivLiwzjH/TfiJ/EfbZxxVubJIKSLuCQIbuOU/x0L5JT4wQnrVAoPU5ODGLJ5iqgzJpqLYLt9dvembrCl08bYLoqh96OWXjBy666dlWsB6iEnBIIcVmM8jB4DwoM=',
        userID: '00000',
        userName: 'zainahmed',
    }
    const instance = zegoInstance()

    const creatRoom = async () => {
        const result = await instance.checkSystemRequirements();
        const stramRoom = await instance.loginRoom(config.roomId, config.token,
            { userID: config.userID, userName: config.userName }, { userUpdate: true });
        console.log("stramRoom", stramRoom)
    }
    useEffect(() => {
        creatRoom()
    }, [instance])

    return (
        <div class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10"
        >
            <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100  ">
                <div
                    class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                    <span class="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                    <p class="text-xl font-medium text-slate-700 mt-3">Most Experienced Team</p>
                    <p class="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic
                        set of people.</p>
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
                    <p class="text-xl font-medium text-slate-700 mt-3">Best
                        Test preparation</p>
                    <p class="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p>
                </div>
            </div>
        </div>
    );
}

export default Home;