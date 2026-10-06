import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Qualidade mais alta nas fotos grandes (o padrão 75 deixava-as com artefactos)
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
