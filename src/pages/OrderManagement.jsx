import BaseCard from "../components/shared/Card";
import EmptyOrder from "../assets/img/empty-order.png";
import orderState, { STATE } from "../constants/orderState";
import { Tabs } from "antd";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPlaceholder from "../components/shared/LoadingPlaceholder";
import { orders as orderList } from "../constants/fake-data";
import OrderList from "../components/OrderManagement/Tables/OrderList";

const QUERY_KEY = "state";

function OrderManagement() {
    const [queryParams, setQueryParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const currentTab = queryParams.get(QUERY_KEY) || STATE.ALL;
    const [orders, setOrders] = useState([]);

    function switchTabHandler(tab) {
        switch (tab) {
            case STATE.ALL:
                queryParams.delete(QUERY_KEY);
                setQueryParams(queryParams);
                break;
            case STATE.PROCESSING:
                queryParams.set(QUERY_KEY, STATE.PROCESSING);
                setQueryParams(queryParams);
                break;
            case STATE.DELIVERYING:
                queryParams.set(QUERY_KEY, STATE.DELIVERYING);
                setQueryParams(queryParams);
                break;
            case STATE.COMPLETE:
                queryParams.set(QUERY_KEY, STATE.COMPLETE);
                setQueryParams(queryParams);
                break;
            case STATE.CANCEL:
                queryParams.set(QUERY_KEY, STATE.CANCEL);
                setQueryParams(queryParams);
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setOrders(
                orderList.filter((order) => {
                    if (currentTab === STATE.ALL) {
                        return true;
                    }

                    return order.state === currentTab;
                })
            );
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentTab]);

    return (
        <div>
            <h2 className="text-2xl">Đơn hàng của tôi</h2>

            <Tabs onChange={switchTabHandler}>
                {Object.entries(orderState).map(([state, label]) => (
                    <Tabs.TabPane key={state} tab={label}></Tabs.TabPane>
                ))}
            </Tabs>
            <LoadingPlaceholder isLoading={isLoading}>
                <BaseCard>
                    {orders.length === 0 ? (
                        <div
                            className="flex justify-center items-center"
                            style={{ minHeight: "500px" }}
                        >
                            <div>
                                <img src={EmptyOrder} className="w-52 h-52" />
                                <p className="text-center text-xl text-gray-400 my-4">
                                    Chưa có đơn hàng nào
                                </p>
                            </div>
                        </div>
                    ) : (
                        <OrderList orders={orders} />
                    )}
                </BaseCard>
            </LoadingPlaceholder>
        </div>
    );
}

export default OrderManagement;
