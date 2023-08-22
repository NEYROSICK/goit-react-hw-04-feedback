import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import { Context } from 'context/globalContext';
import { useContext } from 'react';

export default function App() {
  const { state } = useContext(Context);

  return (
    <>
      <Section title={'Please Leave feedback'}>
        <FeedbackOptions />
      </Section>
      <Section title={'Statistics'}>
        {Object.values(state).some(number => number > 0) ? (
          <Statistics />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
