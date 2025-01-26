import React from 'react';
import './title.css';

function Title({ titleText, darkOrLight, textCenter }) {
  return <h2 className={`title ${darkOrLight} ${textCenter}`}>{titleText}</h2>;
}

export default Title;
