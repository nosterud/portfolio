export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'banner',
      title: 'Banner',
      type: 'bannerImg'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },

    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
  ],
}
