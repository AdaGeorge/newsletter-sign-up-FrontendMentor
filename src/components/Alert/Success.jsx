import { ReactComponent as IconSuccess } from "../../assets/images/icon-success.svg";
import Button from "../Button/Button";
import "./success.scss";

const Success = ({ email, setOpenModal, setEmail }) => {
  const dismissHandler = () => {
    setOpenModal(false);
    setEmail("");
  };
  return (
    <article className="success-container">
      <div className="success-body">
        <IconSuccess className="icon-success" />
        <h2 className="title-success">Thanks for subscribing!</h2>
        <p className="text-success">
          {" "}
          A confirmation email has been sent to <span>{email}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button onClick={dismissHandler}>Dismiss message</Button>
    </article>
  );
};

export default Success;
