import { createElement } from "react";
import { Navigate } from "react-router-dom";

import Category from "../pages/Category";
import Homepage from "../pages/Homepage";
import ProductDetail from "../pages/ProductDetail";
import Account from "../pages/Account";
import DefaultLayout from "../layouts/default";
import AccountLayout from "../layouts/account";
import ChangePasswordPage from "../pages/ChangePassword";
import NotificationPage from "../pages/Notification";
import OrderManagementPage from "../pages/OrderManagement";
import OrderDetailPage from "../pages/OrderDetail";
import CartPage from "../pages/Cart";
import CartPaymentAddressPage from "../pages/CartPaymentAddress";
import CartPaymentPage from "../pages/CartPayment";

export default [
    {
        element: createElement(DefaultLayout),
        path: "/",
        children: [
            {
                name: "Homepage",
                element: createElement(Homepage),
                index: true,
            },
            {
                name: "Category",
                path: "danh-muc",
                element: createElement(Category),
                children: [
                    {
                        path: ":categoryId",
                        element: createElement(Category),
                    },
                ],
            },
            {
                name: "ProductDetail",
                path: "san-pham",
                children: [
                    {
                        index: true,
                        element: createElement(Navigate, {
                            to: "/danh-muc",
                            replace: true,
                        }),
                    },
                    {
                        path: ":productId",
                        element: createElement(ProductDetail),
                    },
                ],
            },
            {
                name: "Cart",
                path: "gio-hang",
                children: [
                    {
                        index: true,
                        element: createElement(CartPage),
                    },
                    {
                        path: "dia-chi-thanh-toan",
                        element: createElement(CartPaymentAddressPage),
                    },
                    {
                        path: "thanh-toan",
                        element: createElement(CartPaymentPage),
                    },
                ],
            },
        ],
    },
    {
        element: createElement(AccountLayout),
        path: "/tai-khoan",
        children: [
            {
                name: "Account",
                index: true,
                element: createElement(Account),
            },
            {
                name: "Notification",
                element: createElement(NotificationPage),
                path: "thong-bao",
            },
            {
                name: "Order",
                path: "don-hang",
                children: [
                    {
                        index: true,
                        element: createElement(OrderManagementPage),
                    },
                    {
                        path: ":orderID",
                        element: createElement(OrderDetailPage),
                    },
                ],
            },
            {
                name: "ChangePassword",
                element: createElement(ChangePasswordPage),
                path: "doi-mat-khau",
            },
        ],
    },
];
