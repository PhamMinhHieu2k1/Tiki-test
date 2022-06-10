import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import { Link } from "react-router-dom";

function Product({ product }) {
    return (
        <Link
            className="h-auto block p-5 text-current hover:text-current hover:shadow-lg"
            to={`/san-pham/${product.id}`}
        >
            <figure>
                <div className="p-4">
                    <img src={product.img} alt="" />
                </div>
                <figcaption className="text-sm">
                    <p className="max-h-10 overflow-hidden text-ellipsis">{product.name}</p>
                    <p className="text-xs text-gray-400">
                        <span>
                            Đánh giá {product.rating}{" "}
                            <span className="text-yellow-400">
                                <FontAwesomeIcon icon={["fas", "star"]} />{" "}
                            </span>{" "}
                            / 5
                        </span>
                        <Divider type="vertical" />
                        <span>Đã bán {product.sold}</span>
                    </p>
                    <div>
                        {product.discount !== 0 ? (
                            <p className="font-semibold text-base text-red-500">
                                {product.price.toLocaleString()}{" "}
                                <span className="underline">đ</span>
                                <span className="inline-block px-1 text-xs ml-2 border border-red-500 bg-red-100 rounded-sm">
                                    -{product.discount} %
                                </span>
                            </p>
                        ) : (
                            <p className="font-semibold text-base">
                                {product.price.toLocaleString()}{" "}
                                <span className="underline">đ</span>
                            </p>
                        )}
                    </div>
                </figcaption>
            </figure>
        </Link>
    );
}

export default Product;
