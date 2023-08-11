//Styles
import "./input.scss";

const Input = ({ err, label, ...otherProps }) => {
  return (
    <div className="form-input">
      <div className="form-labels">
        {label && <label className="input-label">{label}</label>}
        {err && <p className="err">Valid email required</p>}
      </div>
      <input
        className={`${err ? "err-input input" : "input"}`}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
