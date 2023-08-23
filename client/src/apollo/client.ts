import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://sreverokdlyasaitaddsd.onrender.com/graphql',
  uri: 'http://192.168.199.115:3005/graphql',
  cache: new InMemoryCache(),
}); 

export default client;