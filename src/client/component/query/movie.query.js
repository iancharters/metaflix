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
        datePosted
      }
      rating
      reviewCount
      similarShows {
        id
        title
        coverImage
      }
    }
  }
`;

export const GET_MOVIE_REVIEWS = gql`
  query movieReviews($id: ID!) {
    movie(id: $id) {
      reviews {
        id
        rating
        content
        user {
          name
          photo
        }
      }
    }
  }
`;
