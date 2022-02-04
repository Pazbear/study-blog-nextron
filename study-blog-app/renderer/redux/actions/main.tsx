import axios from 'axios';
import * as t from '../types';

export const login = (values) =>async (dispatch : any) => {
    console.log("login");
    const response = await axios.post('/api/user/login',values)
    dispatch({
        type:t.LOGIN,
        payload:response
    })
}