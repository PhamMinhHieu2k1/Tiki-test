import { Divider } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BaseCard from '../shared/Card';

function DeliveryAddress() {
    const customerName = useSelector((store) => store.cart.customerName);
    const deliveryAddress = useSelector((store) => store.cart.deliveryAddress);
    const customerPhone = useSelector((store) => store.cart.customerPhone);
    return (
        <BaseCard
            style={{
                fontSize: '13px',
            }}
        >
            <div className="flex justify-between items-center">
                <p className="m-0">Địa chỉ giao hàng</p>
                <Link
                    className="px-4 py-2 border border-gray-400 rounded text-black"
                    to="/gio-hang/dia-chi-thanh-toan"
                >
                    Sửa
                </Link>
            </div>
            <Divider className="!my-4 !border-t-gray-400" />
            <h4 className="text-base font-bold">{customerName}</h4>
            <p className="m-0">{deliveryAddress}</p>
            <p>Điện thoại: {customerPhone}</p>
        </BaseCard>
    );
}

export default DeliveryAddress;
