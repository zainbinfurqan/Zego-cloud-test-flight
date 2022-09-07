import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { authMiddleware } from '../../middleware/auth';
import { LocalStorageFN } from '../../utils/localstorage';

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

function LoginRegister(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const history = useNavigate()

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        signUp: false
    })

    const handleTextChanges = (key, value) => {
        console.log(value)
        setCredentials({ ...credentials, [key]: value })
    }

    const validation = (data) => {

        const error = {}
        if (data.email.trim() == '') { }
        if (data.email.trim()) { }
        if (data.password.trim() == '') { }
        if (data.password.trim()) { }
        dispatch({ type: "ON_ERROR", payload: error });

        return !Object.keys(error).length;
    }

    const handleSubmit = () => {
        // const isValidate = validation(credentials);
        LocalStorageFN.addToLocalStorage('auth-credits',
            {
                name: 'zain ahmed', email: 'zainahmed@gmail.com',
                // id: Math.floor(Math.random() * 10000)
                id: '11111'
            })
        history('/home')
        // authMiddleware.loginAndRegistration(credentials, history);
    }

    return (
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div class="px-5 py-7">
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input
                            value={credentials.email}
                            placeholder="email"
                            onChange={(e) => handleTextChanges('email', e.target.value)}
                            type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input
                            value={credentials.password}
                            placeholder="password"
                            onChange={(e) => handleTextChanges('password', e.target.value)}
                            type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        <div className="flex self-center py-2">
                            <label className="pr-2 font-semibold text-sm text-gray-600 pb-1 block">Creating account first time?</label>
                            <input type="checkbox" className="self-center" value={credentials.signUp} onChange={() => handleTextChanges('signUp', !credentials.signUp)} />
                        </div>
                        <button onClick={handleSubmit} type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span class="inline-block mr-2">Login/Signup</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;