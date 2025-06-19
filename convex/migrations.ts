import { internalMutation } from "./_generated/server";

export const addWaitlistSourceToExistingRows = internalMutation({
  handler: async (ctx) => {
    // Get all existing waitlist entries
    const existingEntries = await ctx.db.query("waitlist").collect();
    
    console.log(`Found ${existingEntries.length} existing waitlist entries`);
    
    // Update each entry that doesn't have waitlistSource
    for (const entry of existingEntries) {
      if (!("waitlistSource" in entry)) {
        await ctx.db.patch(entry._id, {
          waitlistSource: "landing-page:tree"
        });
        console.log(`Updated entry ${entry._id} with default waitlistSource`);
      }
    }
    
    console.log("Migration completed");
    return { updated: existingEntries.length };
  },
});