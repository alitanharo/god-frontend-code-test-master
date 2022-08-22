import { useRouter } from "next/router";
import data from "../../public/api/cars.json";
import CardItem from "./../../src/components/CardItem";

const Shop = () => {
  const { query } = useRouter();

  const product = data.find((item) => item.id === query.id)!;

  return (
    <div className="container">
      <CardItem {...product} />
    </div>
  );
};

export default Shop;
