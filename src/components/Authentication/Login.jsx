import { Modal, Row, Col, Form, Input, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useReducer, useState } from 'react';

import { signIn, DONE, ERROR } from '../../store/user';
import LoginImage from '../../assets/img/tiki-login.png';
import phoneValidator from '../../utils/phoneValidator';
import authStateKeys from '../../constants/authState';
import _clone from 'lodash/clone';

import './Login.scss';

/* 
    enteredPhone: Đã nhập số điện thoại
    forgetPassword: Quên mật khẩu

    Khi nhập mật khẩu thì enteredPhone = true, forgetPassword = false
    Khi nhập số điện thoại đăng nhập thì enteredPhone = false, forgetPassword = false
    Khi muốn lấy lại mật khẩu thì enteredPhone = false, forgetPassword = true
    Khi đã gửi mật khẩu mới thì enteredPhone = true, forgetPassword = true
*/
const defaultState = {
    enteredPhone: false,
    forgetPassword: false,
};

function stateReducer(state, action) {
    switch (action.type) {
        case authStateKeys.enteredPhone:
            return { enteredPhone: true, forgetPassword: false };

        case authStateKeys.forgotPass:
            return { enteredPhone: false, forgetPassword: true };

        case authStateKeys.getPassword:
            return { enteredPhone: true, forgetPassword: true };

        default:
            return _clone(defaultState);
    }
}

function Login({ showLogin = true, onHide }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const userLoadingStatus = useSelector((store) => store.user.status);
    const dispatch = useDispatch();
    const [authState, stateDispatcher] = useReducer(stateReducer, defaultState);

    function loginHandler() {
        if (authState.enteredPhone) {
            form.validateFields(['password'])
                .then(() => {
                    const account = {
                        phone: form.getFieldValue('phone'),
                        password: form.getFieldValue('password'),
                    };
                    setIsLoading(true);
                    dispatch(signIn(account));
                })
                .catch(() => {
                    message.error('Vui lòng nhập mật khẩu hợp lệ');
                });
        } else {
            form.validateFields(['phone'])
                .then(() => {
                    stateDispatcher({ type: authStateKeys.enteredPhone });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    async function resetPasswordHandler() {
        setIsLoading(true);
        try {
            const phone = form.getFieldValue('phone');
            console.log(phone);
            await new Promise((res) => setTimeout(() => res(), 1500));
            stateDispatcher({ type: authStateKeys.getPassword });
        } catch (error) {
            message.error('Số điện thoại không tồn tại');
        } finally {
            setIsLoading(false);
        }
    }

    function submitButtonClickHandler() {
        if (authState.forgetPassword) {
            resetPasswordHandler();
        } else {
            loginHandler();
        }
    }

    function forgetPassword() {
        stateDispatcher({ type: authStateKeys.forgotPass });
    }

    function closeLoginModal() {
        stateDispatcher({ type: 'reset' });
        form.resetFields();
        onHide();
    }

    let submitButtonContent = 'Đăng nhập';
    if (isLoading) {
        submitButtonContent = authState.forgetPassword ? 'Đang gửi yêu cầu' : 'Đang đăng nhập';
    } else if (authState.forgetPassword) {
        submitButtonContent = 'Lấy lại mật khẩu';
    } else {
        submitButtonContent = 'Tiếp tục';
    }

    useEffect(() => {
        switch (userLoadingStatus) {
            case ERROR:
                message.error('Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại');
                setIsLoading(false);
                break;

            case DONE:
                setIsLoading(false);
                closeLoginModal();
                break;
        }
    }, [userLoadingStatus]);

    return (
        <Modal
            footer={null}
            visible={showLogin}
            closable={false}
            className="login-modal"
            bodyStyle={{
                padding: 0,
                width: '800px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%)',
            }}
            onCancel={closeLoginModal}
        >
            <Button className="login-modal__btn--hide" onClick={closeLoginModal}>
                <FontAwesomeIcon icon={['fas', 'xmark']} />
            </Button>
            <Row>
                <Col span={16} className="login-form__left">
                    {!authState.forgetPassword && (
                        <div>
                            {authState.enteredPhone ? (
                                <div>
                                    <h2 className="text-xl font-bold">Nhập mật khẩu</h2>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-xl font-bold">Xin chào,</h2>
                                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                                </div>
                            )}

                            <Form className="login-form" form={form}>
                                <Form.Item
                                    name="password"
                                    initialValue=""
                                    style={{
                                        display:
                                            authState.enteredPhone && !authState.forgetPassword
                                                ? 'block'
                                                : 'none',
                                    }}
                                    rules={[
                                        {
                                            validator: (_, password) => {
                                                if (!password || password.trim() === '') {
                                                    return Promise.reject(
                                                        new Error('Mật khẩu không được để trống')
                                                    );
                                                }

                                                return Promise.resolve();
                                            },
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        placeholder="Mật khẩu"
                                        className="login-form__input-phone"
                                        iconRender={(visible) =>
                                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                                        }
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    initialValue=""
                                    style={{
                                        display: !authState.enteredPhone ? 'block' : 'none',
                                    }}
                                    rules={[
                                        {
                                            validator: (_, phone) => {
                                                if (!phone || phone.trim() === '') {
                                                    return Promise.reject(
                                                        new Error(
                                                            'Số điện thoại không được để trống'
                                                        )
                                                    );
                                                }

                                                if (!phoneValidator(phone)) {
                                                    return Promise.reject(
                                                        new Error(
                                                            'Số điện thoại không đúng định dang (VD: +84 123 456 789)'
                                                        )
                                                    );
                                                }

                                                return Promise.resolve();
                                            },
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Số điện thoại"
                                        className="login-form__input-phone"
                                    />
                                </Form.Item>

                                <button className="text-blue-400" onClick={forgetPassword}>
                                    Quên mật khẩu?
                                </button>

                                <Button
                                    className="w-full login-form__btn-submit"
                                    htmlType="button"
                                    onClick={submitButtonClickHandler}
                                    loading={isLoading}
                                >
                                    {submitButtonContent}
                                </Button>
                            </Form>
                        </div>
                    )}
                    {authState.forgetPassword && (
                        <div>
                            {!authState.enteredPhone ? (
                                <div>
                                    <h2 className="text-xl font-bold">Quên mật khẩu</h2>
                                    <p>Nhập số điện thoại đăng ký</p>
                                    <Form className="login-form" form={form}>
                                        <Form.Item
                                            name="phone"
                                            initialValue=""
                                            rules={[
                                                {
                                                    validator: (_, phone) => {
                                                        if (!phone || phone.trim() === '') {
                                                            return Promise.reject(
                                                                new Error(
                                                                    'Số điện thoại không được để trống'
                                                                )
                                                            );
                                                        }

                                                        if (!phoneValidator(phone)) {
                                                            return Promise.reject(
                                                                new Error(
                                                                    'Số điện thoại không đúng định dang (VD: +84 123 456 789)'
                                                                )
                                                            );
                                                        }

                                                        return Promise.resolve();
                                                    },
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Số điện thoại"
                                                className="login-form__input-phone"
                                            />
                                        </Form.Item>

                                        <Button
                                            className="w-full login-form__btn-submit"
                                            htmlType="button"
                                            onClick={submitButtonClickHandler}
                                            loading={isLoading}
                                        >
                                            {submitButtonContent}
                                        </Button>
                                    </Form>
                                </div>
                            ) : (
                                <div className="my-10">
                                    <p className="text-green-500 text-center">
                                        Mật khẩu mới đã được gửi vào số điện thoại. Vui lòng kiểm
                                        tra số điện thoại để lấy mật khẩu.
                                    </p>
                                    <Button className="w-full" onClick={closeLoginModal}>
                                        Đóng
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </Col>
                <Col span={8} className="login-form__right">
                    <img src={LoginImage} width="203"></img>
                    <div className="content">
                        <h4>Mua sắm tại Tiki</h4>
                        <p>Siêu ưu đãi mỗi ngày</p>
                    </div>
                </Col>
            </Row>
        </Modal>
    );
}

export default Login;
