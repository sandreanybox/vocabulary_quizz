const { describe, it } = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../dictionarieslist';

describe('core.containers.dictionarieslist', () => {
  describe('composer', () => {
    it('should subscribe to dictionaries.list', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const context = () => ({Meteor});
      const onData = spy();

      composer({context}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'dictionaries.list'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all posts & pass to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const dictionaries = [ {_id: 'aa'} ];
        const Collections = {Dictionaries: {find: stub()}};
        Collections.Dictionaries.find.returns({fetch: () => dictionaries});

        const context = () => ({Meteor, Collections});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {dictionaries} ]);
      });
    });
  });
});
