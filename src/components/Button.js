import { PropTypes } from "prop-types";

const Button = ({ color, text, clickHandler }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.prototype = {
  color: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
