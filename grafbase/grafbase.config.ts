import { g, connector, config } from '@grafbase/sdk'

const storyblok = connector.GraphQL('CMS', {
  url: 'https://gapi.storyblok.com/v1/api',
  headers: headers => {
    headers.set('Token', g.env('STORYBLOK_ACCESS_TOKEN'))
  }
})

g.datasource(storyblok)

export default config({
  schema: g,
  cache: {
    rules: [
      {
        types: ['Query'],
        maxAge: 60,
        staleWhileRevalidate: 60
      }
    ]
  }
})
