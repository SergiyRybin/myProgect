import { Component } from "react";
import Statistics from "../Stat/Stat";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../SectionChildren/SectionChildren";
import Notification from "../Notification/Notification";
import React from "react";

type MyState = {
  good: number;
  neutral: number;
  bad: number;
};

class Feedback extends Component {
  state: MyState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const targetName = (event.target as HTMLButtonElement).dataset.name;

    this.setState((prev: MyState) => {
      if (targetName === "Good") return (prev.good += 1);
      if (targetName === "Neutral") return (prev.neutral += 1);
      if (targetName === "Bad") return (prev.bad += 1);
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const persentFromTotal = Math.round((good * 100) / total);
    return persentFromTotal;
  }

  render() {
    const total = this.countTotalFeedback();
    const totalPersent = this.countPositiveFeedbackPercentage();
    return (
      <>
        {/* <ButtonBack/> */}
        <div className="container">
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.addFeedback} />
          </Section>
          <Section title="Statistics">
            {total === 0 ? (
              <Notification messege="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={totalPersent}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default Feedback;

// function sta<T extends object, U extends keyof T>(prev: T, targetName: U) {
//   return { [targetName]: prev[targetName] };
// }

// console.log( sta({ good: 0 }, "good"))
