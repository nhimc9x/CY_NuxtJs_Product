export const useAuthStore = defineStore('auth', () => {
    const authentications = ref({
        token: useCookie('token').value || null,
        userInfo: null
    })

    const isAuthenticated = computed(() => !!authentications.value.token)

    const saveToStore = (token: string, userInfo: any) => {
        authentications.value.token = token
        authentications.value.userInfo = userInfo
        useCookie('token').value = token
    }

    const clearStore = () => {
        authentications.value.token = null
        authentications.value.userInfo = null
        useCookie('token').value = null
    }

    return {
        authentications,
        isAuthenticated,
        saveToStore,
        clearStore,
    }
})
