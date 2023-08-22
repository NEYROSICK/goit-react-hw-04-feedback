import { Ul, Li } from './statistics.styled';
import { useContext } from 'react';
import { Context } from 'context/globalContext';

const Statistics = () => {
  let { state, TOTAL_FEEDBACK } = useContext(Context);

  const countTotalFeedback = () => {
    return (TOTAL_FEEDBACK = Object.values(state).reduce(
      (total, value) => total + value
    ));
  };

  const countPositiveFeedbackPercentage = () => {
    if (TOTAL_FEEDBACK !== 0) {
      const positive = ((state.good / TOTAL_FEEDBACK) * 100).toFixed(1);
      return positive.includes(0.0)
        ? Math.floor(positive) + '%'
        : positive + '%';
    }
    return 0 + '%';
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = state;

  return (
    <Ul>
      <Li>Good: {good}</Li>
      <Li>Neutral: {neutral}</Li>
      <Li>Bad: {bad}</Li>
      <Li>Total: {total}</Li>
      <Li>Positive feedback: {positivePercentage}</Li>
    </Ul>
  );
};

export default Statistics;
