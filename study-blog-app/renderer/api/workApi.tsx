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

export const uploadWork = async (work : any) => {
    try{
      const response = await axios.post('/api/work/upload', work)
      if (response.data.success) {
        console.log("업로드 성공")
        return true
      }
      return false
    } catch (error) {
      console.log(error.response)
      return false
    }
}

export const getWorksByMe = async () =>{
    try{
        const response = await axios.get('/api/work/get-works')
        return response.data
    }catch(error){
        console.log(error.response)
        return {success:false}
    }
}

export const getWorksByUser = async (userId : number) => {
    try{
        const response = await axios.post('/api/work')
    }catch(error){
        console.log(error.response)
        return {success:false}
    }
}