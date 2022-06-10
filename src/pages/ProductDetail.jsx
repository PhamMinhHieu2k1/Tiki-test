import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
    product as productData,
    products as productList,
    comments as commentList,
} from '../constants/fake-data';
import ProductOverview from '../components/ProductDetail/ProductOverview';
import ProductDetailContent from '../components/ProductDetail/ProductDetailContent';
import RecommendProducts from '../components/ProductDetail/RecommendProducts';
import ProductComment from '../components/ProductDetail/ProductComment';
import LoadingPlaceholder from '../components/shared/LoadingPlaceholder';
import { useDispatch } from 'react-redux';
import { Breadcrumb, message } from 'antd';
import { checkoutActions } from '../store/cart';

function ProductDetail() {
    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const commentRef = useRef();
    const dispatch = useDispatch();

    async function followShop(shopSKU) {
        console.log(shopSKU);
    }

    function addProductToCart(orderCount) {
        const addedProduct =
            productList.find((prod) => prod.id.toString() === productId) || productList[0];
        const cart = { product: addedProduct, quantity: orderCount };
        dispatch(checkoutActions.addItemToCart(cart));
        message.success('Thêm sản phẩm thành công');
    }

    async function favouriteComment(cmtId) {
        console.log(cmtId);
    }

    function scrollToComments() {
        commentRef.current.scrollIntoView();
    }

    const breadcrumbs = [
        {
            url: '/',
            label: 'Trang chủ',
        },
        {
            url: '/san-pham',
            label: 'Sản phẩm',
        },
        {
            label: product?.name,
        },
    ];

    useEffect(() => {
        setIsLoading(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(productData);
            }, 3000);
        })
            .then((prod) => {
                document.head.querySelector('title').textContent = prod.name;
                setProduct(prod);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [productId]);

    return (
        <section>
            <LoadingPlaceholder isLoading={isLoading}>
                <div className="px-10 py-4 bg-gray-100">
                    <Breadcrumb separator=">" className="!pb-4">
                        {breadcrumbs.map((link, i) => {
                            if (!link.url) {
                                return <Breadcrumb.Item key={i}>{link.label}</Breadcrumb.Item>;
                            }
                            return (
                                <Breadcrumb.Item key={i} href={link.url}>
                                    {link.label}
                                </Breadcrumb.Item>
                            );
                        })}
                    </Breadcrumb>
                    <ProductOverview
                        product={product}
                        onAddToCart={addProductToCart}
                        onFollow={followShop}
                        onScrollToComments={scrollToComments}
                    />
                    <ProductDetailContent product={product} className="my-5" />
                    <div className="my-4">
                        <ProductComment
                            comments={commentList}
                            ref={commentRef}
                            onFavourite={favouriteComment}
                        />
                    </div>
                    <RecommendProducts products={productList.slice(0, 12)} />
                </div>
            </LoadingPlaceholder>
        </section>
    );
}

export default ProductDetail;
