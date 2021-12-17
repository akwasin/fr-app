import React, { Component } from 'react';
// import Button from '../Button/Button';
import './StoreLocation.css';
import Strings from '../../Resources/Strings';
/**
 * Renders Store location element
 * @class
 */
class StoreLocation extends Component {
  /**
   * {@inheritDoc}
   */
  render() {

    return (
      <div className={`storelocation-wrapper`}>
        <div className='storelocation-grey'>
          <div className='storelocation-location'>
            <p>
              <strong>{Strings.general.location}</strong>
            </p>
            <p>
              {`${Strings.storeLocation.adress.street} ${Strings.storeLocation.adress.code}`}
            </p>
            <p>{`${Strings.storeLocation.adress.city}, ${Strings.storeLocation.adress.country}`}</p>
          </div>
          <div className='storelocation-opening-times'>
            <p>
              <strong>{Strings.general.Opening}</strong>
            </p>
            <p>
              {`${Strings.storeLocation.hours.monfri}: ${Strings.storeLocation.hours.monfriOpening} - ${Strings.storeLocation.hours.monfriClosing}`}
            </p>
            <p>
            {`${Strings.storeLocation.hours.sat}: ${Strings.storeLocation.hours.satOpening} - ${Strings.storeLocation.hours.satClosing}`}
            </p>
            <p>
            {`${Strings.storeLocation.hours.sun}: ${Strings.storeLocation.hours.sunStatus}`}
            </p>
          </div>
        </div>
        <div className='storelocation-image' />
      </div>
    );
  }
}

export default StoreLocation;
