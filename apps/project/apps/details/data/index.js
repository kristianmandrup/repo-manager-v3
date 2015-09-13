var _ = require('./global');

module.exports = {
  page: {
    name: 'projects',
    title: 'Project Details',
    item: _.lists.projects[0], // generic :)
    form: _.forms.project,
    containers: [
      'ships',
      'cars'
    ]
  }
};
