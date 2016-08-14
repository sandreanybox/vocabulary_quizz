const { describe, it } = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {depsMapper} from '../newDictionary';

describe('core.containers.newDictionary', () => {
  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map dictionaries.create', () => {
        const actions = {dictionaries: {create: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.create).to.be.equal(actions.dictionaries.create);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {dictionaries: {create: spy()}};
        const context = spy();
        const deps = depsMapper(context, actions);
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
