import Link from "next/link";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const CardItem = ({ id, modelName, bodyType, modelType, imageUrl }: Car) => {
  return (
    <div className="d-flex flex-column p-2">
      <p>{bodyType}</p>
      <div className="d-flex">
        <p className="fw-bolder mx-1">{modelName}</p>
        <p>{modelType}</p>
      </div>
      <img src={imageUrl} />

      <div className="d-flex gap-2 justify-content-center p-2">
        <Link href={`/learn/${id}`}>
          <a className="text-decoration-none text-primary d-flex gap-1 align-items-center">
            <p className="m-0">LEARN</p>
            <img src="/images/chevron-small.svg" />
          </a>
        </Link>

        <Link href={`/shop/${id}`}>
          <a className="text-decoration-none text-primary d-flex gap-1 align-items-center">
            <p className="m-0">SHOP</p>
            <img src="/images/chevron-small.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
