export default {
  create({Meteor, LocalState, FlowRouter}, name, langOrigin, langLearn) {
    if (!name || !langOrigin || !langLearn) {
      return LocalState.set('SAVING_ERROR', 'name & langLearn & langOrigin are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('dictionaries.create', name, langOrigin, langLearn, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });

    FlowRouter.go(`/`);
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
