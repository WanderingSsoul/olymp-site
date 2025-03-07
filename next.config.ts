import type { NextConfig } from "next";
require("dotenv").config();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
require("dotenv").config();

module.exports = {
  env: {
    YANDEX_USER: process.env.YANDEX_USER,
    YANDEX_PASS: process.env.YANDEX_PASS,
  },
};
