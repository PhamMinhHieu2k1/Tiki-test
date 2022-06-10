import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider, Image, InputNumber } from 'antd';
import PropType from 'prop-types';
import { useContext, useState } from 'react';
import BaseCard from '../shared/Card';
import { HeaderContext } from '../../store/headerContext';

function ProductOverview({ product, onAddToCart, onScrollToComments }) {
    const [productOrderNumber, setProductOrderNumber] = useState(1);
    const headerContext = useContext(HeaderContext);

    function addToCartHandler() {
        if (headerContext.showLogin) {
            headerContext.showLogin();
        } else {
            onAddToCart(productOrderNumber);
        }
    }

    return (
        <BaseCard>
            <div className="flex">
                <Image
                    src={product.thumbnail_url}
                    height={400}
                    width={400}
                    preview={{
                        src: product.images,
                    }}
                />
                <Divider className="!h-auto" type="vertical" />
                <div className="flex-auto">
                    <p className="text-sm">Thương hiệu: {product.brand.name}</p>
                    <h2 className="text-3xl">{product.name}</h2>
                    <p className="align-middle text-gray-400">
                        <span>
                            Đánh giá: {product.rating_average}{' '}
                            <FontAwesomeIcon icon={['fas', 'star']} className="text-yellow-400" /> /
                            5{' '}
                            <span className="cursor-pointer" onClick={onScrollToComments}>
                                (Xem {product.review_count} đánh giá)
                            </span>
                        </span>
                        <Divider type="vertical" className="!border-l-current" />
                        <span>
                            Đã bán: {product.quantity_sold > 1000 ? '1000+' : product.quantity_sold}
                        </span>
                    </p>
                    <div className="bg-gray-50 font-semibold text-3xl px-4 py-3">
                        {product.discount !== 0 ? (
                            <p className="text-red-500 align-bottom">
                                {product.price.toLocaleString()}{' '}
                                <span className="underline">đ</span>
                                <span className="text-sm line-through text-gray-500 mx-4">
                                    {Math.trunc(
                                        (product.price * 100) / (100 - product.discount)
                                    ).toLocaleString()}
                                    <span className="underline">đ</span>
                                </span>
                                <span className="inline-block px-1 text-xs ml-2 border border-red-500 bg-red-100 rounded-sm">
                                    -{product.discount} %
                                </span>
                            </p>
                        ) : (
                            <p>
                                {product.price.toLocaleString()}{' '}
                                <span className="underline">đ</span>
                            </p>
                        )}
                    </div>
                    <Divider />
                    <div className="my-4">
                        <p className="font-semibold">Số lượng</p>
                        <InputNumber
                            value={productOrderNumber}
                            controls={false}
                            addonBefore={
                                <button
                                    onClick={() =>
                                        setProductOrderNumber((num) => (num === 1 ? num : num - 1))
                                    }
                                >
                                    -
                                </button>
                            }
                            addonAfter={
                                <button onClick={() => setProductOrderNumber((num) => num + 1)}>
                                    +
                                </button>
                            }
                        />
                    </div>
                    <Button
                        type="primary"
                        danger
                        onClick={addToCartHandler}
                        className="!h-12 !px-36 !text-base font-bold"
                    >
                        Chọn mua
                    </Button>
                </div>
            </div>
        </BaseCard>
    );
}

ProductOverview.propTypes = {
    product: PropType.object,
    onFollow: PropType.func,
    onAddToCart: PropType.func,
};

export default ProductOverview;
