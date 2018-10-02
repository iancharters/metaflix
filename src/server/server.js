import {ApolloServer} from 'apollo-server';
import {parse as parseAuthHeader} from 'auth-header';
import jwt from 'jsonwebtoken';
import {schema} from './schema';
// import {typeDefs, resolvers} from './schema';

const getUser = async (req, context) => {
  try {
    const {token} = parseAuthHeader(req.headers.authorization);
    return await new Promise((resolve, reject) => {
      jwt.verify(token, context.secretKeyBase, (err, decoded) => {
        err ? reject(err) : resolve(decoded);
      });
    });
  } catch (err) {
    return null;
  }
};

const context = async ({req}) => {
  const context = {};
  context.secretKeyBase = 'secret';
  context.user = await getUser(req, context);
  context.db = {
    users: {},
  };
  return context;
};

const server = new ApolloServer({
  // typeDefs,
  // resolvers,
  schema,
  context,
  cors: {
    origin: /.*/,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-Apollo-Tracing'],
  },
});

server.listen(process.env.PORT || 4000).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
