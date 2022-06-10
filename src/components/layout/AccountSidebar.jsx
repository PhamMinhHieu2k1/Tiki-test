import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Sidebar({ className }) {
    const username = useSelector((store) => store.user.username);
    const avatar = useSelector((store) => store.user.avatar);
    return (
        <aside className={className}>
            <div className="flex mb-5">
                <img src={avatar} alt="" className="h-12 w-12 rounded-3xl object-cover" />
                <div className="ml-4">
                    <p className="text-sm m-0">Tài khoản của</p>
                    <p className="m-0 text-base">{username}</p>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink
                        to="/tai-khoan"
                        className={({ isActive }) => {
                            const defaultClasses =
                                "flex items-center text-current cursor-pointer px-5 py-2 hover:bg-gray-300 hover:text-current";
                            return `${isActive ? "bg-gray-300" : ""} ${defaultClasses}`;
                        }}
                        end
                    >
                        <FontAwesomeIcon
                            className="w-4 h-4 mr-4 leading-none"
                            icon={["fas", "user"]}
                        />
                        <span>Thông tin tài khoản</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tai-khoan/thong-bao"
                        className={({ isActive }) => {
                            const defaultClasses =
                                "flex items-center text-current cursor-pointer px-5 py-2 hover:bg-gray-300 hover:text-current";
                            return `${isActive ? "bg-gray-300" : ""} ${defaultClasses}`;
                        }}
                    >
                        <FontAwesomeIcon
                            className="w-4 h-4 mr-4 leading-none"
                            icon={["fas", "bell"]}
                        />
                        <span>Thông báo của tôi</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tai-khoan/don-hang"
                        className={({ isActive }) => {
                            const defaultClasses =
                                "flex items-center text-current cursor-pointer px-5 py-2 hover:bg-gray-300 hover:text-current";
                            return `${isActive ? "bg-gray-300" : ""} ${defaultClasses}`;
                        }}
                    >
                        <FontAwesomeIcon
                            className="w-4 h-4 mr-4 leading-none"
                            icon={["fas", "bag-shopping"]}
                        />
                        <span>Quản lý đơn hàng</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tai-khoan/doi-mat-khau"
                        className={({ isActive }) => {
                            const defaultClasses =
                                "flex items-center text-current cursor-pointer px-5 py-2 hover:bg-gray-300 hover:text-current";
                            return `${isActive ? "bg-gray-300" : ""} ${defaultClasses}`;
                        }}
                    >
                        <FontAwesomeIcon
                            className="w-4 h-4 mr-4 leading-none"
                            icon={["fas", "lock"]}
                        />
                        <span>Đổi mật khẩu</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

Sidebar.propTypes = {
    className: PropTypes.string,
};

export default Sidebar;
