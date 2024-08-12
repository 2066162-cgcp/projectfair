import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


export const registerApi= async (requestBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,requestBody,"")
}