import { useParams } from 'react-router-dom';

import { shopInfo, shopProducts } from '../constants/fake-data';
import HeaderShop from '../components/shop/HeaderShop';
import ShopProducts from '../components/shop/ShopProducts';
import { useEffect } from 'react';

function Shop() {
    const { storeID } = useParams();
    console.log(storeID);
    useEffect(() => {
        document.head.querySelector('title').textContent = `${shopInfo.name} | Tiki.vn`;
    }, []);
    return (
        <div className="pb-5">
            <HeaderShop shopInfo={shopInfo} />
            <ShopProducts products={shopProducts} />
        </div>
    );
}

export default Shop;
