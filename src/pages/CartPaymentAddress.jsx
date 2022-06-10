import { Form, Input, Row, Col, Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkoutActions } from '../store/cart';

function CartPaymentAddress() {
    const [form] = Form.useForm();
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const customerName = useSelector((store) => store.cart.customerName);
    const deliveryAddress = useSelector((store) => store.cart.deliveryAddress);
    const customerPhone = useSelector((store) => store.cart.customerPhone);
    const isLoggedIn = !!useSelector((store) => store.user.auth);

    function cancelForm() {
        navigator('/gio-hang');
    }

    function formSubmit() {
        form.validateFields().then(() => {
            const formFields = form.getFieldsValue(true);
            for (const key in formFields) {
                dispatch(checkoutActions.updateUserInfo({ name: key, value: formFields[key] }));
            }
            navigator('/gio-hang/thanh-toan');
        });
    }
    useEffect(() => {
        if (!isLoggedIn) {
            navigator('/', { replace: true });
        }
    }, []);

    return (
        <div className="py-4">
            <h2 className="text-lg">Địa chỉ giao hàng</h2>
            <p>Nhập địa chỉ giao hàng vào phía dưới</p>
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                colon={false}
                labelAlign="left"
                requiredMark={false}
                initialValues={{
                    customerName,
                    customerPhone,
                    deliveryAddress,
                }}
            >
                <Form.Item
                    label="Họ tên"
                    name="customerName"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập họ tên',
                            validateTrigger: 'onChange',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Điện thoại di động"
                    name="customerPhone"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập số điện thoại',
                            validateTrigger: 'onChange',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Địa chỉ"
                    name="deliveryAddress"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập địa chỉ giao hàng',
                            validateTrigger: 'onChange',
                        },
                    ]}
                >
                    <Input.TextArea
                        autoSize={{
                            minRows: 6,
                            maxRows: 8,
                        }}
                    />
                </Form.Item>

                <Row>
                    <Col span={16} offset={8}>
                        <Button danger className="mr-4" onClick={cancelForm}>
                            Hủy bỏ
                        </Button>
                        <Button type="primary" onClick={formSubmit}>
                            Xác nhận
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default CartPaymentAddress;
