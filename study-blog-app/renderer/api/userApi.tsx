import axios from 'axios';

export const login = async ({userId, password}) => {
    try {
        const response = await axios.post('/api/user/login', {userId, password});
        console.log(response.data);
    }catch(error){
        console.log(error);
    }
}

export const auth = async () => {
    try{
        const response = await axios.get('/api/get-session');
        return response.data.user;
    }catch(error){
        console.log(error)
        throw error;
    }
}

export const logout = async () => {
    try{
        await axios.post('/api/user/logout');
    }catch(error){
        console.log(error)
    }
}