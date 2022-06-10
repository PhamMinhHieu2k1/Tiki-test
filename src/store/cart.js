import { createSlice } from '@reduxjs/toolkit';
import _cloneDeep from 'lodash/cloneDeep';

function saveCart(cartInfo) {
    localStorage.setItem('cart', JSON.stringify(cartInfo));
}

function getCartInfo() {
    return JSON.parse(localStorage.getItem('cart'));
}

function removeCartInfor() {
    localStorage.removeItem('cart');
}

const initialState = {
    shipFee: 20_000,
    discount: 0,
    cartItems: [],
    totalPrice: 0,
    totalAmount: 0,
    customerName: '',
    deliveryAddress: '',
    paymentMethod: '',
    customerPhone: '',
    note: '',
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: _cloneDeep(getCartInfo() || initialState),
    reducers: {
        reset() {
            removeCartInfor();
            return _cloneDeep(initialState);
        },

        addItemToCart(state, action) {
            const { product, quantity } = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.amount += quantity;
                existingItem.totalPrice = Number(
                    (existingItem.totalPrice + quantity * product.price).toFixed(2)
                );
            } else {
                state.cartItems.push({
                    ...product,
                    amount: quantity,
                    totalPrice: Number((product.price * quantity).toFixed(2)),
                });
            }

            state.totalAmount += quantity;
            state.totalPrice = Number((state.totalPrice + product.price * quantity).toFixed(2));

            saveCart(state);
        },

        updateItem(state, action) {
            const { itemID, amount } = action.payload;
            const itemIndex = state.cartItems.findIndex((item) => item.id === itemID);
            state.cartItems[itemIndex].amount = amount;
            state.cartItems[itemIndex].totalPrice = Number(
                (state.cartItems[itemIndex].price * amount).toFixed(2)
            );
            state.totalAmount = state.cartItems.reduce(
                (totalAmount, item) => totalAmount + item.amount,
                0
            );
            state.totalPrice = Number(
                state.cartItems
                    .reduce((totalPrice, item) => totalPrice + item.amount * item.price, 0)
                    .toFixed(2)
            );

            saveCart(state);
        },

        removeItem(state, action) {
            const { itemID } = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
            state.totalAmount = state.cartItems.reduce(
                (totalAmount, item) => totalAmount + item.amount,
                0
            );
            state.totalPrice = Number(
                state.cartItems
                    .reduce((totalPrice, item) => totalPrice + item.amount * item.price, 0)
                    .toFixed(2)
            );

            saveCart(state);
        },

        updateUserInfo(state, action) {
            const { name, value } = action.payload;
            state[name] = value;
        },
    },
});

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;
