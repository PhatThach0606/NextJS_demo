import { Shoes } from "./../../page";
type Props = {
  shoe: Shoes;
};
import Image from "next/image";
export default function Shoe({ shoe }: Props) {
  //   const { shoe } = props;
  //   console.log(shoe);
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
    </div>
  );
}
