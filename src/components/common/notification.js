import { notification } from "antd";

const Notification = (props) => {
  notification[props.type]({
    message: props.message,
    description: props.description,
    placement: "topLeft",
  });
};

export default Notification;
