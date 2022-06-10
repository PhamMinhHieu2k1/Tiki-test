import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Form, Input, DatePicker, Radio, Button, Modal, Upload } from "antd";
import { useSelector } from "react-redux";
import gender from "../constants/gender";
import moment from "moment";

import BaseCard from "../components/shared/Card";
import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import phoneValidator from "../utils/phoneValidator";

function Account() {
    const initAvatar = useSelector((store) => store.user.avatar);
    const initUsername = useSelector((store) => store.user.username);
    const initUserNickname = useSelector((store) => store.user.nickname);
    const initBirthday = moment(
        useSelector((store) => store.user.birthday),
        "DD/MM/YYYY"
    );
    const initGender = useSelector((store) => store.user.gender);
    const initCountry = useSelector((store) => store.user.country);
    const initPhone = useSelector((store) => store.user.phone);
    const initEmail = useSelector((store) => store.user.email);
    const [form] = Form.useForm();
    const [showModal, setShowModal] = useState(false);
    const [avatarURL, setAvatarURL] = useState(initAvatar);
    const [avatar, setAvatar] = useState([]);

    function openAvatarModal() {
        setShowModal(true);
    }

    function closeAvatarModal() {
        setShowModal(false);
    }

    function uploadImageHandler({ file, onSuccess }) {
        const fileBlob = new Blob([file]);
        const url = URL.createObjectURL(fileBlob);
        setAvatarURL(url);
        setAvatar([file]);
        onSuccess(url);
        closeAvatarModal();
    }

    function updateInfo() {
        console.log(avatar);
        console.log(form.getFieldsValue(true));
    }

    return (
        <div>
            <h2 className="text-2xl">Thông tin tài khoản</h2>
            <Form
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                colon={false}
                labelAlign="left"
                initialValues={{
                    fullname: initUsername,
                    nickname: initUserNickname,
                    birthday: initBirthday,
                    gender: initGender,
                    country: initCountry,
                    phone: initPhone,
                    email: initEmail,
                }}
            >
                <BaseCard>
                    <div className="flex justify-between">
                        <div className="w-7/12">
                            <h4 className="text-lg font-normal">Thông tin cá nhân</h4>
                            <div className="flex items-center mb-4">
                                <button
                                    className="w-28 h-28 bg-blue-200 border-2 border-current text-blue-500 flex justify-center items-center rounded-full mr-5 overflow-hidden"
                                    onClick={openAvatarModal}
                                >
                                    {avatarURL !== "" ? (
                                        <img
                                            src={avatarURL}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    ) : (
                                        <FontAwesomeIcon icon={["far", "user"]} size="3x" />
                                    )}
                                </button>
                                <div className="flex-auto">
                                    <Form.Item
                                        name="fullname"
                                        label="Họ &amp; Tên"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Vui lòng nhập họ tên",
                                                validateTrigger: "onChange",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Thêm họ tên" />
                                    </Form.Item>
                                    <Form.Item name="nickname" label="Nickname" className="!m-0">
                                        <Input placeholder="Thêm nickname" />
                                    </Form.Item>
                                </div>
                            </div>
                            <Form.Item name="birthday" label="Ngày sinh">
                                <DatePicker format="DD/MM/YYYY" className="!w-full" />
                            </Form.Item>
                            <Form.Item name="gender" label="Giới tính">
                                <Radio.Group>
                                    {Object.entries(gender).map(([gen, label]) => (
                                        <Radio key={gen} value={gen}>
                                            {label}
                                        </Radio>
                                    ))}
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item name="country" label="Quốc tịch">
                                <Input placeholder="Thêm quốc tịch" />
                            </Form.Item>
                        </div>
                        <Divider type="vertical" className="!h-auto !border-l-gray-200" />
                        <div className="w-4/12">
                            <h4 className="text-lg font-normal">Số điện thoại và Email</h4>
                            <div className="flex justify-start">
                                <div className="text-lg mr-4 pt-1">
                                    <FontAwesomeIcon icon={["fas", "phone"]} />
                                </div>
                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone"
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập số điện thoại",
                                            validateTrigger: "onChange",
                                        },
                                        {
                                            validator: (_, phone) => {
                                                if (phone === "") {
                                                    return Promise.resolve();
                                                }

                                                if (phone.trim() === "") {
                                                    return Promise.reject(
                                                        new Error(
                                                            "Số điện thoại không được để trống"
                                                        )
                                                    );
                                                }

                                                if (!phoneValidator(phone)) {
                                                    return Promise.reject(
                                                        new Error(
                                                            "Số điện thoại không đúng định dang (VD: +84 123 456 789)"
                                                        )
                                                    );
                                                }

                                                return Promise.resolve();
                                            },
                                        },
                                    ]}
                                >
                                    <Input placeholder="Nhập số điện thoại" />
                                </Form.Item>
                            </div>
                            <div className="flex justify-start">
                                <div className="text-lg mr-4 pt-1">
                                    <FontAwesomeIcon icon={["far", "envelope"]} />
                                </div>
                                <Form.Item
                                    label="Địa chỉ email"
                                    name="email"
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                >
                                    <Input placeholder="Thêm đia chỉ email" />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <Modal
                        visible={showModal}
                        title={null}
                        footer={null}
                        onCancel={closeAvatarModal}
                        closable={false}
                        wrapClassName="rounded-lg"
                    >
                        <h2 className="text-2xl">Cập nhật ảnh đại diện</h2>
                        <Divider />
                        <div>
                            <Form.Item name="avatar" noStyle>
                                <Upload.Dragger
                                    customRequest={uploadImageHandler}
                                    showUploadList={false}
                                    fileList={avatar}
                                >
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">
                                        Nhấn để chọn hoặc kéo thả hình ảnh vào khung này
                                    </p>
                                </Upload.Dragger>
                            </Form.Item>
                        </div>
                    </Modal>
                    <Button
                        className="!block mx-auto my-5 !h-auto"
                        type="primary"
                        onClick={updateInfo}
                    >
                        Cập nhật thay đổi
                    </Button>
                </BaseCard>
            </Form>
        </div>
    );
}

export default Account;
