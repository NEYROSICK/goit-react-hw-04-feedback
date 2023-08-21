// import PropTypes from 'prop-types'
import { Button } from 'ui/Button.styled';
import { Ul } from './feedbackOptions.styled';

const fedbackChoises = ['Good', 'Neutral', 'Bad'];

const renderButtons = onLeaveFeedback => {
  return fedbackChoises.map(option => {
    return (
      <li>
        <Button
          onClick={() => {
            onLeaveFeedback(option.toLowerCase());
          }}
        >
          {option}
        </Button>
      </li>
    );
  });
};

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return <Ul>{renderButtons(onLeaveFeedback)}</Ul>;
};

// FeedbackOptions.propTypes = {}

export default FeedbackOptions;
