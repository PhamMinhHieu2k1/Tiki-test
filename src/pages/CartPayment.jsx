import { Button, Col, Form, Input, Radio, Row, Space, Modal } from 'antd';
import CartItems from '../components/CartPayment/CartItems';
import DeliveryAddress from '../components/CartPayment/DeliveryAddress';
import BaseCard from '../components/shared/Card';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutActions } from '../store/cart';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const paymentMethods = [
    {
        label: 'Thanh toán tiền mặt khi nhận hàng',
        value: 'offline',
    },
    {
        label: 'Thanh toán bằng Viettel Money',
        value: 'online-viettel',
        disabled: true,
    },
    {
        label: 'Thanh toán bằng Momo',
        value: 'online-momo',
        disabled: true,
    },
    {
        label: 'Thẻ ATM nội địa/Internet Banking (Hỗ trợ Internet Banking)',
        value: 'online-internet-banking',
        disabled: true,
    },
];

function CartPayment() {
    const navigator = useNavigate();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart);
    const isLoggedIn = !!useSelector((store) => store.user.auth);
    const [isSendingOrder, setIsSendingOrder] = useState(false);
    function createOrder() {
        form.validateFields()
            .then(() => {
                setIsSendingOrder(true);
                console.log(cart);
                const paymentMethod = form.getFieldValue('paymentMethod');
                const note = form.getFieldValue('note');
                dispatch(
                    checkoutActions.updateUserInfo({ name: 'paymentMethod', value: paymentMethod })
                );
                dispatch(checkoutActions.updateUserInfo({ name: 'note', value: note }));

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });
            })
            .then(() => {
                Modal.success({
                    title: 'Đơn hàng của bạn đã được gửi lên hệ thống',
                    onOk: () => {
                        dispatch(checkoutActions.reset());
                        navigator('/');
                    },
                });
            })
            .catch((e) => {
                // Nếu error là từ form validation
                if ('errorFields' in e) {
                    return;
                }
                Modal.error({
                    title: 'Có lỗi xảy ra, thử lại sau',
                });
            })
            .finally(() => {
                setIsSendingOrder(false);
            });
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigator('/', { replace: true });
        }
    }, []);

    return (
        <div className="py-4">
            <h3 className="text-lg mb-4">1. Chọn hình thức thanh toán</h3>
            <Row gutter={24}>
                <Col span={17}>
                    <Form form={form} requiredMark={false}>
                        <BaseCard>
                            <Form.Item
                                name="paymentMethod"
                                rules={[
                                    {
                                        required: 'true',
                                        message: 'Vui lòng chọn phương thức thanh toán',
                                        validateTrigger: 'onChange',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Space direction="vertical">
                                        {paymentMethods.map(({ value, label, ...props }) => (
                                            <Radio value={value} key={value} {...props}>
                                                {label}
                                            </Radio>
                                        ))}
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </BaseCard>
                        <h3 className="text-lg my-4">2. Ghi chú khi giao hàng</h3>
                        <Form.Item name="note">
                            <Input.TextArea
                                autoSize={{
                                    minRows: 6,
                                    maxRows: 8,
                                }}
                            />
                        </Form.Item>
                        <Button
                            style={{
                                margin: '10px 0px 0px',
                                padding: '4px 12px',
                                width: '360px',
                                height: '50px',
                                lineHeight: '2',
                                color: 'rgb(255, 255, 255)',
                                fontSize: '18px',
                                border: '1px solid rgb(172, 34, 39)',
                                outlineColor: 'rgb(204, 204, 204)',
                                borderRadius: '3px',
                                cursor: 'pointer',
                                background: 'linear-gradient(rgb(239, 57, 89), rgb(215, 32, 65))',
                            }}
                            onClick={createOrder}
                            loading={isSendingOrder}
                        >
                            ĐẶT MUA
                        </Button>
                        <p className="my-3">
                            (Xin vui lòng kiểm tra lại đơn hàng trước khi Đặt Mua)
                        </p>
                    </Form>
                </Col>
                <Col span={7}>
                    <Space direction="vertical" className="w-full" size="middle">
                        <DeliveryAddress />
                        <CartItems />
                    </Space>
                </Col>
            </Row>
        </div>
    );
}

export default CartPayment;
