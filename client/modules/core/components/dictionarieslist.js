import React from 'react';

const dictionariesList = ({dictionaries}) => (
  <div className='dictionarieslist'>
    <ul>
      {dictionaries.map(dictionary => (
        <li key={dictionary._id}>
          <a href={`/dictionaries/${dictionary._id}`}>{dictionary.langOrigin} // {dictionary.langLearn}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default dictionariesList;
