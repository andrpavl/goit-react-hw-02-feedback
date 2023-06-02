import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        type="button"
        className={css.btn}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = { onLeaveFeedBack: PropTypes.func };
