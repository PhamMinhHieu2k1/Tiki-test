import PropTypes from "prop-types";
import { Table } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import orderStates from "../../../constants/orderState";

const tableColumns = [
    {
        title: "Mã đơn hàng",
        dataIndex: "id",
        key: "order-id",
        render: (id) => <Link to={`/tai-khoan/don-hang/${id}`}>{id}</Link>,
        width: 200,
    },
    {
        title: "Sản phẩm",
        dataIndex: "items",
        key: "order-product-name",
        render: (items) => (
            <div style={{ minWidth: "250px" }}>
                {items.map((item) => (
                    <Link className="block mb-2 text-current w-full" to={`/san-pham/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        ),
        ellipsis: true,
    },
    {
        title: "Ngày tạo",
        dataIndex: "createTime",
        key: "order-create",
        render: (timestamp) => <p className="m-0">{moment(timestamp).format("DD/MM/YYYY")}</p>,
        width: 150,
    },
    {
        title: "Tổng tiền",
        dataIndex: "totalPrice",
        key: "order-total",
        render: (money) => <p className="m-0">${money}</p>,
        width: 150,
    },
    {
        title: "Trạng thái",
        dataIndex: "state",
        key: "order-state",
        render: (state) => <p className="m-0">{orderStates[state]}</p>,
        width: 200,
    },
];
function OrderList({ orders }) {
    return (
        <Table
            dataSource={orders}
            pagination={{ style: { display: "none" } }}
            columns={tableColumns}
            rowClassName={(_, index) => (index % 2 === 0 ? "bg-white" : "bg-blue-50")}
        ></Table>
    );
}

OrderList.propTypes = {
    orders: PropTypes.array,
};

export default OrderList;
