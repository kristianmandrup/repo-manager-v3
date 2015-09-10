module.exports = {
  menus: [
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
    header: 'Repos',
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
  }]
}
