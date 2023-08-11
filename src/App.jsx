import { useState } from "react";
//Components
import { ReactComponent as SignUpIllustration } from "./assets/images/illustration-sign-up-mobile.svg";
import { ReactComponent as IconList } from "./assets/images/icon-list.svg";
import Form from "./components/form/Form";
//Styles
import "./App.scss";
import Success from "./components/Alert/Success";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const options = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ].map((el) => (
    <div className="option" key={el}>
      <IconList className="icon" />
      <p>{el}</p>
    </div>
  ));

  return (
    <div className="App">
      {openModal ? (
        <Success
          setOpenModal={setOpenModal}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        <div className="container">
          <header className="img-container">
            <SignUpIllustration className="img" />
          </header>
          <main className="body">
            <h1 className="title">Stay updated!</h1>
            <span>
              Join 60,000+ product managers receiving monthly updates on:
            </span>
            {options}
            <Form setOpenModal={setOpenModal} setEmail={setEmail} />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
