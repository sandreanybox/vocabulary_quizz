const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import DictionariesList from '../dictionarieslist';

describe('core.components.dictionarieslist', () => {
  const dictionaries = [
    {langOrigin: 'Meditations', _id: '1234'},
    {langOrigin: 'The Art of Disappearing', _id: '5678'},
  ];

  it('should list given number of items', () => {
    const el = shallow(<DictionariesList dictionaries={dictionaries} />);
    expect(el.find('li').length).to.be.equal(dictionaries.length);
  });

  it('should list langOrigin for each dictionary', () => {
    const el = shallow(<DictionariesList dictionaries={dictionaries}/>);
    const lis = el.find('li');
    lis.forEach((li, index) => {
      const aText = li.find('a').first().text();
      expect(aText).to.be.equal(dictionaries[index].langOrigin);
    });
  });

  it('should list link for each dictionary', () => {
    const el = shallow(<DictionariesList dictionaries={dictionaries}/>);
    const lis = el.find('li');
    lis.forEach((li, index) => {
      const href = li.find('a').first().prop('href');
      expect(href).to.be.equal(`/dictionaries/${dictionaries[index]._id}`);
    });
  });
});
