const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome()
    },
    track: (_, { id }, { dataSources }) => {
      console.log("id: ", id)
      return dataSources.trackAPI.getTrack(id)
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules: ({ id }, __, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id)
    },
  },
}
module.exports = resolvers
