import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import DictionariesList from './containers/dictionarieslist';
import Dictionary from './containers/dictionary';
import NewDictionary from './containers/newdictionary';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'dictionaries.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<DictionariesList />)
      });
    }
  });

  FlowRouter.route('/dictionaries/:dictionaryId', {
    name: 'dictionaries.single',
    action({dictionaryId}) {
      mount(MainLayoutCtx, {
        content: () => (<Dictionary dictionaryId={dictionaryId}/>)
      });
    }
  });

  FlowRouter.route('/new-dictionary', {
    name: 'newdictionary',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewDictionary />)
      });
    }
  });
}
