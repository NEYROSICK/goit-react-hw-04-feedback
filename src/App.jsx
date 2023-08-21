import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import React from 'react';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  #TOTAL_FEEDBACK = 0;

  updateStats = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return (this.#TOTAL_FEEDBACK = Object.values(this.state).reduce(
      (total, value) => total + value
    ));
  };

  countPositiveFeedbackPercentage = () => {
    if (this.#TOTAL_FEEDBACK !== 0) {
      const positive = ((this.state.good / this.#TOTAL_FEEDBACK) * 100).toFixed(
        1
      );
      return positive.includes(0.0)
        ? Math.floor(positive) + '%'
        : positive + '%';
    }
    return 0 + '%';
  };

  render() {
    return (
      <>
        <Section title={'Please Leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.updateStats}></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          {Object.values(this.state).some(number => number > 0) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
