export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        description: 'Title of project',
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
        name: 'dateEnded',
        title: 'DateEnded',
        type: 'string',
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
  