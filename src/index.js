import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Project from './components/Project';

import LeCode from './pages/LeCode';

ReactDOM.render(
  <React.StrictMode>
    <LeCode />
    {/* <Project side="left" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
