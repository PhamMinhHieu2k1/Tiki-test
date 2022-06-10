import PropType from 'prop-types';
import ProductList from '../Category/Product/ProductList';
import BaseCard from '../shared/Card';

function ShopProducts({ products }) {
    return (
        <BaseCard>
            <h3 className="text-xl">Tất cả sản phẩm</h3>
            <ProductList products={products} />
        </BaseCard>
    );
}

ShopProducts.propTypes = {
    products: PropType.array,
};

export default ShopProducts;
