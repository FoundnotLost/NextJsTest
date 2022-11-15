export default {
    name: 'Experience',
    title: 'experience',
    type: 'document',
    fields: [
      {
        name: 'jobTitle',
        title: 'JobTitle',
        type: 'string',
      },
      {
        name: 'role',
        title: 'Role',
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
        type: 'string',
      },
      {
        name: 'dateEnded',
        title: 'DateEnded',
        type: 'string',
      },
      {
        name: 'isCurrentlyWorkingHere',
        title: 'IsCurrentlyWorkingHere',
        type: 'boolean',
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
  