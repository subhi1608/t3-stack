import { z } from "zod";
import bcrypt from "bcrypt";

import { createTRPCRouter, protectedProcedure,publicProcedure } from "~/server/api/trpc";
import { sendMail } from "~/server/utils/sendMail";
export const userRouter = createTRPCRouter({
    create: publicProcedure
    .input(z.object({ 
        name: z.string().trim().min(3).nullish(),
        password: z.string().min(6).nullish(),
        email: z.string().nullish(), }))
        .mutation(async ({ ctx, input }) => {
            const user = await ctx.db.user.create({
                // @ts-ignore
                data: {
                    ...input,
                    password: bcrypt.hashSync(input.password!, 10),
                },
            });
            let body = `<p>Your OTP is <b>12345678</b><p>`
            const result = await sendMail({
              //@ts-ignore
              to:
              input.email,name:"product-store",subject:"OTP",body:body})
            return {
                success: true,
                data: user,
              };
    }),

  findProducts: protectedProcedure
    .input(z.object({ id: z.number().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user_Product_Mapping.findMany({
        where: {
          user_id: input.id,
        },
      });
    }),

  updateProducts:protectedProcedure
  .input(z.object({ id: z.number().min(1),products: z.any() }))
  .mutation(async ({ ctx, input }) => {
    await ctx.db.user_Product_Mapping.deleteMany({
        where:{
            user_id:input.id}
    })
    return ctx.db.user_Product_Mapping.updateMany({
        where:{
            user_id:input.id
        },
        data: {
        product_id: input.products,
        user_id:input.id
      },

    });
  }),
});
