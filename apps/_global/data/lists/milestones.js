module.exports = [
  {
    name: 'prototype',
    title: 'The first prototype',
    logo: 'prototype',
    summary: 'Should cover the basic functionality as per the specs',
    description: 'This app will solve all the problems in the world!!',
    owner: 'kmandrup',
    tags: [
      'initial',
      'web',
      'application'
    ],
    relations: {
      users: [
        'kmandrup'
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
        content: 'We are never gonna finish this piece of crap in time. Gonna be BAD ASS!'
      },
      {
        user: 'mother',
        content: 'Come to mama! Dont be afraid, you can do it...'
      }
    ]
  }
];
