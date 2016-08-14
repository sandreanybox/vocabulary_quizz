import DictionariesList from '../components/dictionarieslist';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('dictionaries.list').ready()) {
    const dictionaries = Collections.Dictionaries.find().fetch();
    onData(null, {dictionaries});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(DictionariesList);
