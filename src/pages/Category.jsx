import _isEmpty from "lodash/isEmpty";
import { useSelector } from "react-redux";
import { Fragment, useState, useEffect } from "react";
import { Breadcrumb, Col, Divider, Row } from "antd";
import { Link, useParams, useSearchParams } from "react-router-dom";

import ProductList from "../components/Category/Product/ProductList";
import BaseCard from "../components/shared/Card";
import { products } from "../constants/fake-data";
import RatingFilter from "../components/Category/Filter/Rating";
import PriceFilter from "../components/Category/Filter/Price";
import Pagination from "../components/shared/Pagination";

const DEFAULT_NUMBER_PER_PAGE = 24;
const DEFAULT_PAGE = 1;

function Category() {
    const params = useParams();
    const isEmptyParams = _isEmpty(params);
    const categories = useSelector((store) => store.categories);
    const [query] = useSearchParams();
    const numberProductPerPage = Number(query.get("perPage")) || DEFAULT_NUMBER_PER_PAGE;
    const page = Number(query.get("page")) || DEFAULT_PAGE;
    const [showProducts, setShowProducts] = useState(
        products.slice(page - 1, numberProductPerPage * page)
    );
    const categoryId = params?.categoryId;

    const breadcrumbs = isEmptyParams
        ? [
              {
                  url: "/",
                  label: "Trang chủ",
              },
              {
                  label: "Sản phẩm",
              },
          ]
        : [
              {
                  url: "/",
                  label: "Trang chủ",
              },
              {
                  url: "/danh-muc",
                  label: "Sản phẩm",
              },
              {
                  label: categoryId,
              },
          ];

    useEffect(() => {
        setShowProducts(products.slice(page - 1, numberProductPerPage * page));
    }, [page, numberProductPerPage]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.head.querySelector("title").textContent = "Danh mục sản phẩm";
    }, [categoryId]);

    return (
        <Fragment>
            <section>
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
                <BaseCard>
                    <Row>
                        <Col span={5}>
                            {isEmptyParams && (
                                <div>
                                    <h4 className="font-bold uppercase">Danh mục sản phẩm</h4>
                                    <ul>
                                        {categories.map(({ id, name }) => {
                                            return (
                                                <li key={id}>
                                                    <Link
                                                        to={`/danh-muc/${id}`}
                                                        className="text-black hover:underline"
                                                    >
                                                        {name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                            <div>
                                <h4 className="font-bold uppercase">Đánh giá</h4>
                                <RatingFilter />
                            </div>
                            <div>
                                <h4 className="font-bold uppercase">Giá</h4>
                                <PriceFilter />
                            </div>
                        </Col>
                        <Divider className="!h-auto !mr-auto" type="vertical" />
                        <Col span={18}>
                            <h2 className="text-xl">Giày thể thao nam</h2>
                            <ProductList products={showProducts} />
                        </Col>
                    </Row>
                </BaseCard>
            </section>
            <Pagination
                data={{
                    page: DEFAULT_PAGE,
                    total: products.length,
                }}
                numberPage={numberProductPerPage}
                className="px-5 pb-4 bg-gray-100"
            />
        </Fragment>
    );
}

export default Category;
