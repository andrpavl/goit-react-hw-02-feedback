import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <div>{children}</div>
      </>
    );
  }
}

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
