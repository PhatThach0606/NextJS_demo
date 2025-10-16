"use client";
// import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchProduct } from "./../server/actions/producAPI";
import Shoe from "./(pages)/Shoe/shoe";
export type Shoes = {
  id: number;
  name: string;
  sizes: number[];
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
  imgLink: string;
};

export default function Home() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState<Shoes[]>([]);

  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apistore.cybersoft.edu.vn/api/Product"
        );
        const result = await response.json();
        setData(result.content);
      } catch (error) {
        console.log("Error data:", error);
      }
    };
    fetchData();
  }, []);

  const renderUI = () => {
    return data.map((shoe) => {
      return <Shoe key={shoe.id} shoe={shoe} />;
    });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-4 gap-5 ">{renderUI()}</div>
      {/* <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>clickme</button>
      <Image
        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
        alt="123"
        width={500}
        height={500}
        style={{ width: "700px", height: "700px" }}
      />
      <Image src="/images/wave.jpg" alt="wave" width={500} height={500} /> */}
    </div>
  );
}
