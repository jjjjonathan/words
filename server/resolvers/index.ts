import { mergeResolvers } from '@graphql-tools/merge';
import userResolver from './user';
import blogResolver from './blog';
import postResolver from './post';

const resolvers = [userResolver, blogResolver, postResolver];

export default mergeResolvers(resolvers);
