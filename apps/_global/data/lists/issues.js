module.exports = [
  {
    name: 'issue-1',
    title: 'Database sucks',
    description: 'Fuckin sucks baby!',
    complexity: 12,
    tags: [
      'fucks',
      'sucks'
    ],
    owner: 'kmandrup',
    assignedTo: [
      'kmandrup',
      'jcabrera'
    ]
  },
  {
    name: 'bug-1',
    title: 'It just does not feel right',
    type: 'bug',
    logo: 'angry bird',
    summary: 'Why were my pet features not included?',
    description: 'You should have listened to me, boys!!',
    owner: 'crybaby',
    complexity: 12,
    relations: {
      milestones: [
        'prototype'
      ],
      issues: [
        '1', '2'
      ],
      teams: [
        'a-team',
        'mission impossible'
      ],
      repos: [
        'marko-js/marko',
        'koa-js/koa'
      ],
      projects: [
        'prototyper'
      ]
    },
    comments: [
      {
        user: 'badass',
        content: 'Dont you cryyyy tonight, little boy ;)'
      },
      {
        user: 'angeleyes',
        content: 'Dont cry for me Argentiiiiina!!!'
      },
      {
        user: 'daddy',
        content: 'Pull yourself together my boy. Stand proud and tall. Keep fighting!'
      }
    ]
  }
];
