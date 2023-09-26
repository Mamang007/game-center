import { Link } from "react-router-dom";

const Button = ({ name, customStyle, target, handleOnClick }) => {
  return (
    <Link to={target}>
      <button className={customStyle} onClick={handleOnClick}>
        <h1>{name}</h1>
      </button>
    </Link>
  );
};

export default Button;
