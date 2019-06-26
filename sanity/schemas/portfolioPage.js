export default {
    name: 'portfolioPage',
    title: 'Portfolio pages',
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
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      },
    ],
  }
  