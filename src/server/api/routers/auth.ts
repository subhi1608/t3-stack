import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({


  validate: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
  login: publicProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
