import { Button } from 'ui/Button.styled';
import { Ul } from './feedbackOptions.styled';
import { useContext, useMemo } from 'react';
import { Context } from 'context/globalContext';

const feedbackChoices = ['Good', 'Neutral', 'Bad'];

const FeedbackOptions = () => {
  const { dispatch: onLeaveFeedback } = useContext(Context);

  const buttonsList = useMemo(() => {
    return feedbackChoices.map(option => (
      <li key={option}>
        <Button onClick={() => onLeaveFeedback({ type: option.toLowerCase() })}>
          {option}
        </Button>
      </li>
    ));
  }, [onLeaveFeedback]);

  return <Ul>{buttonsList}</Ul>;
};

export default FeedbackOptions;
