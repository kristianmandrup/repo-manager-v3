module.exports = {
  page: {
    name: 'index',
    title: 'Repo manager',
    header: 'Repo manager',
    content: 'Hello',
    languages: [
      {
        value: 'spanish'
      },
      {
        value: 'english'
      }
    ],
    work: [
      {
        value: 'no',
        field: 'No'
      },
      {
        value: 'yes',
        field: 'Yes'
      }
    ],
    skills: [
      {
        label: 'Speaking',
        value: 'speak'
      },
      {
        label: 'Reading',
        value: 'read'
      }
    ],
    breadcrumb: [
      {
        ui: 'active',
        label: 'home'
      },
      {
        ui: '',
        label: 'away'
      }
    ],
    userForm: [
      {
        name: 'username',
        label: 'Username'
      },
      {
        label: 'Secret',
        type: 'password'
      }
    ],
    myComment: {
      text: 'hello there',
      author: 'kmandrup'
    },
    comments: [
      {
        text: 'hello there',
        author: 'kmandrup'
      },
      {
        text: 'howdy baby!',
        author: 'kmandrup'
      }
    ],
    iconBtns: [
      {
        ui: 'small blue',
        name: 'user',
        label: 'hit me'
      },
      {
        ui: 'small lightblue',
        name: 'github',
        label: 'smack me'
      }
    ],
    lists: {
      users: [{
        ui: 'large orange',
        icon: {
          name: 'user'
        },
        label: 'kmandrup',
        body: 'I DREAM in CODE'
      },
      {
        ui: 'large blue',
        icon: {
          name: 'user'
        },
        label: 'isaura',
        body: 'I LOVE web DESIGN'
      }]
    }
  }
}
