import { DateTimeResolver } from 'graphql-scalars';
import { Resolvers } from '../generated/resolver-types';

const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
};

export default resolvers;
