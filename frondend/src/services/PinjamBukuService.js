import axios from "axios";
import{config} from "../config/config"

const PinjamBukuService= {
    getAllPinjamBuku: ()=>{

        const result = axios
        .get(config.apiurl+'api/PinjamBuku')
        .then ((Response) =>{
            return {
                success: Response.data.success,
                data: Response.data.data,
            }
        })
        .catch ((error) => {
            return {
                success: false,
                data: error,
            }
        })

        return result;
    },

    addDataPinjamBuku: (data) =>{
        const result = axios
            .post(config.apiurl + "api/addPinjamBuku",data)
            .then((response)=>{
                return {
                success: response.data.success,
                data: response.data.data,
            }
            })
            .catch((error)=>{
                return {
                    success:false,
                    data:error
                }
            })
        return result;
    },

    getPinjamBukuById:(id)=>{
        const result = axios.get(config.apiurl+`api/PinjamBuku/${id}`)
        .then((response)=>{
            return{
                success:response.data.success,
                data: response.data.data,
            }
        })
        .catch((error)=>{
            return{
                success:false,
                error: error,
            }
        })
        return result;
    },

    editDataPinjamBuku:(data) =>{
        const result = axios
        .put(config.apiurl+`api/updatePinjamBuku/${data.id}`,data)
        .then ((response)=>{
            return{
                success:response.data.success,
                data:response.data.data,
            }
        })
        .catch((error)=>{
            return{
                success:false,
                data:error,
            }
        })
        return result;
    },
    deleteDataPinjamBuku:(id)=>{
        const result = axios
        .put(config.apiurl+`api/deletePinjamBuku/${id}`)
        .then ((response)=>{
            return{
                success:response.data.success,
                data:response.data.data,
            }
        })
        .catch((error)=>{
            return{
                success:false,
                data:error,
            }
        })
        return result
    }
}

export default PinjamBukuService;