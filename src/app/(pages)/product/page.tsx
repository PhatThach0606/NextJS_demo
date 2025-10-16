import { Shoes } from "./../../page";
import Image from "next/image";
type Props = {
  product: Shoes;
};
export default function Product({ product }: Props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={product.image}
          alt="123"
          width={500}
          height={500}
          style={{ width: "700px", height: "300px" }}
        />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.name}
        </p>
      </div>
    </div>
  );
}
