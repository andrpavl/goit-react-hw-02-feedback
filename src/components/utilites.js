export const countTotalFeedback = (good, neutral, bad) => {
  const total = good + neutral + bad;
  return total;
};

export function countPositiveFeedbackPercentage(good, total) {
  return Math.round((good / total) * 100);
}
