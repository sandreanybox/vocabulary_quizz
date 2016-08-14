const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../Dictionary';

describe('core.containers.Dictionary', () => {
  describe('composer', () => {
    const Tracker = {nonreactive: cb => cb()};
    const getCollections = (Dictionary) => {
      const Collections = {
        Dictionaries: {findOne: stub()}
      };
      Collections.Dictionaries.findOne.returns(Dictionary);
      return Collections;
    };

    it('should subscribe to the given DictionaryId via prop', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});
      const Collections = getCollections();

      const context = () => ({Meteor, Tracker, Collections});
      const DictionaryId = 'dwd';
      const onData = spy();

      composer({context, DictionaryId}, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 2)).to.deep.equal([
        'dictionaries.single', DictionaryId
      ]);
    });

    describe('before subscription ready', () => {
      describe('with latency componsation', () => {
        it('should call onData with data', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const Dictionary = {aa: 10};
          const Collections = getCollections(Dictionary);

          const context = () => ({Meteor, Tracker, Collections});
          const DictionaryId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.deep.equal({Dictionary});
            done();
          };

          composer({context, DictionaryId}, onData);
        });
      });

      describe('with no latency componsation', () => {
        it('should call onData without nothing', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const Collections = getCollections();

          const context = () => ({Meteor, Tracker, Collections});
          const DictionaryId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.equal(undefined);
            done();
          };

          composer({context, DictionaryId}, onData);
        });
      });
    });

    describe('after subscription is ready', () => {
      it('should call onData with data', done => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});
        const Dictionary = {aa: 10};
        const Collections = getCollections(Dictionary);

        const context = () => ({Meteor, Tracker, Collections});
        const DictionaryId = 'dwd';
        const onData = (err, data) => {
          expect(data).to.be.deep.equal({Dictionary});
          done();
        };

        composer({context, DictionaryId}, onData);
      });
    });
  });
});
