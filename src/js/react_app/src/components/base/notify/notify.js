 import { notification } from "antd";

 const notify = (type, text, title) => {
   notification[type]({
     message: title,
     description: text
   });
 };

 export default notify
