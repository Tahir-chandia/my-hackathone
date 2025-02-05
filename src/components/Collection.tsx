"use client"

import { useState, useEffect } from "react";
import { Products } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { Paginate } from "./Paginate";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";



type Filters = {
  price: number[];
  colors: string;
  sizes: string[];
  dressStyle: string;
};

type CollectionProps = {
  filters: Filters;
};


const Collection =()=> {
  const [, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;

  useEffect(() => {
    async function fetchProducts() {
      const fetchData: Products[] = await client.fetch(allProducts);
      setProducts(fetchData);
      setFilteredProducts(fetchData); // Initialize filteredProducts with all products
    }
    fetchProducts();
  }, []);

  
  // // Filtering logic
  // useEffect(() => {
  //   let filtered = [...products];

  //   // Filter by price range
  //   filtered = filtered.filter((product) =>
  //     product.price >= filters.price[0] && product.price <= filters.price[1]
  //   );

  //   // Filter by selected colors
  //   if (filters.colors.length > 0) {
  //     filtered = filtered.filter((product) =>
  //       filters.colors.includes(product.colors)
  //     );
  //   }

  //   // Filter by sizes
  //   if (filters.sizes.length > 0) {
  //     filtered = filtered.filter((product) =>
  //       product.sizes.some((size) => filters.sizes.includes(size))
  //     );
  //   }

  //   // Filter by dress style
  //   if (filters.dressStyle) {
  //     filtered = filtered.filter((product) => product.category === filters.dressStyle);
  //   }

  //   setFilteredProducts(filtered);
  // }, [filters, products]);


  return (
    <>

      {/* Products and Pagination */}
      <div className="flex justify-between w-[925px] h-[408] mt-[20px]">
        <h2 className="font-Satoshi font-bold text-[32px] text-black">Casual</h2>
        <div className="flex gap-2">
          <p className="font-Satoshi font-normal text-[16px] text-black opacity-[60%]">
            Showing {Math.min(filteredProducts.length, firstItemIndex + 2)}-
            {Math.min(filteredProducts.length, lastItemIndex)} of {filteredProducts.length} Products
          </p>
          <p className="font-Satoshi font-normal text-[16px] text-black opacity-[60%]">Sort by:</p>
          <p className="text-black font-medium">Most Popular</p>
        </div>
      </div>

      <div className="mt-[20px] grid grid-cols-3 gap-4">
        {filteredProducts.slice(firstItemIndex, lastItemIndex).map((product) => (
          <Link href={``} key={product._id}>
            <div className="flex flex-col items-center transform transition duration-500 hover:scale-105">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  width={294}
                  height={250}
                  className="w-[295px] rounded-[20px] h-[298px]"
                />
              )}
              <p className="w-full font-Satoshi font-bold mt-2">{product.name}</p>
              <p className="w-full font-Satoshi font-bold text-black flex gap-3 text-center">
               ${product.price}
                {product.discountPercent && (
                  <span className="opacity-[40%]">
                    <del className="font-Satoshi font-bold">{product.price}</del>
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-[#FF3333] bg-[#FF33331A] rounded-[62px] py-[2px] px-[12px] font-Satoshi">
                    {product.discountPercent}
                  </span>
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Paginate
        totalItems={filteredProducts.length}
        itemsPerPage={itemPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Collection;

