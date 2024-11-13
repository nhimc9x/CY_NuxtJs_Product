import apiConfig from "~/configs/apiConfig";

const get = async (url: string, options: any = {}) => {
    return await apiConfig(url, {
        method: 'GET',
        ...options
    })
}

const post = async (url: string, options: any = {}) => {
    return await apiConfig(url, {
        method: 'POST',
        ...options
    })
}

const put = async (url: string, options: any = {}) => {
    return await apiConfig(url, {
        method: 'PUT',
        ...options
    })
}

const del = async (url: string, options: any = {}) => {
    return await apiConfig(url, {
        method: 'DELETE',
        ...options
    })
}

export default {
    get,
    post,
    put,
    del
}
