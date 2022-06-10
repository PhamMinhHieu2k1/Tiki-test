import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderContext } from "../store/headerContext";
import { Breadcrumb } from "antd";
import { useSelector } from "react-redux";
import Sidebar from "../components/layout/AccountSidebar";

function AccountLayout() {
    const isLoggedIn = !!useSelector((store) => store.user.auth);
    const location = useLocation();
    const navigator = useNavigate();
    const [headerContext, setHeaderContext] = useState({ setShowLogin, showLogin: null });
    function setShowLogin(loginFnc) {
        setHeaderContext({ ...headerContext, showLogin: loginFnc });
    }

    const breadcrumbs = [
        {
            url: "/",
            label: "Trang chủ",
        },
    ];

    switch (location.pathname) {
        case "/tai-khoan":
            breadcrumbs.push({
                label: "Thông tin tài khoản",
            });
            break;
        case "/tai-khoan/thong-bao":
            breadcrumbs.push({
                label: "Thông báo của tôi",
            });
            break;
        case "/tai-khoan/don-hang":
            breadcrumbs.push({
                label: "Quản lý đơn hàng",
            });
            break;
        case "/tai-khoan/doi-mat-khau":
            breadcrumbs.push({
                label: "Đổi mật khẩu",
            });
            break;

        default:
            breadcrumbs.splice(0);
            break;
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigator("/", { replace: true });
        }
    }, []);

    return (
        <HeaderContext.Provider value={headerContext}>
            <Header />
            <main className="py-4 bg-gray-100">
                <div className="w-min mx-auto" style={{ minWidth: "1275px" }}>
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
                    <div className="flex ">
                        <Sidebar className="mr-4 w-64" />
                        <div
                            className="flex-auto"
                            style={{
                                width: "75%",
                                minWidth: "1024px",
                            }}
                        >
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </HeaderContext.Provider>
    );
}

export default AccountLayout;
