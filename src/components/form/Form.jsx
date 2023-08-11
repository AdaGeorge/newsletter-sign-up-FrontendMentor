//Styles
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./form.sass";

const Form = ({ setOpenModal, setEmail }) => {
  const [error, setError] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(event.target[0].value)) {
      setError(false);
      setEmail(event.target[0].value);
      setOpenModal(true);
      event.target[0].value = "";
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        name="email"
        label="Email address"
        placeholder="email@company.com"
        err={error}
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
};

export default Form;
