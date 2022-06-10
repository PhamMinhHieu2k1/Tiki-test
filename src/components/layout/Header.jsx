import { Button, Col, Row, Input, message, Dropdown, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { HeaderContext } from "../../store/headerContext";
import { userActions } from "../../store/user";
import Login from "../Authentication/Login";
import Logo from "../../assets/img/tiki-logo.png";

import "./Header.scss";

const DROPDOWN_COMMAND_KEYS = {
    ACCOUNT: "ACCOUNT",
    BILL: "BILL",
    NOTIFICATION: "NOTIFICATION",
    LOGOUT: "LOGOUT",
};

function Header() {
    const navigator = useNavigate();
    const username = useSelector((store) => store.user.username);
    const isLoggedIn = !!useSelector((store) => store.user.auth);
    const totalCartItem = useSelector((store) => store.cart.totalAmount);
    const [showLogin, setShowLogin] = useState(false);
    const [freeword, setFreeword] = useState("");
    const dispatch = useDispatch();
    const headerContext = useContext(HeaderContext);

    function hideLoginModal() {
        setShowLogin(false);
    }

    function showLoginModal() {
        setShowLogin(true);
    }

    function searchKeyword() {
        if (freeword.trim() === "") {
            message.error("Không được để trống khi tìm kiếm");
            return;
        }

        navigator(`/san-pham/?search=${freeword}`);
    }

    function enterSearchKeyword(e) {
        setFreeword(e.target.value);
    }

    function userDropdownClickHandler({ key }) {
        switch (key) {
            case DROPDOWN_COMMAND_KEYS.LOGOUT:
                dispatch(userActions.logOut());
                break;
            case DROPDOWN_COMMAND_KEYS.ACCOUNT:
                navigator("/tai-khoan");
                break;
            case DROPDOWN_COMMAND_KEYS.NOTIFICATION:
                navigator("/tai-khoan/thong-bao");
                break;

            case DROPDOWN_COMMAND_KEYS.BILL:
                navigator("/tai-khoan/don-hang");
                break;

            default:
                break;
        }
    }

    function openCartHandler() {
        if (!isLoggedIn) {
            showLoginModal();
            return;
        }
        navigator("/gio-hang");
    }

    useEffect(() => {
        if (!isLoggedIn) {
            headerContext.setShowLogin(showLoginModal);
        } else {
            headerContext.setShowLogin(null);
        }
    }, [isLoggedIn]);

    return (
        <header className="px-10 py-4 bg-blue-500">
            <div className="header__top">
                <Row align="middle">
                    <Col span={4}>
                        <Link to="/">
                            <img src={Logo} alt="" width={60} height={30} />
                        </Link>
                    </Col>
                    <Col span={14}>
                        <Input.Group compact>
                            <Input
                                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                                style={{
                                    width: "80%",
                                }}
                                onChange={enterSearchKeyword}
                            ></Input>
                            <Button
                                style={{ width: "20%", border: 0 }}
                                type="primary"
                                className="header__btn-search"
                                onClick={searchKeyword}
                            >
                                <FontAwesomeIcon
                                    icon={["fas", "magnifying-glass"]}
                                    className="text-lg"
                                />
                                <span className="ml-4 font-medium">Tìm kiếm</span>
                            </Button>
                        </Input.Group>
                    </Col>
                    <Col
                        span={6}
                        className="justify-around"
                        style={{
                            display: "flex",
                        }}
                    >
                        {isLoggedIn && (
                            <Dropdown
                                overlay={
                                    <Menu onClick={userDropdownClickHandler}>
                                        <Menu.Item key={DROPDOWN_COMMAND_KEYS.ACCOUNT}>
                                            Tài khoản của tôi
                                        </Menu.Item>
                                        <Menu.Item key={DROPDOWN_COMMAND_KEYS.NOTIFICATION}>
                                            Thông báo của tôi
                                        </Menu.Item>
                                        <Menu.Item key={DROPDOWN_COMMAND_KEYS.BILL}>
                                            Đơn hàng của tôi
                                        </Menu.Item>
                                        <Menu.Item key={DROPDOWN_COMMAND_KEYS.LOGOUT}>
                                            Đăng xuất
                                        </Menu.Item>
                                    </Menu>
                                }
                                overlayClassName="w-50"
                            >
                                <p className="flex items-center text-white m-0 hover:cursor-pointer">
                                    <FontAwesomeIcon icon={["far", "user"]} className="text-xl" />
                                    <span
                                        className="ml-2 flex-col text-xs font-normal text-left"
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <span className="text-xs">Tài khoản</span>
                                        <span className="text-base font-normal">{username}</span>
                                    </span>
                                </p>
                            </Dropdown>
                        )}

                        {!isLoggedIn && (
                            <Button
                                onClick={showLoginModal}
                                className="header__btn-login"
                                type="primary"
                            >
                                <FontAwesomeIcon icon={["far", "user"]} className="text-xl" />
                                <span
                                    className="ml-2 flex-col text-xs font-normal text-left"
                                    style={{
                                        display: "flex",
                                    }}
                                >
                                    <span className="text-xs">Đăng nhập/ Đăng ký</span>
                                    <span className="text-sm">Tài khoản</span>
                                </span>
                            </Button>
                        )}
                        <div
                            className="flex items-end text-white cursor-pointer"
                            onClick={openCartHandler}
                        >
                            <div className="relative">
                                <ShoppingCartOutlined className="text-4xl" />
                                <span
                                    className="absolute top-0 left-full rounded-full px-2 bg-yellow-400 text-black"
                                    style={{
                                        transform: "translate(-50%, -30%)",
                                    }}
                                >
                                    {totalCartItem}
                                </span>
                            </div>
                            <p className="m-0 ml-4">Giỏ hàng</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <Login showLogin={showLogin} onHide={hideLoginModal} />
        </header>
    );
}

export default Header;
