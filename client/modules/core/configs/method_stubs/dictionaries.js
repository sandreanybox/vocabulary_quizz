import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'dictionaries.create'(name, langOrigin, langLearn) {
      check(name, String);
      check(langOrigin, String);
      check(langLearn, String);

      const createdAt = new Date();
      const dictionary = {name, langOrigin, langLearn, createdAt};
      return Collections.Dictionaries.insert(dictionary);
    }
  });
}
