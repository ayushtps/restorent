import { notification } from "antd";

const Notify = (type,message) =>{
    return notification[type]({
        message:message,
        duration: 2,
        placement:"bottomRight"
    });
};

export default Notify;