import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import category from './category'
// import post from './post'
// import author from './author'
import bannerImg from './bannerImg'
import standardPage from './standardPage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    standardPage,
    // post,
    // author,
    category,
    bannerImg,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent
  ])
})
