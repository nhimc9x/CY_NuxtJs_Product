export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token').value
    console.log('TO: ', to.path)
    if (token) {
        try {
            const res = await apiServices.get('/user')
        } catch (err) {
            return navigateTo(`/login?redirect=${to.path}`)
        }
    } else {
        return navigateTo(`/login?redirect=${to.path}`)
    }
})
