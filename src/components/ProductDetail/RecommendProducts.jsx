import PropType from "prop-types";
import ProductList from "../Category/Product/ProductList";
import BaseCard from "../shared/Card";

function RecommendProducts({ products }) {
    return (
        <BaseCard>
            <h3 className="text-lg">Có Thể Bạn Sẽ Thích</h3>
            <ProductList products={products} />
        </BaseCard>
    );
}

RecommendProducts.propTypes = {
    products: PropType.array,
};

export default RecommendProducts;
