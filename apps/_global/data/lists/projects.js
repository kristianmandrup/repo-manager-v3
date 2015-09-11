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
        'legacy-system'
      ],
      repos: [
        'elephant-jack'
      ],
      teams: [
        'a-team'
      ],
      users: [
        'kmandrup',
        'badass',
        'mother',
        'jack'
      ]
    },
    milestones: [
      {
        name: 'prototype',
        title: 'First prototype',
        summary: 'The prototype must ...',
        description: 'In order to ...',
        tags: [
          'proto', 'web'
        ]
      }
    ],
    issues: [
      {
        title: 'Database sucks',
        description: 'Fuckin sucks baby!',
        complexity: 12,
        relations: {
          repos: [
            'karma/boy'
          ]
        },
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
    ],
    comments: [
      {
        user: 'jack',
        content: 'Jack is back!'
      },
      {
        user: 'badass',
        content: 'This project ROCKS :)'
      }
    ]
  }
];
