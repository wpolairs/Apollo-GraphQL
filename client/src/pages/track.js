import React from "react"
import { Layout, QueryResult } from "../components"
import TrackDetail from "../components/track-detail"
import { gql, useQuery } from "@apollo/client"

const TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`
const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(TRACK, {
    variables: {
      trackId,
    },
  })
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  )
}

export default Track
