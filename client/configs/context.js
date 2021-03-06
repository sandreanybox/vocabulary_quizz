import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {DocHead} from 'meteor/kadira:dochead';

export default function () {
  let metaInfo = {name: 'viewport', content: 'width=device-width, initial-scale=1'};
  DocHead.addMeta(metaInfo);
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
