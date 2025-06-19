import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const add = mutation({
  args: { email: v.string(), waitlistSource: v.string() },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    
    if (existing) {
      throw new Error("Email already registered");
    }

    const joinDate = new Date().toISOString().split('T')[0];
    
    const waitlistId = await ctx.db.insert("waitlist", {
      email: args.email,
      joinDate,
      waitlistSource: args.waitlistSource,
    });
    
    return waitlistId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("waitlist").collect();
  },
});