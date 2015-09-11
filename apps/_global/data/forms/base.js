module.exports = {
  name: {},
  title: {},
  categories: {
    placeholder: 'Select categories',
    addLabel: 'Category',
    refList: function (data) {
      return data.categories;
    }
  },
  tags: {
    placeholder: 'Select tags',
    addLabel: 'Tag',
    refList: function (data) {
      return data.tags;
    }
  },
  summary: {},
  description: {}
};