export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cffdca069bf01fec9660cbf',
                  title: 'Sanity Studio',
                  name: 'BodenWorldTest-studio',
                  apiId: 'bbe894b5-686f-45d0-b0c1-ea85c85eb261'
                },
                {
                  buildHookId: '5cffdca057213a30fa2f7044',
                  title: 'Portfolio Website',
                  name: 'BodenWorldTest',
                  apiId: '9282e6ea-b983-447e-90d6-f42adaef95ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BodenWorld/BodenWorldTest',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://BodenWorldTest.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
