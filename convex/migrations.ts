import { internalMutation } from "./_generated/server";

export const addWaitlistSourceToExistingRows = internalMutation({
  handler: async (ctx) => {
    // Get all existing waitlist entries
    const existingEntries = await ctx.db.query("waitlist").collect();
    
    console.log(`Found ${existingEntries.length} existing waitlist entries`);
    
    let updatedCount = 0;
    
    // Update each entry that doesn't have waitlistSource
    for (const entry of existingEntries) {
      if (!entry.waitlistSource) {
        await ctx.db.patch(entry._id, {
          waitlistSource: "landing-page:tree"
        });
        console.log(`Updated entry ${entry._id} (${entry.email}) with default waitlistSource`);
        updatedCount++;
      } else {
        console.log(`Entry ${entry._id} (${entry.email}) already has waitlistSource: ${entry.waitlistSource}`);
      }
    }
    
    console.log(`Migration completed. Updated ${updatedCount} out of ${existingEntries.length} entries.`);
    return { updated: updatedCount, total: existingEntries.length };
  },
});