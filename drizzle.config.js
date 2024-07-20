/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:PfIcKM1ynk0F@ep-muddy-bush-a1boj9el.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
};
