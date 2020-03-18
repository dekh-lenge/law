import React from 'react';

// LIBRARIES
import cx from 'classnames';

// STYLES
import './styles.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDescription(text) {
    return { __html: text };
  }

  handleCardClick() {
    this.props.onCardClicked && this.props.onCardClicked();
  }

  render() {
    const { props } = this;
    const {
      title,
      description,
      children,
      containerClassName,
      containerStyles,
      ...others
    } = props;

    return (
      <div
        {...others}
        className={cx("custom-card", containerClassName)}
        style={containerStyles}
        onClick={() => {this.handleCardClick()}}
      >
        
        <h2 className = "custom-card__title" > {title } </h2>
        <div>
          {props.children}
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  title: "",
  description: "",
};
export default Card;
