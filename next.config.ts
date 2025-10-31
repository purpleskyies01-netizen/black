import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "isfj6shkii.ufs.sh",
        port: "",
        pathname: "/f/**",
      },
    ],
    domains: ["isfj6shkii.ufs.sh"],
  },

};

export default nextConfig;
