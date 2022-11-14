export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'jobTitle',
        title: 'JobTitle',
        type: 'string',
      },
      {
        name: 'companyImage',
        title: 'CompanyImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'dateStarted',
        title: 'DateStarted',
        type: 'date',
      },
      {
        name: 'dateEnded',
        title: 'DateEnded',
        type: 'date',
      },
      {
        name: 'isCurrentlyWorkingHere',
        title: 'IsCurrentlyWorkingHere',
        type: 'Boolean',
      },
      {
        name: 'technologies',
        title: 'Techologies',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'skill'} }],
      },
      {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{ type: 'string'}],
      },
     
    ],
  }
  