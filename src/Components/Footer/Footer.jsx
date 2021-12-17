import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FooterColumn from './FooterColumn';
import './Footer.css';

/**
 * Renders Footer
 * @class
 */
class Footer extends Component {

  constructor() {
    super();

    this.footerLinkData = [
      {
        type: 'links',
        header: 'Links',
        content: ['Search', 'News', 'About Us', 'Contact Us', 'Return Policy']
      },
      {
        type: 'news',
        header: 'Latest News',
        content: [{
          title: 'We´ve finally launched!',
          story: 'After a lot of planning, sourcing, packaging, pricing, and more, it was time to launch. Here we go!'
        }]
      },
      {
        type: 'social',
        header: 'Follow us',
        content: ['facebook', 'twitter', 'instagram']
      },
      {
        type: 'input',
        header: 'Newsletter',
        content: ['inputField']
      }
    ]
  }

  /**
   * {@inheritDoc}
   */
  render() {
    const { classname } = this.props;


    return (
      <footer className={classname}>
        {
          this.footerLinkData.map((footerData) =>
            <FooterColumn
              key={`footer-column-${footerData.header}`}
              header={footerData.header}
              type={footerData.type}
              content={footerData.content}
              />
          )
        }
      </footer>
    );
  }
}

// Footer.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Footer;
