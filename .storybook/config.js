import { configure } from '@kadira/storydictionary';
import { disable } from 'react-komposer';

disable();

function loadStories() {
}

configure(loadStories, module);
