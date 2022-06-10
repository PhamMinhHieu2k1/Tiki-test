import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BaseCard from "../../shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FlashDeal.scss";
import { Divider } from "antd";

function FlashDeal({ dealItems }) {
    const [countdown, setCountdown] = useState(2 * 60 * 60 * 1000);
    const hour = Math.floor(countdown / 3_600_000);
    const minute = Math.floor(countdown / 1000 / 60) % 60;
    const second = Math.floor(countdown / 1000) % 60;

    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown === 0) {
                clearInterval(interval);
                return;
            }
            setCountdown((time) => time - 1000);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <BaseCard>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold italic text-orange-500 m-0">
                    <span>Giá Sốc</span>
                    <span className="inline-block text-yellow-500 mx-2 blink">
                        <FontAwesomeIcon icon={["fas", "bolt"]} />
                    </span>
                    <span>Hôm Nay</span>
                </p>
                <div className="text-inherit">
                    <span className="text-white bg-red-500 p-1  rounded">
                        {hour < 10 ? "0" + hour : hour}
                    </span>
                    <span className="mx-2 font-bold text-lg leading-none">:</span>
                    <span className="text-white bg-red-500 p-1  rounded">
                        {minute < 10 ? "0" + minute : minute}
                    </span>
                    <span className="mx-2 font-bold text-lg leading-none">:</span>
                    <span className="text-white bg-red-500 p-1  rounded">
                        {second < 10 ? "0" + second : second}
                    </span>
                </div>
            </div>
            <Divider />
            <ul className="flex justify-between">
                {dealItems.map((item) => {
                    const formatedPrice = new Intl.NumberFormat("vi").format(item.price);
                    const soldRatio = (item.sold / item.amount) * 100;
                    const soldContent = soldRatio >= 80 ? "Sắp bán hết" : `Đã bán ${item.sold}`;

                    return (
                        <li key={item.id} className="w-1/6 px-5">
                            <Link className="inline-block" to={`/san-pham/${item.id}`}>
                                <img src={item.img} alt={item.name} />
                                <div>
                                    <span className="text-red-500 my-2 inline-block">
                                        <span className="text-base font-bold">{formatedPrice}</span>{" "}
                                        <span className="mr-2 underline text-base font-bold">
                                            đ
                                        </span>
                                        <span className="border border-current rounded-sm p-[1px]">
                                            {item.sale}%
                                        </span>
                                    </span>
                                    <div className="h-4 bg-red-400 relative rounded-full">
                                        <div
                                            className="h-4 absolute top-0 left-0 rounded-full bg-red-500 inline-block"
                                            style={{
                                                width: `${soldRatio}%`,
                                            }}
                                        ></div>
                                        <div className="h-4 w-full text-center absolute top-0 left-0inline-block text-xs text-white">
                                            {soldContent}
                                        </div>
                                        {soldRatio >= 80 && (
                                            <span className="absolute bottom-0 left-2 text-yellow-400 text-xl leading-none">
                                                <FontAwesomeIcon icon={["fas", "fire"]} />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </BaseCard>
    );
}
export default FlashDeal;
