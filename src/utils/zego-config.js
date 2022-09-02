import { ZegoExpressEngine } from 'zego-express-engine-webrtc'

export const zegoInstance = () => {
    return new ZegoExpressEngine(Number(process.env.REACT_APP_ID), process.env.REACT_APP_SERVER);
}