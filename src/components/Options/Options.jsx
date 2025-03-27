import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ onFeedback, onReset, total }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default Options;
