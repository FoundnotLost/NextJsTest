export default {
    name: 'projects',
    title: 'projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: 'Title of Projects',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'summary',
        title: 'Summary',
        type: 'text',

      },
    
      {
        name: 'technologies',
        title: 'Techologies',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'skill'} }],
      },
      {
        name: 'linkToBuild',
        title: 'LinkToBuild',
        type: 'url',
        
      },
     
    ],
  }
  