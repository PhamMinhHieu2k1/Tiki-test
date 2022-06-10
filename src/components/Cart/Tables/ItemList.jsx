import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputNumber, Table } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ItemList.scss';

function ItemList({ onUpdateItem, onRemoveItem }) {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const items = useMemo(
        () => cartItems.map((item) => ({ ...item, key: item.id })),
        [cartItems.length]
    );

    function updateItemAmount(itemID, amount) {
        if (amount === 0) {
            removeCartItem(itemID);
            return;
        }
        onUpdateItem({ itemID, amount });
    }

    function removeCartItem(itemID) {
        onRemoveItem(itemID);
    }

    return (
        <Table
            rowClassName="w-full"
            dataSource={items}
            pagination={{ style: { display: 'none' } }}
            onHeaderRow={() => ({
                className: 'item-list__table-header-row',
            })}
            columns={[
                {
                    title: 'Sản phẩm',
                    key: 'item',
                    render: (_, item) => {
                        return (
                            <Link
                                to={`/san-pham/${item.id}`}
                                className="flex items-center"
                                style={{
                                    minWidth: '300px',
                                }}
                            >
                                <img src={item.img} alt="" className="w-20 h-20 object-cover" />
                                <p className="m-0 ml-4 text-black item-list__item-name hover:text-blue-500">
                                    {item.name}
                                </p>
                            </Link>
                        );
                    },
                },
                {
                    title: 'Đơn giá',
                    key: 'price',
                    dataIndex: 'price',
                    render: (price) => <strong>{price.toLocaleString()} VNĐ</strong>,
                    width: 150,
                },
                {
                    title: 'Số lượng',
                    key: 'amount',
                    dataIndex: 'amount',
                    width: 120,
                    render: (amount, item) => (
                        <InputNumber
                            value={amount}
                            controls={false}
                            className="item-list__amount"
                            addonBefore={
                                <button
                                    className="block w-full"
                                    onClick={() => {
                                        updateItemAmount(item.id, amount - 1);
                                    }}
                                >
                                    -
                                </button>
                            }
                            addonAfter={
                                <button
                                    className="block w-full"
                                    onClick={() => {
                                        updateItemAmount(item.id, amount + 1);
                                    }}
                                >
                                    +
                                </button>
                            }
                            onChange={(value) => updateItemAmount(item.id, value)}
                        />
                    ),
                },
                {
                    title: 'Thành tiền',
                    key: 'totalPrice',
                    dataIndex: 'totalPrice',
                    width: 200,
                    render: (total) => (
                        <strong className="text-red-500">{total.toLocaleString()} VNĐ</strong>
                    ),
                },
                {
                    key: 'action',
                    width: 50,
                    render: (_, item) => (
                        <button
                            onClick={() => {
                                removeCartItem(item.id);
                            }}
                        >
                            <FontAwesomeIcon icon={['fas', 'trash']} />
                        </button>
                    ),
                },
            ]}
        ></Table>
    );
}

ItemList.propTypes = {
    onUpdateItem: PropTypes.func,
    onRemoveItem: PropTypes.func,
};

export default ItemList;
