import { Link } from "react-router-dom";

const Button = ({ name, customStyle, target }) => {
  return (
    <Link to={target}>
      <button className={customStyle}>
        <h1>{name}</h1>
      </button>
    </Link>
  );
};

export default Button;
