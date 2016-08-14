const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dictionary from '../dictionary';

describe('core.components.dictionary', () => {
  it('should display the dictionary name', () => {
    const dictionary = {name: 'Animal'};
    const el = shallow(<Dictionary dictionary={dictionary} />);
    expect(el.find('h2').text()).to.be.match(/Animal/);
  });

  it('should display the dictionary langOrigin and langLearn', () => {
    const dictionary = {langOrigin: 'French', langLearn: 'Romanian'};
    const el = shallow(<Dictionary dictionary={dictionary} />);
    expect(el.find('span').text()).to.be.match(/French \/\/ Romanian/);
  });
});
