import PropTypes from 'prop-types';
import { Ul, Li } from './statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};

export default Statistics;
