const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewDictionary from '../newdictionary';

describe('core.components.newdictionary', () => {
  it('should display the create dictionary form', () => {
    const el = shallow(<NewDictionary />);
    const inputs = el.find('input');
    const name = inputs.get(0);
    const langOrigin = inputs.get(1);
    const langLearn = inputs.get(2);
    const form = el.find('form').first();

    expect(name.ref).to.be.equal('name');
    expect(langOrigin.ref).to.be.equal('langOrigin');
    expect(langLearn.ref).to.be.equal('langLearn');
    expect(form.prop('onSubmit')).to.be.a('function');
  });

  it('should create a new dictionary when we click on the button', done => {
    const name = 'Wisdom';
    const langOrigin = 'French';
    const langLearn = 'Romanian';

    const onCreate = (u, t, a) => {
      expect(u).to.be.equal(name);
      expect(t).to.be.equal(langOrigin);
      expect(a).to.be.equal(langLearn);
      done();
    };

    const el = shallow(<NewDictionary create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      name: {value: name},
      langOrigin: {value: langOrigin},
      langLearn: {value: langLearn}
    };

    el.find('form').simulate('submit');
  });
});
