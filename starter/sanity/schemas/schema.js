import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import pageInfo from './pageinfo'
import experience from './experience'
import skill from './skill'
import projects from './projects'
import social from './social'

export default createSchema({
 
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experience,
    skill,
    projects,
    social,
    
  ]),
})
