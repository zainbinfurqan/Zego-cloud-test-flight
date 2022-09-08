import { LocalStorageFN } from "../utils/localstorage";

export const authMiddleware = {

    loginAndRegistration: async (data, history) => {
        console.log(data)
        try {
            const response = await fetch('http://localhost:3001/auth/loginregister', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const res = await response.json();
            if (response.status === 200) {
                delete res.data.password
                LocalStorageFN.addToLocalStorage('auth-credits', res.data)
                history('/home')
            } else {
                console.log("error")
            }
            return true
        } catch (error) {

        }
    },

    generateTokenForCalling: async (data, history) => {
        try {
            const response = await fetch('http://localhost:3001/auth/createctokenforcalling', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const res = await response.json();
            if (response.status === 200) {
                LocalStorageFN.addToLocalStorage('zego-room-config', {
                    ...data,
                    token: res.data.token
                })
                return true
            } else {
                return false
            }
        } catch (error) {

        }
    },
    getTokenByRoomId: async (data, history) => {
        try {
            const response = await fetch('http://localhost:3001/auth/getcallingtokenbyroomid', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const res = await response.json();
            if (response.status === 200) {
                console.log(res)
                LocalStorageFN.addToLocalStorage('zego-room-config', {
                    ...data,
                    token: res.data.token
                })
                return true
            } else {
                return false
            }
        } catch (error) {

        }
    }

}