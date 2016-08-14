import {Dictionaries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'dictionaries.create'(name, langOrigin, langLearn) {
      check(name, String);
      check(langOrigin, String);
      check(langLearn, String);

      const createdAt = new Date();
      const dictionary = {name, langOrigin, langLearn, createdAt};
      Dictionaries.insert(dictionary);
    }
  });
}
