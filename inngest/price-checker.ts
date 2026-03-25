// Cron job: Check competitor prices daily/hourly
// TODO: Implement with Inngest scheduled functions
// - Query all tracked_competitors due for check
// - Scrape each URL for current price
// - Store price_snapshots
// - Check alert thresholds, send email via Resend if breached

export const PRICE_CHECK_SCHEDULE = "0 */6 * * *"; // Every 6 hours
