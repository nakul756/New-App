// Cron job: Scheduled SEO scans for connected stores
// TODO: Implement with Inngest scheduled functions
// - Query stores due for re-scan
// - Run SEO audit on all product images
// - Update health scores
// - Send weekly digest emails via Resend

export const STORE_SCAN_SCHEDULE = "0 2 * * 1"; // Every Monday at 2 AM
