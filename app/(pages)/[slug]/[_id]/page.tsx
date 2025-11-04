import ProductDetail from "@/components/layout/ProductDetail";
import React from "react";
import { getProductBySlug, getSiteSettings } from "@/lib/api";

type HerVirtueProductProp = {
  params: Promise<{
    slug: string;
    _id: string;
  }>;
};

export default async function page({ params }: HerVirtueProductProp) {
  const { _id } = await params;
  const product = await getProductBySlug(_id);
  const settings = await getSiteSettings();
  return (
    <div>
      <ProductDetail product={product} settings={settings} />
    </div>
  );
}
