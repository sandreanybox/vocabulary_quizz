export default {
  create({Meteor, LocalState, FlowRouter}, langOrigin, langLearn) {
    if (!langOrigin || !langLearn) {
      return LocalState.set('SAVING_ERROR', 'langLearn & langOrigin are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('dictionaries.create', id, langLearn, langOrigin, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });

    FlowRouter.go(`/dictionaries/${id}`);
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
