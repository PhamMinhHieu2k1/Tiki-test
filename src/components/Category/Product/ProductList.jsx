import { Col, Row } from "antd";
import PropTypes from "prop-types";
import Product from "./Product";

function ProductList({ products }) {
    return (
        <Row gutter={[16, 4]}>
            {products.map((product, i) => {
                return (
                    <Col span={6} key={i}>
                        <Product product={product} />
                    </Col>
                );
            })}
        </Row>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
};

export default ProductList;
