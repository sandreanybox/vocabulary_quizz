import {Dictionaries} from '/lib/collections';

export default function () {
  if (!Dictionaries.findOne()) {
    for (let i = 1; i <= 5; i++) {
      const langLearn = `Français #${i}`;
      const langOrigin = `Roumain #${i}`;
      Dictionaries.insert({langLearn, langOrigin});
    }
  }
}
