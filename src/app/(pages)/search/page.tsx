import { fetchProductKeyword } from "./../../../server/actions/producAPI";
import Product from "../product/page";

export default async function Search({ searchParams }: any) {
  const { keyword } = searchParams;
  const data = await fetchProductKeyword(keyword);

  const renderUI = () => {
    return data.map((product: any) => {
      return <Product product={product} />;
    });
  };

  return (
    <div className="container mx-auto my-10 ">
      <div className="grid grid-cols-4 gap 5">{renderUI()}</div>;
    </div>
  );
}
