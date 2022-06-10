import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "antd";
import { useSearchParams } from "react-router-dom";

function Rating() {
    const [query, setQuery] = useSearchParams();
    const rating = query.get("rating") || "";
    function ratingTagClickHandler(value) {
        query.set("rating", value);
        setQuery(query);
    }

    return (
        <ul>
            <li className="mb-2">
                <Tag
                    color={rating === "3" ? "blue" : ""}
                    className="cursor-pointer align-middle"
                    onClick={() => ratingTagClickHandler(3)}
                >
                    <span className="text-yellow-400 mr-2">
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                    </span>{" "}
                    Từ 3 sao
                </Tag>
            </li>
            <li className="mb-2">
                <Tag
                    color={rating === "4" ? "blue" : ""}
                    className="cursor-pointer align-middle"
                    onClick={() => ratingTagClickHandler(4)}
                >
                    <span className="text-yellow-400 mr-2">
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                    </span>
                    Từ 4 sao
                </Tag>
            </li>
            <li className="mb-2">
                <Tag
                    color={rating === "5" ? "blue" : ""}
                    className="cursor-pointer align-middle"
                    onClick={() => ratingTagClickHandler(5)}
                >
                    <span className="text-yellow-400 mr-2">
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                        <FontAwesomeIcon icon={["fas", "star"]} />
                    </span>
                    Từ 5 sao
                </Tag>
            </li>
        </ul>
    );
}

export default Rating;
