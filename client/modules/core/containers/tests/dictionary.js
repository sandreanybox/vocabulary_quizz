const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../dictionary';

describe('core.containers.dictionary', () => {
  describe('composer', () => {
    const Tracker = {nonreactive: cb => cb()};
    const getCollections = (dictionary) => {
      const Collections = {
        Dictionaries: {findOne: stub()}
      };
      Collections.Dictionaries.findOne.returns(dictionary);
      return Collections;
    };

    it('should subscribe to the given dictionaryId via prop', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});
      const Collections = getCollections();

      const context = () => ({Meteor, Tracker, Collections});
      const dictionaryId = 'dwd';
      const onData = spy();

      composer({context, dictionaryId}, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 2)).to.deep.equal([
        'dictionaries.single', dictionaryId
      ]);
    });

    describe('before subscription ready', () => {
      describe('with latency componsation', () => {
        it('should call onData with data', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const dictionary = {aa: 10};
          const Collections = getCollections(dictionary);

          const context = () => ({Meteor, Tracker, Collections});
          const dictionaryId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.deep.equal({dictionary});
            done();
          };

          composer({context, dictionaryId}, onData);
        });
      });

      describe('with no latency componsation', () => {
        it('should call onData without nothing', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const Collections = getCollections();

          const context = () => ({Meteor, Tracker, Collections});
          const dictionaryId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.equal(undefined);
            done();
          };

          composer({context, dictionaryId}, onData);
        });
      });
    });

    describe('after subscription is ready', () => {
      it('should call onData with data', done => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});
        const dictionary = {aa: 10};
        const Collections = getCollections(dictionary);

        const context = () => ({Meteor, Tracker, Collections});
        const dictionaryId = 'dwd';
        const onData = (err, data) => {
          expect(data).to.be.deep.equal({dictionary});
          done();
        };

        composer({context, dictionaryId}, onData);
      });
    });
  });
});
