import PropTypes from "prop-types";

function Input(props) {
  const { type, value, label, guessNumFunc } = props;

  const handleChange = (event) => {
    guessNumFunc(event.target.value);
  };

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} label={label} onChange={handleChange} />
    </div>
  );
}

// Props Validation
Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  guessNumFunc: PropTypes.func.isRequired,
};

export default Input;
