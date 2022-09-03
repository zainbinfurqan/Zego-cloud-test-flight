export const authMiddleware = {

    loginAndRegistration: async () => {
        try {
            const response = await fetch('', {
                method: 'POST',
            });
            const res = await response.json();
            if (response.status === 200) {

            } else {

            }
            return true
        } catch (error) {

        }
    },

    generateTokenForCalling: async () => {
        try {
            // const response = await fetch('', {
            //     method: 'POST',
            // });
            // const res = await response.json();
            // if (response.status === 200) {
            //     return true
            // } else {
            //     return false
            // }
            return true
        } catch (error) {

        }
    },
    getTokenByRoomId: async () => {
        try {
            // const response = await fetch('', {
            //     method: 'POST',
            // });
            // const res = await response.json();
            // if (response.status === 200) {
            //     return true
            // } else {
            //     return false
            // }
            return true
        } catch (error) {

        }
    }

}