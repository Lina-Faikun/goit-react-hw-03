import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
