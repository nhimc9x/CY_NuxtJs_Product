import {$fetch} from 'ofetch'

const customFetch = $fetch.create({
    baseURL: 'http://152.42.240.131/api/v1',
})

const authFetch = async (url: string, options: any = {}) => {
    const token = useCookie('token')
    if (token?.value) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token.value}`
    }
    try {
        return await customFetch(url, options)
    } catch (error) {
        throw error
    }
}

export default authFetch
