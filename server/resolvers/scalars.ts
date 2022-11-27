import { DateTimeResolver, EmailAddressResolver } from "graphql-scalars";
import { Resolvers } from "../generated/resolver-types";

const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
};

export default resolvers;
