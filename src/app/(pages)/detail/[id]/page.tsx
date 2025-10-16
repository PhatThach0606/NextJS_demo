import Image from "next/image";
import { fetchProductById } from "./../../../../server/actions/producAPI";

export async function generateMetadata({ params }: any) {
  const prodDetail = await fetchProductById(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}

export default async function Detail({ params }: any) {
  const { id } = params;
  const product = await fetchProductById(id);
  console.log(product);

  return (
    <div className=" contaier mx-auto mt-10 ">
      <div className="flex justify-center items-center">
        <div className="w-[50%]">
          <h1 className="text-center font-black text-2xl">{product.name}</h1>
          <Image src={product.image} width={500} height={500} alt="123" />
          <div className="w-[100%]">{product.description}</div>
        </div>
      </div>
    </div>
  );
}
