import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div className={styles.feedback}>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positive}%</p>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
