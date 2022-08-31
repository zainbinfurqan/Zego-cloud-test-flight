import { ZegoExpressEngine } from 'zego-express-engine-webrtc'


export const zegoInstance = () => {
    console.log(Number(process.env.REACT_APP_ID))
    console.log(process.env.REACT_APP_SERVER)
    // return ''
    return new ZegoExpressEngine(Number(process.env.REACT_APP_ID), process.env.REACT_APP_SERVER);
}