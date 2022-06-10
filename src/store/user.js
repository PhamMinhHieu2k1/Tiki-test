import { createSlice } from '@reduxjs/toolkit';
import _cloneDeep from 'lodash/cloneDeep';
import auth from '../api/auth';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const DONE = 'DONE';

const userInitialState = {
    auth: null,
    username: '',
    status: '',
    avatar: '',
    birthday: '',
    gender: '',
    country: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState: _cloneDeep(userInitialState),
    reducers: {
        login(state, userData) {
            state.auth = userData.payload;
            state.username = 'hoangzzzsss';
            state.avatar = 'https://salt.tikicdn.com/desktop/img/avatar.png';
            state.birthday = '24/01/2001';
            state.gender = 'male';
            state.country = 'Việt Nam';
            state.phone = '0123456789';
            state.email = 'a@a.a';
            localStorage.setItem('user', JSON.stringify({ ...state }));
        },

        logOut() {
            localStorage.removeItem('user');
            return _cloneDeep(userInitialState);
        },

        setStatus(state, actions) {
            state.status = actions.payload;
        },
    },
});

export const signIn = (form) => {
    return async (dispatch) => {
        try {
            dispatch(userSlice.actions.setStatus(LOADING));
            const authData = await auth.signIn(form);
            dispatch(userSlice.actions.login(authData));
            dispatch(userSlice.actions.setStatus(DONE));
        } catch (error) {
            console.log(error);
            dispatch(userSlice.actions.setStatus(ERROR));
        }
    };
};

export const autoLogin = () => {
    return async (dispatch) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            return;
        } else {
            dispatch(userSlice.actions.login(userData.auth));
        }
    };
};

export default userSlice;
export const userActions = userSlice.actions;
