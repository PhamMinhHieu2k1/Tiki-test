import { Space } from "antd";
import { useSelector } from "react-redux";
import Banner from "../components/Homepage/Banner";
import FlashDeal from "../components/Homepage/FlashDeal/FlashDeal";
import HotCategories from "../components/Homepage/HotCategories/HotCategories";
import ProductItems from "../components/Homepage/ProductItems/ProductItems";
import TabContainer from "../components/Homepage/sliders/TabContainer";

import { topCategories, flashDealItems, suggestProducts } from "../constants/fake-data";

function HomePage() {
    const categories = useSelector((store) => store.categories);

    return (
        <div>
            <TabContainer tabList={topCategories} />
            <div className="mx-5 my-4 pb-4">
                <Space direction="vertical" size="middle" style={{ display: "flex" }}>
                    <Banner />
                    <FlashDeal dealItems={flashDealItems} />
                    <HotCategories hotCategories={categories} />
                    <ProductItems products={suggestProducts} />
                </Space>
            </div>
        </div>
    );
}

export default HomePage;
