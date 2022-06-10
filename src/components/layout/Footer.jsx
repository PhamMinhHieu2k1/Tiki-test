import { Col, Divider, Row } from "antd";

function Footer() {
    return (
        <footer className="px-10 py-4">
            <Row justify="space-between">
                <Col span={8}>
                    <h3 className="text-lg font-semibold">Hỗ trợ khách hàng</h3>
                    <p>Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)</p>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/"
                        target="_blank"
                    >
                        Các câu hỏi thường gặp
                    </a>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://tiki.vn/lien-he/gui-yeu-cau"
                        target="_blank"
                    >
                        Gửi yêu cầu hỗ trợ
                    </a>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki"
                        target="_blank"
                    >
                        Hướng dẫn đặt hàng
                    </a>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tiet-kiem"
                        target="_blank"
                    >
                        Phương thức vận chuyển
                    </a>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham-tai-tiki-nhu-the-nao"
                        target="_blank"
                    >
                        Chính sách đổi trả
                    </a>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop"
                        target="_blank"
                    >
                        Hướng dẫn trả góp
                    </a>
                    <a
                        className="block mb-2 text-gray-400"
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai"
                        target="_blank"
                    >
                        Chính sách hàng nhập khẩu
                    </a>
                    <p className="mb-2 text-gray-400">
                        Hỗ trợ khách hàng: <a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
                    </p>
                    <p className="m-0 text-gray-400">
                        Báo lỗi bảo mật: <a href="mailto:security@tiki.vn">security@tiki.vn</a>
                    </p>
                </Col>
                <Col span={8}>
                    <h4 className="text-lg font-semibold">Về Tiki</h4>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/thong-tin/gioi-thieu-ve-tiki"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Giới thiệu Tiki
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://tuyendung.tiki.vn/"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Tuyển dụng
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/bao-mat-thanh-toan"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Chính sách bảo mật thanh toán
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/bao-mat-thong-tin-ca-nhan"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Chính sách bảo mật thông tin cá nhân
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Chính sách giải quyết khiếu nại
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Điều khoản sử dụng
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://hotro.tiki.vn/s/article/tiki-xu-la-gi"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Giới thiệu Tiki Xu
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/khuyen-mai/tiki-tiep-thi-lien-ket"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Tiếp thị liên kết cùng Tiki
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/chuong-trinh/ban-hang-doanh-nghiep"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Bán hàng doanh nghiệp
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://www.tikinow.biz/%C4%91i%E1%BB%81u-kho%E1%BA%A3n-v%E1%BA%ADn-chuy%E1%BB%83n"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Điều kiện vận chuyển
                    </a>
                </Col>
                <Col span={8}>
                    <h4 className="text-lg font-semibold">Hợp tác và liên kết</h4>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Quy chế hoạt động Sàn GDTMĐT
                    </a>
                    <a
                        rel="noreferrer"
                        href="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki"
                        className="block mb-2 text-gray-400"
                        target="_blank"
                    >
                        Bán hàng cùng Tiki
                    </a>
                    <h4 className="text-lg font-semibold mt-10">Chứng nhận bởi</h4>
                    <div className="flex">
                        <a
                            href="https://hotro.tiki.vn/s/"
                            rel="noreferrer"
                            aria-label=""
                            target="_blank"
                            className="h-8"
                        >
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
                                width="32"
                                height="32"
                                alt=""
                            />
                        </a>
                        <a
                            href="http://online.gov.vn/Home/WebDetails/21193"
                            rel="noreferrer"
                            aria-label=""
                            target="_blank"
                            className="h-8"
                        >
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
                                height="32"
                                width="83"
                                alt=""
                            />
                        </a>
                    </div>
                </Col>
            </Row>
            <Divider />
            <div>
                <p className="block mb-2 text-gray-400">
                    Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận
                    10, Thành phố Hồ Chí Minh
                </p>
                <p className="block mb-2 text-gray-400">
                    Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng
                    trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
                </p>
                <p className="block mb-2 text-gray-400">
                    Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành
                    phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày
                    14/02/2022
                </p>
                <p className="block m-0 text-gray-400">© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
            </div>
        </footer>
    );
}

export default Footer;
