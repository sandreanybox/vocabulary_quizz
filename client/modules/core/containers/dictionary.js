import Dictionary from '../components/dictionary';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, dictionaryId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('dictionaries.single', dictionaryId).ready()) {
    const dictionary = Collections.Dictionaries.findOne(dictionaryId);
    onData(null, {dictionary});
  } else {
    const dictionary = Collections.Dictionaries.findOne(dictionaryId);
    if (dictionary) {
      onData(null, {dictionary});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Dictionary);
