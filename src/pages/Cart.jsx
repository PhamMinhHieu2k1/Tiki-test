import { Col, Modal, Row, Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from '../components/Cart/Tables/ItemList';
import BaseCard from '../components/shared/Card';
import { checkoutActions } from '../store/cart';
import emptyCartImgPath from '../assets/img/empty-cart.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Cart() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const total = useSelector((store) => store.cart.totalPrice);
    const shipFee = useSelector((store) => store.cart.shipFee);
    const cartAmount = useSelector((store) => store.cart.totalAmount);
    const isLoggedIn = !!useSelector((store) => store.user.auth);
    const deliveryAddress = useSelector((store) => store.cart.deliveryAddress);

    function updateItem({ itemID, amount }) {
        dispatch(checkoutActions.updateItem({ itemID, amount }));
    }

    function removeItem(itemID) {
        const modal = Modal.confirm({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm?',
            cancelText: 'Hủy',
            okText: 'Xóa',
            onOk: () => {
                dispatch(checkoutActions.removeItem({ itemID }));
                modal.destroy();
            },
            onCancel: () => {
                modal.destroy();
            },
        });
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigator('/', { replace: true });
        }
    }, []);

    return (
        <div className="py-4">
            <h2 className="text-2xl">GIỎ HÀNG</h2>
            {cartAmount === 0 ? (
                <BaseCard>
                    <div className="flex h-96 flex-col items-center">
                        <img src={emptyCartImgPath} alt="" className="w-48 mb-4" />
                        <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link
                            to="/"
                            className="px-14 py-2 bg-yellow-500 text-black hover:text-blue-600 hover:bg-yellow-400 rounded-md"
                        >
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </BaseCard>
            ) : (
                <Row gutter={16}>
                    <Col span={18}>
                        <ItemList onUpdateItem={updateItem} onRemoveItem={removeItem} />
                    </Col>
                    <Col span={6}>
                        <BaseCard>
                            <Row justify="space-between">
                                <Col>Tạm tính</Col>
                                <Col className="font-semibold">{total.toLocaleString()} VNĐ</Col>
                            </Row>
                            <Row justify="space-between">
                                <Col>Giao hàng</Col>
                                <Col className="font-semibold">{shipFee.toLocaleString()} VNĐ</Col>
                            </Row>
                            <Divider />
                            <Row justify="space-between">
                                <Col>Tổng tiền</Col>
                                <Col className="font-semibold text-lg text-red-500">
                                    {(total + shipFee).toLocaleString()} VNĐ
                                </Col>
                            </Row>
                        </BaseCard>
                        <Link
                            className="block w-full py-2 bg-red-400 text-white text-center rounded mt-4 hover:text-white hover:bg-red-500"
                            to={
                                deliveryAddress
                                    ? '/gio-hang/thanh-toan'
                                    : '/gio-hang/dia-chi-thanh-toan'
                            }
                        >
                            Mua hàng
                        </Link>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default Cart;
