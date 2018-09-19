// Import modules ==============================================================
import gql from 'graphql-tag';

export const GET_MOVIE = gql`
  query movie($id: ID!) {
    movie(id: $id) {
      id
      title
      actors {
        name
      }
      genres
      detailImage
      synopsis
      reviews {
        id
        rating
        content
        user {
          name
          photo
        }
      }
      rating
      reviewCount
    }
  }
`;
