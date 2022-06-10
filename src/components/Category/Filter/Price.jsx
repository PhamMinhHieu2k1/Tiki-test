import { Space, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import priceRange from "../../../constants/priceRange";

function Price() {
    const [query, setQuery] = useSearchParams();
    const price = query.get("price") || "";
    function priceTagClickHandler(value) {
        query.set("price", value);
        setQuery(query);
    }
    return (
        <Space wrap>
            {Object.entries(priceRange).map(([key, label]) => (
                <Tag
                    color={price === key ? "blue" : ""}
                    onClick={() => priceTagClickHandler(key)}
                    key={key}
                    className="cursor-pointer"
                >
                    {label}
                </Tag>
            ))}
        </Space>
    );
}

export default Price;
