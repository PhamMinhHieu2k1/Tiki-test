import { Card, Col, Divider, Row } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import orderStates from "../constants/orderState";
import paymentMethods from "../constants/paymentMethods";
import { orderDetail } from "../constants/fake-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Order from "../components/OrderDetail/Order";

function OrderDetail() {
    const { orderID } = useParams();
    const navigator = useNavigate();

    function goBack() {
        navigator(-1);
    }

    return (
        <Card
            title={
                <div className="flex justify-between items-center">
                    <button
                        className="text-lg cursor-pointer uppercase hover:text-blue-400"
                        onClick={goBack}
                    >
                        <FontAwesomeIcon icon={["fas", "chevron-left"]} /> Trở lại
                    </button>
                    <div className="flex text-lg">
                        <h4>Mã đơn hàng: {orderID}</h4>
                        <Divider
                            type="vertical"
                            className="!border-l-gray-600 !mx-4"
                            style={{ height: "auto" }}
                        />
                        <p className="m-0 uppercase text-green-400">
                            {orderStates[orderDetail.state]}
                        </p>
                    </div>
                </div>
            }
            bodyStyle={{
                fontSize: "1rem",
            }}
        >
            <Row gutter={[16, 8]}>
                <Col span={12}>
                    <strong>Họ tên:</strong> {orderDetail.customerName}
                </Col>
                <Col span={12}>
                    <strong>Số điện thoại:</strong> {orderDetail.customerPhone}
                </Col>
                <Col span={12}>
                    <strong>Ngày đặt:</strong> {moment(orderDetail.createTime).format("DD/MM/YYYY")}
                </Col>
                <Col span={24}>
                    <strong>Địa chỉ:</strong> {orderDetail.deliveryAddress}
                </Col>
                <Col span={24}>
                    <strong>Ghi chú:</strong> {orderDetail.note || "Không"}
                </Col>
            </Row>
            <Divider />
            <ul className="ordered__list">
                {orderDetail.items.map((item) => (
                    <Order item={item} key={item.id} />
                ))}
            </ul>
            <div className="mt-5">
                <table className="ml-auto">
                    <tbody>
                        <tr>
                            <td>
                                <span className="mr-4">Tổng tiền:</span>
                            </td>
                            <td className="text-lg font-bold text-red-500">
                                {orderDetail.totalPrice.toLocaleString()} VNĐ
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="mr-4"> Phương thức thanh toán:</span>
                            </td>
                            <td>{paymentMethods[orderDetail.paymentMethod]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

export default OrderDetail;
