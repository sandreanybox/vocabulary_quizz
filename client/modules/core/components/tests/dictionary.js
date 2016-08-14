const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dictionary from '../dictionary';

describe('core.components.dictionary', () => {
  it('should display the dictionary langOrigin', () => {
    const dictionary = {langOrigin: 'Meditations'};
    const el = shallow(<Dictionary dictionary={dictionary} />);
    expect(el.find('h2').text()).to.be.match(/Meditations/);
  });

  it('should display the post langLearn', () => {
    const dictionary = {langLearn: 'Marcus Aurelius'};
    const el = shallow(<Post dictionary={dictionary} />);
    expect(el.find('p').text()).to.be.match(/Nice content/);
  });
});
