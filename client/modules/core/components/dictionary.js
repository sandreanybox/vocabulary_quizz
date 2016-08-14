import React from 'react';

const Dictionary = ({dictionary}) => (
  <div>
    <h2>{dictionary.name}</h2>
    <span>{dictionary.langOrigin} // {dictionary.langLearn}</span>
  </div>
);

export default Dictionary;
