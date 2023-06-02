import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from 'components/utilites';
import { Component } from 'react';
import css from './Statistic.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const total = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(good, total);

    return (
      <div className={css.stat}>
        <p className={css.statEl}>Good: {good}</p>
        <p className={css.statEl}>Neutral: {neutral}</p>
        <p className={css.statEl}>Bad: {bad}</p>
        <p className={css.statEl}>Total: {total}</p>
        <p className={css.statEl}>
          Positive feedback: {positivePercentage || 0}%
        </p>
      </div>
    );
  }
}

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
