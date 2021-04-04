import React from 'react';
import './styles.css';

export default function Progress() {
    return (
      <div className='progress'>
          <span>Exploit Availability</span>
          <p>REMAINING</p>
          <span>80</span><progress id='progress' max="100" value="80"/>
          <p>OTHER CONTENT HERE?</p>
          <span>10</span><progress id='progress' max="100" value="10"/>
      </div>
    );
};
