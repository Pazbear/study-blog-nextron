import axios from 'axios'

export const getMyBuddies = async () => {
    try{
        const response = await axios.get('/api/buddy/get-my-buddies')
        return response.data
    }catch(error){
        console.log(error)
        return {success:false}
    }
}