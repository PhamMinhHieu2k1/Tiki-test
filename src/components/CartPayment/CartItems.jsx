import { CaretRightOutlined } from '@ant-design/icons';
import { Col, Collapse, Divider, Row } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BaseCard from '../shared/Card';

import './CartItems.scss';

function CartItems() {
    const totalAmount = useSelector((store) => store.cart.totalAmount);
    const cartItems = useSelector((store) => store.cart.cartItems);
    const total = useSelector((store) => store.cart.totalPrice);
    const shipFee = useSelector((store) => store.cart.shipFee);
    return (
        <BaseCard
            style={{
                fontSize: '13px',
            }}
        >
            <div className="flex justify-between items-center">
                <h4 className="font-bold m-0">Đơn hàng</h4>
                <Link
                    className="px-4 py-2 border border-gray-400 rounded text-black"
                    to="/gio-hang"
                >
                    Sửa
                </Link>
            </div>
            <p className="m-0">{totalAmount} sản phẩm</p>
            <Collapse
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                expandIconPosition="right"
                ghost
                className="cart__items-collapse"
            >
                <Collapse.Panel
                    header={
                        <p className="text-blue-500 hover:text-blue-400 cursor-pointer m-0">
                            Xem thông tin
                        </p>
                    }
                    key="1"
                >
                    <Divider />
                    {cartItems.map((item) => (
                        <div className="flex text-xs">
                            <div
                                style={{
                                    flex: '2 1 0%',
                                }}
                            >
                                <span className="mr-2 font-bold">{item.amount} x</span>
                                <Link to={`/san-pham/${item.id}`} className="cart__items-item-name">
                                    {item.name}
                                </Link>
                            </div>
                            <div
                                style={{
                                    flex: '1 1 0%',
                                }}
                                className="text-right"
                            >
                                {item.price.toLocaleString()} VNĐ
                            </div>
                        </div>
                    ))}
                </Collapse.Panel>
            </Collapse>
            <Divider />
            <Row justify="space-between">
                <Col>Tạm tính</Col>
                <Col className="font-semibold">{total.toLocaleString()} VNĐ</Col>
            </Row>
            <Row justify="space-between">
                <Col>Phí vận chuyển</Col>
                <Col className="font-semibold">{shipFee.toLocaleString()} VNĐ</Col>
            </Row>
            <Divider />
            <Row justify="space-between">
                <Col>Tổng tiền</Col>
                <Col className="font-semibold text-base text-red-600">
                    {(total + shipFee).toLocaleString()} VNĐ
                </Col>
            </Row>
        </BaseCard>
    );
}

export default CartItems;
