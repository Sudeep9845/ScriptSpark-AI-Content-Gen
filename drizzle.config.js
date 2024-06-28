/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:nZDU9EBwCH8I@ep-dry-frost-a5sx8kn3.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require",
  },
};
