import { useState } from "react";
import Icons from "./Icons";

const Messaging = () => {
    const [send, setSend] = useState<boolean>(false);
    const onWriteMessage = () => {
        setSend(true)
    } 
    return (
        <div className="flex bg-white w-[99%] dark:bg-dark-secondary px-3 justify-center items-center h-[8vh]">
            <div className="flex items-center w-full h-full">
            <Icons onClick={() => undefined} href='' icon="ri-emotion-happy-line" />
            <Icons onClick={() => undefined} href='' icon="ri-attachment-2" />
            <input type="text" onChange={onWriteMessage} className="w-[70%] dark:bg-transparent ml-8 h-[35px] focus:outline-none text-[14px] px-4" placeholder="Type a message" />
            </div>
            <Icons onClick={() => undefined} href='' icon={send ? "ri-send-plane-2-line" : "ri-mic-line"} />
        </div>
    )
}

export default Messaging;