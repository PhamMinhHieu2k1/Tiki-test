import { Row, Col, Carousel, message } from "antd";
import { Link } from "react-router-dom";

function Banner() {
    function subBannerClickHandler() {
        message.info("Sự kiện đã kết thúc, chúng tôi sẽ sớm xóa nó đi");
    }
    return (
        <Row gutter={8}>
            <Col span={18}>
                <Carousel autoplay>
                    <div>
                        <Link to="/" className="inline-block w-full h-60">
                            <img
                                className="h-full w-full object-cover"
                                src="https://salt.tikicdn.com/cache/w1080/ts/banner/27/5c/fc/3a57cce2f8449eb79b50f20b4d71b663.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="inline-block w-full h-60">
                            <img
                                className="h-full w-full object-cover"
                                src="https://salt.tikicdn.com/cache/w1080/ts/banner/27/5c/fc/3a57cce2f8449eb79b50f20b4d71b663.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="inline-block w-full h-60">
                            <img
                                className="h-full w-full object-cover"
                                src="https://salt.tikicdn.com/cache/w1080/ts/banner/27/5c/fc/3a57cce2f8449eb79b50f20b4d71b663.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="inline-block w-full h-60">
                            <img
                                className="h-full w-full object-cover"
                                src="https://salt.tikicdn.com/cache/w1080/ts/banner/27/5c/fc/3a57cce2f8449eb79b50f20b4d71b663.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="inline-block w-full h-60">
                            <img
                                className="h-full w-full object-cover"
                                src="https://salt.tikicdn.com/cache/w1080/ts/banner/27/5c/fc/3a57cce2f8449eb79b50f20b4d71b663.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="inline-block w-full h-60">
                            <img
                                className="h-full w-full object-cover"
                                src="https://salt.tikicdn.com/cache/w1080/ts/banner/27/5c/fc/3a57cce2f8449eb79b50f20b4d71b663.png"
                                alt=""
                            />
                        </Link>
                    </div>
                </Carousel>
            </Col>
            <Col span={6}>
                <button to="/" className="inline-block w-full h-60" onClick={subBannerClickHandler}>
                    <img
                        className="h-full w-full object-cover"
                        src="https://salt.tikicdn.com/cache/w400/ts/banner/ba/e0/e7/e37cc2bac8a0bbf26d554c77bfb85a6a.png.webp"
                        alt=""
                    />
                </button>
            </Col>
        </Row>
    );
}

export default Banner;
