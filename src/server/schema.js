//
// See docs and examples at https://github.com/apollographql/awesome-launchpad

import {makeExecutableSchema} from 'graphql-tools';

import movieData from '../data/movies';
import actorData from '../data/actors';
import reviewData from '../data/reviews';
import userData from '../data/users';

// Construct a schema, using GraphQL schema language
const typeDefs = `
	# ================================================
  # BEGIN WORKSHOP
  # ================================================

  """
  Movie type.
  """
  type Movie {
    id: ID
    title: String!
    coverImage: String!
		wideImage: String!
		detailImage: String!
    actors: [Actor!]!
    genres: [String!]!
		reviews: [Review!]!
    rating: Float
    reviewCount: Int!
		category: String!
		synopsis: String!
		similarShows: [Movie!]!
  }

  """
  User type.
  """
  type User {
    id: ID!
    name: String!
    photo: String!
  }

  """
  Actor type.
  """
  type Actor {
		id: ID!
    name: String!
  }

  """
  Review type.
  """
  type Review {
    id: ID!
    user: User!
    rating: Int!
    content: String!
  }

  # ================================================
  # END WORKSHOP
  # ================================================

  type Query {
    appVersion: String
		movie(id: ID!): Movie
		movies: [Movie]
		moviesByCategory(category: String!): [Movie]
  }

	type Mutation {
		likeMovie(userID: ID!, movieID: ID!, like: Boolean!): Boolean
	}
`;

const resolvers = {
  Query: {
    appVersion: () => {
      return 'metaflix-0.1.0';
    },
    movie: (_parent, params) => {
      return movieData.find((movie) => movie.id == params.id);
    },
    movies: () => {
      return movieData;
    },
    moviesByCategory: (_, args) => {
      return movieData.filter((movie) => movie.category == args.category);
    },
  },
  Mutation: {
    likeMovie: (_, args) => {
      // get the user

      const user = getUser(args.userID);

      // do stuff

      return args.like;
    },
  },
  Movie: {
    actors: (movie, params) => {
      const mov = movie.actors.map((actor) => {
        return actorData.find((a) => a.id == actor);
      });

      return mov;
    },
    rating: (movie, params) => {
      let rating = 0;
      let totalReviews = 0;
      reviewData.forEach((review) => {
        if (review.movieID === movie.id) {
          ++totalReviews;
          rating += review.rating;
        }
      });
      if (totalReviews > 0) {
        return Math.round((rating / totalReviews) * 10) / 10;
      }

      return null;
    },
    reviewCount: (movie, params) => {
      let numberOfReviews = 0;
      reviewData.forEach((review) => {
        if (review.movieID === movie.id) {
          ++numberOfReviews;
        }
      });
      return numberOfReviews;
    },
    reviews: (movie, params) => {
      const r = reviewData.filter((review) => {
        return review.movieID === movie.id;
      });

      const result = r.map((review) => {
        return {
          ...review,
          user: userData.find((user) => {
            return user.id == review.userID;
          }),
        };
      });

      return result;
    },
    similarShows: (movie, params) => {
			const sim = movie.similarShows.map((showID) => {
        return movieData.find((mdata) => mdata.id == showID);
      });

			return sim;
    },
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Optional: Export a function to get context from the request. It accepts two
// parameters - headers (lowercased http headers) and secrets (secrets defined
// in secrets section). It must return an object (or a promise resolving to it).
export function context(headers, secrets) {
  return {
    headers,
    secrets,
  };
}

// Optional: Export a root value to be passed during execution
// export const rootValue = {};

// Optional: Export a root function, that returns root to be passed
// during execution, accepting headers and secrets. It can return a
// promise. rootFunction takes precedence over rootValue.
// export function rootFunction(headers, secrets) {
//   return {
//     headers,
//     secrets,
//   };
// };
