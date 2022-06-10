import axios from 'axios';

export default {
    signIn: (form) =>
        axios.post('https://jsonplaceholder.typicode.com/posts', form).then((_) => _.data),
};
