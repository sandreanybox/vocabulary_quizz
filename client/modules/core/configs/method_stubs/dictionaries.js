import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'dictionaries.create'(_id, langOrigin, langLearn) {
      check(_id, String);
      check(langOrigin, String);
      check(langLearn, String);

      const createdAt = new Date();
      const dictionary = {_id, langOrigin, langLearn, createdAt};
      Collections.Dictionaries.insert(dictionary);
    }
  });
}
