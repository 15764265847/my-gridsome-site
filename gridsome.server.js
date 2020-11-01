// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    api.loadSource(async actions => {
      const blog = require('./src/data/update.json');
  
      const collection = actions.addCollection({
        typeName: 'BlogUpdate'
      })
      collection.addNode(blog);
    })

    api.loadSource(async actions => {
      const data = require('./src/data/followers.json');
  
      const collection = actions.addCollection({
        typeName: 'followers'
      })
      for (const item of data) {
        collection.addNode({
          htmlUrl: item.htmlUrl,
          avatarUrl: item.avatarUrl,
          name: item.name
        })
      }
    })

    api.loadSource(async actions => {
      const data = require('./src/data/following.json');
  
      const collection = actions.addCollection({
        typeName: 'following'
      })
      for (const item of data) {
        collection.addNode({
          htmlUrl: item.htmlUrl,
          avatarUrl: item.avatarUrl,
          name: item.name
        })
      }
    })

    api.loadSource(async actions => {
      const data = require('./src/data/blogs.json');
  
      const collection = actions.addCollection({
        typeName: 'blogs'
      })
      for (const item of data) {
        collection.addNode({
          "id": item.id,
          "title": item.title,
          "updateTime": item.updateTime,
          "description": item.description
        })
      }
    })

    api.loadSource(async actions => {
      const data = require('./src/data/projects.json');
  
      const collection = actions.addCollection({
        typeName: 'projects'
      })
      for (const item of data) {
        collection.addNode({
          "url": item.url,
          "name": item.name,
          "updateTime": item.updateTime,
          "description": item.description,
          "stargazersCount": item.stargazersCount,
          "watchersCount": item.watchersCount,
          "forksCount": item.forksCount,
          "license": item.license,
          "language": item.language
        })
      }
    })
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
