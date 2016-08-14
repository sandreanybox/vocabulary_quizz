import {Dictionaries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('dictionaries.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, langOrigin: 1, langLearn: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Dictionaries.find(selector, options);
  });

  Meteor.publish('dictionaries.single', function (dictId) {
    check(dictId, String);
    const selector = {_id: dictId};
    return Dictionaries.find(selector);
  });
}
