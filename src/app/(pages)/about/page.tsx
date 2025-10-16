import { Shoes } from "./../../page";
import Image from "next/image";
import { fetchProduct } from "./../../../server/actions/producAPI";
import Link from "next/link";
type Props = {
  shoe: Shoes;
};

export const metadata = {
  title: "Shoes App - About",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - About",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes App",
    url: "https://yourwebsite.com",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

const ShoesComponent = ({ shoe }: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={shoe.image}
          alt="123"
          width={500}
          height={500}
          style={{ width: "700px", height: "300px" }}
        />
        {/* <img src={shoe.image} alt="" /> */}
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {shoe.name}
        </p>
      </div>
      <Link
        className="text-blue-500 hover:underline bg-amber-300 w-10 h-10 my-10 mx-5 mb-5 px-3 py-2"
        href={`/detail/${shoe.id}`}
      >
        Detail
      </Link>
    </div>
  );
};

export default async function About() {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://apistore.cybersoft.edu.vn/api/Product"
  //     );
  //     const result = await response.json();
  //     return result.content;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const data = await fetchProduct();

  const renderShoe = () => {
    return data?.map((shoe: Shoes) => {
      return <ShoesComponent key={shoe.id} shoe={shoe} />;
    });
  };
  return (
    <div className="grid grid-cols-4 gap-5 my-10 mx-10">{renderShoe()}</div>
  );
}
