import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total ? Math.round((feedback.good / total) * 100) : 0;

  const handleFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.container}>
      <h1>Leave Your Feedback</h1>
      <Options onFeedback={handleFeedback} onReset={resetFeedback} total={total} />
      {total > 0 ? (
        <Feedback feedback={feedback} total={total} positive={positive} />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;
