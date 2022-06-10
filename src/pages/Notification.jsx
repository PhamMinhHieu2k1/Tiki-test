import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Dropdown, Menu } from "antd";
import { useEffect, useMemo, useState } from "react";
import BaseCard from "../components/shared/Card";
import EmptyIcon from "../assets/img/mascot_fail.svg";
import { Link } from "react-router-dom";
import { notifications } from "../constants/fake-data";
import LoadingPlaceholder from "../components/shared/LoadingPlaceholder";

const OPTION_DROPDOWN_KEYS = {
    readAll: "Đánh dấu tất cả đã đọc",
    deleteAll: "Xóa tất cả thông báo",
};

function Notification() {
    const [isLoading, setIsLoading] = useState(true);
    const [isShowAll, setIsShowAll] = useState(false);
    const [notis, setNotis] = useState([]);

    const MenuOptions = useMemo(() => {
        return Object.entries(OPTION_DROPDOWN_KEYS).map(([key, label]) => (
            <Menu.Item key={key}>{label}</Menu.Item>
        ));
    }, [OPTION_DROPDOWN_KEYS]);

    function optionMenuClickHandler({ key }) {
        const [READ_ALL, DELETE_ALL] = Object.keys(OPTION_DROPDOWN_KEYS);

        switch (key) {
            case READ_ALL:
                setNotis(
                    notis.map((noti) => {
                        return { ...noti, isRead: true };
                    })
                );
                break;
            case DELETE_ALL:
                setNotis([]);
                break;
            default:
                break;
        }
    }

    function showAllNotification() {
        setIsShowAll(true);
    }

    function readNotification(notiID) {
        setNotis(
            notis.map((noti) => {
                if (noti.id !== notiID) {
                    return { ...noti };
                }

                return { ...noti, isRead: true };
            })
        );
    }

    function deleteNotification(notiID) {
        setNotis(notis.filter((notification) => notification.id !== notiID));
    }

    useEffect(() => {
        setTimeout(() => {
            setNotis(notifications);
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            <h2 className="text-2xl">Thông báo của tôi</h2>
            <LoadingPlaceholder isLoading={isLoading}>
                <BaseCard>
                    <div className="flex justify-end">
                        <Dropdown
                            overlay={<Menu onClick={optionMenuClickHandler}>{MenuOptions}</Menu>}
                            trigger={["click"]}
                            className="cursor-pointer"
                        >
                            <FontAwesomeIcon
                                icon={["fas", "ellipsis-vertical"]}
                                size="1x"
                                className="text-xl"
                            />
                        </Dropdown>
                    </div>
                    <Divider />
                    {notis.length === 0 ? (
                        <div
                            className="flex justify-center items-center"
                            style={{ minHeight: "500px" }}
                        >
                            <div>
                                <img src={EmptyIcon} />
                                <p className="text-center my-4">Bạn không có thông báo nào</p>
                                <Link
                                    to="/"
                                    className="block px-5 py-2 text-center rounded-md bg-yellow-500 text-white hover:bg-yellow-300 hover:text-white"
                                >
                                    Tiếp tục mua sắm
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <ul>
                                {notis.slice(0, 5).map((notification) => {
                                    const time = new Date(notification.createAt);
                                    return (
                                        <li
                                            key={notification.id}
                                            title={time.toLocaleString()}
                                            className={`flex justify-between items-center px-5 py-3 my-2 rounded-lg transition-all duration-200 hover:bg-blue-200 ${
                                                notification.isRead ? "bg-white" : "bg-blue-200"
                                            }`}
                                        >
                                            <Link
                                                className="block w-11/12 text-current hover:text-current "
                                                to={notification.linkTo}
                                                onClick={() => {
                                                    readNotification(notification.id);
                                                }}
                                            >
                                                {notification.content}
                                            </Link>
                                            <div
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    deleteNotification(notification.id);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={["fas", "trash"]} />
                                            </div>
                                        </li>
                                    );
                                })}
                                {isShowAll &&
                                    notis.slice(5).map((notification) => {
                                        const time = new Date(notification.createAt);
                                        return (
                                            <li
                                                key={notification.id}
                                                title={time.toLocaleString()}
                                                className={`flex justify-between items-center px-5 py-3 my-2 rounded-lg transition-all duration-200 hover:bg-blue-200 ${
                                                    notification.isRead ? "bg-white" : "bg-blue-200"
                                                }`}
                                            >
                                                <Link
                                                    className="block w-11/12 text-current hover:text-current"
                                                    to={notification.linkTo}
                                                    onClick={() => {
                                                        readNotification(notification.id);
                                                    }}
                                                >
                                                    {notification.content}
                                                </Link>
                                                <div
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        deleteNotification(notification.id);
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={["fas", "trash"]} />
                                                </div>
                                            </li>
                                        );
                                    })}
                                <button
                                    className="block mx-auto my-4 px-20 py-2 border rounded-lg border-blue-500 text-blue-500 bg-blue-100 hover:bg-blue-500 hover:text-white transition-all duration-200"
                                    style={{
                                        display: notis.length > 5 && !isShowAll ? "" : "none",
                                    }}
                                    onClick={showAllNotification}
                                >
                                    Hiện thêm
                                </button>
                            </ul>
                        </div>
                    )}
                </BaseCard>
            </LoadingPlaceholder>
        </div>
    );
}

export default Notification;
