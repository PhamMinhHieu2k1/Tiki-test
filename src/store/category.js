import { createSlice } from '@reduxjs/toolkit';

const categories = [
    {
        id: 0,
        name: 'NGON',
        img: 'https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png',
    },
    {
        id: 1,
        name: 'Giày thể thao nam',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/ab/f6/da/84622c4610e7d2fd8f70851ab7c948be.jpg',
    },
    {
        id: 2,
        name: 'Balo',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/15/c6/6d/4387e015b20cefd0111a6a34f7e285e8.jpg',
    },
    {
        id: 3,
        name: 'Giày chạy bộ nam',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/09/76/b9/8e1d826ad19dad2d41f1ad44fc0f8b3c.jpg',
    },
    {
        id: 4,
        name: 'Găng tay nam',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/38/76/b2/0f2065ba5fd51ac2cfc32112e0fd0f38.jpg',
    },
    {
        id: 5,
        name: 'Sách tư duy - Kỹ năng sống',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/e4/a3/52/4845a31ebb7c0b75766ef9272506f236.jpg',
    },
    {
        id: 6,
        name: 'Điện thoại Smartphone',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/a5/95/f6/3ef75834b43dc4608e72f67e526f6070.jpg',
    },
    {
        id: 7,
        name: 'Truyện Tranh, Manga, Comic',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/f6/31/92/989371cd53ac84a1baa221c7932b6b6e.png',
    },
    {
        id: 8,
        name: 'Truyện ngắn - Tản văn - Tạp Văn',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg',
    },
    {
        id: 9,
        name: 'Tiểu Thuyết',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg',
    },
    {
        id: 10,
        name: 'Bàn ghế làm việc',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/2f/1b/0b/d371a87715a93fdbb877c62f9ee08741.jpg',
    },
    {
        id: 11,
        name: 'Tác phẩm kinh điển',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg',
    },
    {
        id: 12,
        name: 'Tủ',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/c0/3b/68/d1a7cd903d0bbdfa40e4344225ce39d2.jpg',
    },
    {
        id: 13,
        name: 'Phụ kiện nhà bếp khác',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/34/90/d2/95675c22554f8fb0c017892dd5a3c44a.jpg',
    },
    {
        id: 14,
        name: 'Xe tay ga',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/d2/0a/4e/ca47a5d9e80df793c222fd84d474866f.jpg',
    },
    {
        id: 15,
        name: 'Khác',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/4e/18/1e/aa90c76a8066d751b77deb17422ba1e0.jpg',
    },
    {
        id: 16,
        name: 'Sách Học Tiếng Anh',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/e1/04/31/7763d9035552760f627c34acfec0e12f.jpg',
    },
    {
        id: 17,
        name: 'Kem và sữa dưỡng da',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/66/91/61/9eae79155cf9ffe2fabaeee1e35cd411.png',
    },
    {
        id: 18,
        name: 'Đồng Hồ Thông Minh',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/d6/fb/d6/4ae554767ec36fd1468fc1c2879ac604.jpg',
    },
    {
        id: 19,
        name: 'Khẩu trang y tế',
        img: 'https://salt.tikicdn.com/cache/w100/ts/product/cc/ea/a4/6858c731526834013c23d3fb5ea7a78c.jpg',
    },
];

const userSlice = createSlice({
    name: 'user',
    initialState: categories,
    reducers: {},
});

export default userSlice;
export const userActions = userSlice.actions;
