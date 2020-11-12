export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5facf175c7d9885a0249256e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1v94h9de',
                  apiId: '6aec5df4-4870-487e-92dd-073aab8cd49d'
                },
                {
                  buildHookId: '5facf1750b91334b3e46a79b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9y89vadq',
                  apiId: 'e979505b-d03d-4288-bddd-8c9d37ec7dff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huayra/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9y89vadq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
