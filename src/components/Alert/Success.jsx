import { ReactComponent as IconSuccess } from "../../assets/images/icon-success.svg";
import Button from "../Button/Button";

const Success = ({ email, setOpenModal, setEmail }) => {
  const dismissHandler = () => {
    setOpenModal(false);
    setEmail("");
  };
  return (
    <div className="Success">
      <IconSuccess className="icon-success" />
      <h2 className="title-succes">Thanks for subscribing!</h2>
      <p>
        {" "}
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <Button onClick={dismissHandler}>Dismiss message</Button>
    </div>
  );
};

export default Success;
