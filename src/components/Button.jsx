import PropTypes from "prop-types";

function Button(props) {
  const { label, callFunc } = props;
  return (
    <div>
      <button onClick={callFunc}>{label}</button>
    </div>
  );
}

// props validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  callFunc: PropTypes.func.isRequired,
};

export default Button;
