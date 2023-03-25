import { createTRPCRouter, publicProcedure } from "server/api/trpc";

export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.users.findMany();
  }),
});
