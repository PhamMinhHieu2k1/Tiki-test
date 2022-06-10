import { forwardRef } from "react";
import BaseCard from "../shared/Card";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import ProductCommentItem from "./ProductCommentItem";
import Pagination from "../shared/Pagination";

const ProductComment = forwardRef(({ comments, onFavourite }, ref) => {
    const {
        paging: { total, per_page, current_page },
    } = comments;

    return (
        <BaseCard>
            <h3 className="text-xl" ref={ref}>
                Đánh Giá - Nhận Xét Từ Khách Hàng
            </h3>
            <div>
                <div className="flex items-center mb-4">
                    <p className="m-0 text-4xl font-bold mr-2">{comments.rating_average}</p>
                    <div>
                        <p className="m-0 text-lg">
                            {Array.apply(null, new Array(5)).map((_, i) => {
                                if (i <= comments.rating_average) {
                                    return (
                                        <FontAwesomeIcon
                                            icon={["fas", "star"]}
                                            className="text-yellow-400"
                                            key={i}
                                        />
                                    );
                                }
                                return (
                                    <FontAwesomeIcon
                                        icon={["fas", "star"]}
                                        className="text-gray-400"
                                        key={i}
                                    />
                                );
                            })}
                        </p>
                        <p className="m-0 text-gray-400">{comments.reviews_count} nhận xét</p>
                    </div>
                </div>
                <ul>
                    {Array.apply(null, new Array(5)).map((_, i) => {
                        return (
                            <li key={i}>
                                <span>
                                    {Array.apply(null, new Array(5)).map((_, j) => {
                                        if (j <= i) {
                                            return (
                                                <FontAwesomeIcon
                                                    icon={["fas", "star"]}
                                                    className="text-yellow-400"
                                                    key={`${i}-${j}`}
                                                />
                                            );
                                        }
                                        return (
                                            <FontAwesomeIcon
                                                icon={["fas", "star"]}
                                                className="text-gray-400"
                                                key={`${i}-${j}`}
                                            />
                                        );
                                    })}
                                </span>
                                <div className="inline-block w-44 h-2 relative bg-gray-400 rounded-full mx-2">
                                    <div
                                        className="inline-block h-full absolute top-0 left-0 bg-yellow-500 rounded-full"
                                        style={{
                                            width: `${comments.stars[i + 1].percent}%`,
                                        }}
                                    ></div>
                                </div>
                                <span>{comments.stars[i + 1].count}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Divider />
            <ul>
                {comments.data.map((comment, i) => (
                    <div className="my-4" key={comment.id}>
                        <ProductCommentItem
                            comment={comment}
                            onFavourite={(commentId) => onFavourite(commentId)}
                        />
                        {i !== comments.data.length - 1 && <Divider />}
                    </div>
                ))}
            </ul>
            <Pagination
                data={{ page: current_page, total }}
                numberPage={per_page}
                recordSelectable={false}
                className="!justify-end"
            />
        </BaseCard>
    );
});

ProductComment.propTypes = {
    comments: PropTypes.object,
    onFavourite: PropTypes.func,
};

export default ProductComment;
