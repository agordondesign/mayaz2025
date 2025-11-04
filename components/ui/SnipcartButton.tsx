import { urlFor } from "@/sanity/lib/image";
import React from "react"; //import Image from 'next/image';

type Props = {
  product: {
    _id: string;
    book?: boolean;
    niche?: boolean;
    productStatus: {
      soldOut: boolean;
    };
    price: number;
    briefDescription: string;
    thumbnail: {
      alt: string;
    };
    productName: string;
    collection: {
      slug: {
        current: string;
      };
    };
    slug: {
      current: string;
    };
    colorValue?: string;
    sizeValue?: string;
    currentSize: string;
    author?: {
      name: string;
    }[];
  };
  book?: boolean;
  knockout?: boolean;
  inventory?: boolean;
};

function SnipCartButton({ product, knockout, inventory }: Props) {
  return (
    <>
      <div
        className={`${
          inventory === true
            ? "pointer-events-none"
            : !product.productStatus.soldOut
              ? "pointer-events-auto"
              : "pointer-events-none"
        } w-full`}
      >
        {product.book === true ? (
          <button
            type="button"
            className={`snipcart-add-item px-2 py-5 uppercase tracking-widest text-xs ${
              inventory === true
                ? "bg-transparent text-mayazDark border border-mayazBorder w-full"
                : !product.productStatus.soldOut
                  ? "bg-black text-white w-full hover:cursor-pointer focus:cursor-pointer hover:bg-mayazDark"
                  : "bg-transparent text-mayazDark border border-mayazBorder w-full"
            } `}
            data-item-id={product._id}
            data-item-price={product.price}
            //data-item-description={product.briefDescription}
            data-item-image={urlFor(product.thumbnail).url()}
            data-item-name={product.productName}
            data-item-custom1-name={
              (product?.author?.length ?? 0) > 1 ? "Authors" : "Author"
            }
            data-item-custom1-type="readonly"
            data-item-custom1-value={product.author
              ?.map((author) => author.name)
              .join(", ")}
            data-item-url={`/${product.collection.slug.current}/${product.slug.current}`}
          >
            {inventory === true
              ? "Updating Inventory"
              : !product.productStatus.soldOut
                ? "Add to Bag"
                : "Sold Out"}
          </button>
        ) : product.niche === true ? (
          <button
            type="button"
            className={`snipcart-add-item px-2 py-5 uppercase tracking-widest text-xs ${
              !product.productStatus.soldOut
                ? `${
                    !knockout ? "bg-black text-white" : "bg-white text-black"
                  } w-full hover:cursor-pointer focus:cursor-pointer hover:bg-mayazNiche`
                : "bg-transparent text-mayazDark border border-mayazBorder w-full"
            } `}
            data-item-id={product._id}
            data-item-price={product.price}
            data-item-description={product.briefDescription}
            data-item-image={urlFor(product.thumbnail).url()}
            data-item-name={product.productName}
            //data-item-custom1-name="Color"
            //data-item-custom1-value={product.colorValue}
            data-item-custom2-name="Size"
            data-item-custom2-value={product.currentSize}
            data-item-custom2-options={product.sizeValue}
            data-item-url={`/${product.collection.slug.current}/${product.slug.current}`}
          >
            {!product.productStatus.soldOut ? "Add to Bag" : "Sold Out"}
          </button>
        ) : (
          <button
            type="button"
            className={`snipcart-add-item px-2 py-5 uppercase tracking-widest text-xs ${
              inventory === true
                ? "bg-transparent text-mayazDark border border-mayazBorder w-full"
                : !product.productStatus.soldOut
                  ? "bg-black text-white w-full hover:cursor-pointer focus:cursor-pointer hover:bg-mayazDark"
                  : "bg-transparent text-mayazDark border border-mayazBorder w-full"
            } `}
            data-item-id={product._id}
            data-item-price={product.price}
            data-item-description={product.briefDescription}
            data-item-image={urlFor(product.thumbnail).url()}
            data-item-name={product.productName}
            data-item-custom1-name="Color"
            data-item-custom1-value={product.colorValue}
            data-item-custom2-name="Size"
            data-item-custom2-value={product.currentSize}
            data-item-custom2-options={product.sizeValue}
            data-item-url={`/${product.collection.slug.current}/${product.slug.current}`}
          >
            {inventory === true
              ? "Updating Inventory"
              : !product.productStatus.soldOut
                ? "Add to Bag"
                : "Sold Out"}
          </button>
        )}
        {inventory === true && (
          <span className="flex text-center text-xs text-mayazDark pt-2">
            Inventory is being updated. Please check back later.
          </span>
        )}
      </div>
    </>
  );
}

export default SnipCartButton;
