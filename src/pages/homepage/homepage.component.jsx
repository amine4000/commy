import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Please choose a category</h1>
    <Directory />
  </div>
);

export default HomePage;
