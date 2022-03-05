import { mergeResolvers } from '@graphql-tools/merge';
import userResolver from './user';
import blogResolver from './blog';

const resolvers = [userResolver, blogResolver];

export default mergeResolvers(resolvers);
