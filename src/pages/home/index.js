import Home from "./home.marko";

export default async (_, reply) => {
  await reply.marko(Home, {});
};
