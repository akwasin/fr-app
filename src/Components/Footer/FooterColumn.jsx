import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './FooterColumn.css';

/**
 * Renders Footer
 * @class
 */
class FooterColumn extends Component {
  /**
   * Creates a new footer column.
   */
  constructor() {
    super();

    this.state = {
      status: true,
    };
  }

  typeMapper(type, content) {
    switch (type) {
      case 'links':
        return (
          <div className='footer-column-links'>
            {content.map((link) => (
              <a href='_blank' key={`key-${link}`}>{link}</a>
            ))}
          </div>
        );
      case 'news':
        return (
          <div className='footer-column-news'>
            <strong>
              <a href='_blank'>{content[0].title}</a>
            </strong>
            <p>{content[0].story}</p>
            <a href='_blank'>More news</a>
          </div>
        );
      case 'social':
        return (
          <div className='footer-column-social'>
            <img
              alt='facebook'
              src='https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-64.png'
            />
            <img
              alt='instagram'
              src='https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-64.png'
            />
            <img
              alt='twitter'
              src='https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-03-64.png'
            />
          </div>
        );
      case 'input':
        return <div className='footer-column-newsletter'>
          <input placeholder='Enter your email'></input>
          <button>Submit</button>
        </div>;

      default:
        console.log('not rendering anything');
    }
  }

  /**
   * {@inheritDoc}
   */
  render() {
    const { type, header, content } = this.props;

    return (
      <div className='footer-column'>
        <h4>{header}</h4>
        {this.typeMapper(type, content)}
      </div>
    );
  }
}

FooterColumn.propTypes = {
  // id: PropTypes.number.isRequired,
  // category: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
};

export default FooterColumn;
