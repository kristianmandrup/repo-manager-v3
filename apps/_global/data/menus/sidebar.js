module.exports = [
  {
    type: 'logo', // should be able to auto-detect
    logo: 'my-logo.png',
    label: 'Manticore.io'
  },
  {
    type: 'link', // should be able to auto-detect
    link: '/getting-started.html',
    label: 'Getting started',
  },
  {
    type: 'icon-link', // should be able to auto-detect
    link: '/your-team.html',
    label: 'Your team',
    icon: 'users'
  },
  {
    type: 'sub-menu', // should be able to auto-detect
    header: 'Projects',
    color: 'orange',
    subcolor: 'lightgoldenrodyellow',
    menu: [
      {
        label: 'Project A',
        link: '/projects/a',
        icon: 'star' //favorite
      },
      {
        label: 'Project B',
        link: '/projects/b'
      }
    ]
  },
  {
    type: 'sub-menu', // should be able to auto-detect
    header: 'Services',
    color: 'teal',
    subcolor: 'lightcyan',
    menu: [
      {
        label: 'Service A',
        link: '/services/a',
        icon: 'star' //favorite
      },
      {
        label: 'Service B',
        link: '/service/b'
      }
    ]
  },
  {
    type: 'sub-menu', // should be able to auto-detect
    header: 'Repos',
    color: 'green',
    subcolor: 'lightgreen',
    menu: [
      {
        label: 'Repo A',
        link: '/repos/a'
      },
      {
        label: 'Repo B',
        link: '/repos/b'
      }
    ]
  },
  {
    type: 'sub-menu', // should be able to auto-detect
    color: 'blue',
    subcolor: 'lightblue',
    header: 'Teams',
    menu: [
      {
        label: 'Team A',
        link: '/teams/a',
      },
      {
        label: 'Team B',
        link: '/teams/b'
      }
    ]
  },
  {
    type: 'sub-menu', // should be able to auto-detect
    color: 'purple',
    subcolor: 'lightpink',
    header: 'Users',
    menu: [
      {
        label: 'User A',
        link: '/users/a',
        icon: 'star' //favorite
      },
      {
        label: 'User B',
        link: '/users/b'
      }
    ]
  }
]
