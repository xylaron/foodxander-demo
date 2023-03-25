import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "server/api/trpc";

export const ordersRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.orders.findMany();
  }),
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
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        orderData: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.orders.update({
        where: {
          id: input.id,
        },
        data: {
          orderData: { orderData: input.orderData },
        },
      });
    }),
});
