import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "server/api/trpc";

export const ordersRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        orderData: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.orders.create({
        data: {
          orderData: input,
        },
      });
    }),
  get: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.orders.findMany();
  }),
});
