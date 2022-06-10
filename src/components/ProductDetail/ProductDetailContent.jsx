import BaseCard from "../shared/Card";
import PropType from "prop-types";
import { Space } from "antd";
import { useState } from "react";

function ProductDetailContent({ product, className = "" }) {
    const {
        specifications: [{ attributes: productAttributes }],
        description,
    } = product;

    const [showFullDescription, setShowFullDescription] = useState(false);
    const descriptionStyle = !showFullDescription
        ? {
              overflow: "hidden",
              height: "500px",
          }
        : {};
    const toggleDescriptionContent = !showFullDescription
        ? "Hiện thêm nội dung"
        : "Ẩn bớt nội dung";

    function toggleShowFullDesciption() {
        setShowFullDescription((show) => !show);
    }

    return (
        <div className={className}>
            <Space direction="vertical" size="middle">
                <BaseCard>
                    <h3 className="text-xl">Thông Tin Chi Tiết</h3>
                    <table className="w-4/5">
                        <tbody>
                            {productAttributes.map((attr) => (
                                <tr key={attr.code} className="even:bg-gray-100 odd:bg-white">
                                    <th className="bg-gray-200 text-left px-5 py-2 w-2/6">
                                        {attr.name}
                                    </th>
                                    <td className="px-5 ">{attr.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </BaseCard>
                <BaseCard>
                    <h3 className="text-xl">Mô Tả Sản Phẩm</h3>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{ __html: description }}
                            style={descriptionStyle}
                            className="mb-4"
                        ></div>
                        <button
                            className="px-10 py-2 border border-blue-400 text-blue-400 block mx-auto bg-transparent hover:bg-blue-400 hover:text-white transition rounded"
                            onClick={toggleShowFullDesciption}
                        >
                            {toggleDescriptionContent}
                        </button>
                    </div>
                </BaseCard>
            </Space>
        </div>
    );
}

ProductDetailContent.propTypes = {
    product: PropType.object,
    className: PropType.string,
};

export default ProductDetailContent;
