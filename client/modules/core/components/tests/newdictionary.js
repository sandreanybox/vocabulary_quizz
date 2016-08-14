const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewDictionary from '../newdictionary';

describe('core.components.newdictionary', () => {
  it('should display the create dictionary form', () => {
    const el = shallow(<NewDictionary />);
    const langOrigin = el.find('input').first();
    const langLearn = el.find('input').second();
    const form = el.find('form').first();

    expect(langOrigin.node.ref).to.be.equal('langOrigin');
    expect(langLearn.node.ref).to.be.equal('langLearn');
    expect(form.prop('onSubmit')).to.be.a('function');
  });

  it('should create a new dictionary when we click on the button', done => {
    const langOrigin = 'Seeking Wisdom';
    const langLearn = 'Peter Bevelin';

    const onCreate = (t, a) => {
      expect(t).to.be.equal(langOrigin);
      expect(a).to.be.equal(langLearn);
      done();
    };

    const el = shallow(<NewDictionary create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      langOrigin: {value: langOrigin},
      langLearn: {value: langLearn}
    };

    el.find('form').simulate('submit');
  });
});
