module.exports = [
  {
    name: 'pet-project',
    title: 'My pet project',
    image: 'kitty.png',
    summary: 'A cuddly project to pet',
    description: 'Another pet project down the hatch!',
    categories: [
      'sports'
    ],
    tags: [
      'pet',
      'cuddle'
    ],
    owner: 'kmandrup',
    relations: {
      projects: [
      ],
      repos: [
      ],
      teams: [
      ],
      users: [
      ]
    },
    milestones: [
      {
        name: 'prototype',
        title: 'First prototype',
        summary: 'The prototype must ...',
        description: 'In order to ...'
      }
    ],
    issues: [
      {
        title: 'Database sucks',
        description: 'Fuckin sucks baby!',
        complexity: 12,
        reposInvolved: [

        ],
        tags: [
          'fucks',
          'sucks'
        ],
        owner: 'kmandrup',
        assignedTo: [
          'kmandrup',
          'jcabrera'
        ]
      }
    ]
  }
];
