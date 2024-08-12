import axios from "axios"

export const commonApi = async(httpRequest, url, requestBody, reqHeader) =>{//reqHeader=> uploaded content only applicable when we send header from allAPI
    const reqconfig = {
        method:httpRequest,
        url,
        data:requestBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }

    return await axios(reqconfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}

