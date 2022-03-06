import { mergeResolvers } from '@graphql-tools/merge';
import scalarResolver from './scalars';
import userResolver from './user';
import blogResolver from './blog';
import postResolver from './post';

const resolvers = [scalarResolver, userResolver, blogResolver, postResolver];

export default mergeResolvers(resolvers);
