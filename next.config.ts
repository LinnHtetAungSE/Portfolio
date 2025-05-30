import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_ACCOUNT_EMAIL: process.env.SENDGRID_ACCOUNT_EMAIL,
    SENDGRID_GET_IN_TOUCH_HOST_TEMPLATE_ID:
      process.env.SENDGRID_GET_IN_TOUCH_HOST_TEMPLATE_ID,
    SENDGRID_GET_IN_TOUCH_TEMPLATE_ID:
      process.env.SENDGRID_GET_IN_TOUCH_TEMPLATE_ID,
  },
};

export default nextConfig;
