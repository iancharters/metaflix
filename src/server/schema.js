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
		likeMovie(userID: ID!, movieID: ID!, like: Boolean!): [Boolean]
	}
`;

// Reuseable mock DB calls.

const getMovie = (id) => {
  return movieData.find((movie) => movie.id == id);
};

const getUser = (id) => {
  return userData.find((user) => user.id == id);
};

// Provide resolver functions for your schema fields

const resolvers = {
  Query: {
    appVersion: () => {
      return 'metaflix-0.1.0';
    },
    movie: (_, args) => {
      // Get the movie

      const movie = getMovie(args.id);

      // Replace actor IDs with `Actor` type objects

      movie.actors = movie.actors.map((actor) => {
        return actorData.find((a) => a.id == actor);
      });

      // Attribute `Review` type reviews to movie and calculate rating and
      // number of reviews.

      movie.rating = 0;
      movie.reviewCount = 0;
      movie.reviews = [];

      reviewData.map((review) => {
        if (review.movieID == movie.id) {
          movie.rating += review.rating;
          movie.reviewCount += 1;
          movie.reviews.push(review);
        }
      });

      // Replace review user IDs with User type data

      movie.reviews.map((review) => {
        review.user = userData.find((user) => user.id == review.userID);
        return review;
      });

      movie.rating = Math.round((movie.rating / movie.reviewCount) * 10) / 10;

      return movie;
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
