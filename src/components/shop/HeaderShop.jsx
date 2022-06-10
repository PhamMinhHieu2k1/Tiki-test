import { SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'antd';
import coverImgPath from '../../assets/img/shop-cover-img.png';

function HeaderShop({ shopInfo }) {
    return (
        <div
            className="h-36 w-full bg-no-repeat bg-center bg-cover p-6 mb-6"
            style={{
                backgroundImage: `url(${coverImgPath})`,
            }}
        >
            <div className="flex items-center">
                <img src={shopInfo.avatar} alt="" className="h-16 w-16 object-cover rounded-full" />
                <div className="flex items-center">
                    <div className="px-5 border-r border-r-gray-400 mr-5">
                        <h4 className="text-lg font-semibold text-white mb-1">{shopInfo.name}</h4>
                        <p className="m-0 text-gray-300">
                            <FontAwesomeIcon icon={['fas', 'heart']} /> Người theo dõi:{' '}
                            {shopInfo.total_follower}
                        </p>
                    </div>
                    <Button type="primary">
                        <FontAwesomeIcon icon={['fas', 'plus']} className="mr-2" /> Theo dõi
                    </Button>
                </div>
            </div>
            <div className="ml-auto w-96">
                <Input placeholder="Tìm sản phẩm trong cửa hàng này" prefix={<SearchOutlined />} />
            </div>
        </div>
    );
}

export default HeaderShop;
