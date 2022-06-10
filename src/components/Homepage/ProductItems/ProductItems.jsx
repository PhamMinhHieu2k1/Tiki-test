import { Link } from "react-router-dom";
import BaseCard from "../../shared/Card";

function ProductItems({ products }) {
    return (
        <div>
            <BaseCard
                style={{
                    padding: "1rem 1.5rem",
                }}
            >
                <span className="text-lg">Gợi Ý Hôm Nay</span>
            </BaseCard>
            <ul className="flex flex-wrap mt-4">
                {products.map((product) => {
                    const price =
                        product.price * (product.isDiscounted ? 1 - product.discount / 100 : 1);
                    return (
                        <li className="w-1/6" key={product.i}>
                            <Link
                                className="block !text-current p-4 hover:bg-white hover:shadow transition-all duration-200"
                                to={`/san-pham/${product.i}`}
                            >
                                <img src={product.img} alt={product.name} />
                                <div>
                                    <p className="m-0 text-sm overflow-hidden text-ellipsis whitespace-pre-wrap max-h-10">
                                        {product.name}
                                    </p>
                                    <p className="my-2 text-xs text-gray-500">
                                        <span>Đánh giá: {product.rating}</span>
                                        <span className="mx-1">|</span>
                                        <span>Đã bán {product.sold}</span>
                                    </p>
                                    {product.isDiscounted ? (
                                        <p className="font-semibold text-base text-red-500">
                                            {price.toLocaleString()}{" "}
                                            <span className="underline">đ</span>
                                            <span className="inline-block px-1 text-xs ml-2 border border-red-500 bg-red-100 rounded-sm">
                                                -{product.discount} %
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="font-semibold text-base">
                                            {price.toLocaleString()}{" "}
                                            <span className="underline">đ</span>
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProductItems;
