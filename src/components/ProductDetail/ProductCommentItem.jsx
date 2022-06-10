import { useContext } from "react";
import { Button, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { EyeOutlined, LikeOutlined } from "@ant-design/icons";
import { HeaderContext } from "../../store/headerContext";
import ratingLabel from "../../constants/rating";
import "./ProductCommentItem.scss";

function ProductCommentItem({ comment, className = "", onFavourite }) {
    const headerContent = useContext(HeaderContext);

    function favoriteComment() {
        if (headerContent.showLogin) {
            headerContent.showLogin();
            return;
        }

        onFavourite(comment.id);
    }
    return (
        <li className={"flex items-start " + className}>
            <img
                src={comment.created_by.avatar_url}
                alt=""
                className="w-12 h-12 rounded-full mr-5"
            />
            <div>
                <p className="mb-2">{comment.created_by.name}</p>
                <p>
                    {Array.apply(null, new Array(5)).map((_, i) => {
                        if (i + 1 <= comment.rating) {
                            return (
                                <FontAwesomeIcon
                                    icon={["fas", "star"]}
                                    className="text-yellow-400"
                                />
                            );
                        }
                        return <FontAwesomeIcon icon={["fas", "star"]} className="text-gray-400" />;
                    })}
                    <span className="ml-2 font-bold">{ratingLabel[comment.rating]}</span>
                </p>
                <p>{comment.content}</p>
                <div className="product-comment__image-list">
                    <Image.PreviewGroup>
                        {comment.images.map((img) => (
                            <Image
                                key={img.id}
                                src={img.full_path}
                                preview={{
                                    mask: <EyeOutlined />,
                                }}
                            />
                        ))}
                    </Image.PreviewGroup>
                </div>
                <div>
                    <Button
                        type="primary"
                        className="!h-auto !inline-flex items-center"
                        onClick={favoriteComment}
                    >
                        <LikeOutlined />
                        <span>
                            Hữu ích {comment.thank_count > 0 ? `(${comment.thank_count})` : ""}
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

ProductCommentItem.propTypes = {
    comments: PropTypes.object,
    className: PropTypes.string,
    onFavourite: PropTypes.func,
};

export default ProductCommentItem;
