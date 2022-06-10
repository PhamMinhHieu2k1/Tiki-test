import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import BaseCard from "../components/shared/Card";

function ChangePassword() {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    function submitNewPassword() {
        setIsLoading(true);
        form.validateFields()
            .then(() => {
                return new Promise((res) => {
                    setTimeout(() => res(), 3000);
                });
            })
            .then(() => {
                message.success("Cập nhật mật khẩu thành công");
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    }
    return (
        <div>
            <h2 className="text-2xl">Thiết lập mật khẩu</h2>
            <BaseCard>
                <Form
                    className=""
                    form={form}
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    labelAlign="left"
                    initialValues={{
                        password: "",
                        "confirm-password": "",
                    }}
                >
                    <Form.Item
                        name="password"
                        label="Mật khẩu mới"
                        rules={[
                            {
                                validator: (_, password) => {
                                    if (!password || password.trim() === "") {
                                        return Promise.reject(
                                            new Error("Mật khẩu không được để trống")
                                        );
                                    }

                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Mật khẩu mới"
                            className=""
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm-password"
                        label="Nhập lại mật khẩu mới"
                        rules={[
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || value.trim() === "") {
                                        return Promise.reject(
                                            new Error("Mật khẩu không được để trống")
                                        );
                                    }

                                    if (getFieldValue("password") !== value) {
                                        return Promise.reject(new Error("Nhập lại mật khẩu mới!"));
                                    }

                                    return Promise.resolve();
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder="Nhập lại mật khẩu mới"
                            className=""
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        loading={isLoading}
                        onClick={submitNewPassword}
                        disabled={isLoading}
                    >
                        Lưu thay đổi
                    </Button>
                </Form>
            </BaseCard>
        </div>
    );
}

export default ChangePassword;
