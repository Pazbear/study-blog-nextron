import axios from 'axios';


export const uploadImage = async (image : FormData) => {
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    
    try {
        const response = await axios.post('/api/work/upload-image', image, config)

        console.log(response.data);
        return response.data.result;
    }catch(error){
        console.error(error);
    }
}
