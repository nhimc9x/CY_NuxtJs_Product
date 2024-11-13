type ItemCart = {
    product_id: number
    name: string;
    price: number;
    quantity: number;
    image?: string;
    stock?: number;
}

export const useCartStore = defineStore('cart', () => {
        const cart: Ref<ItemCart[]> = ref([])

        const quantityItemInCart = computed(() => cart.value.length)

        const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0))

        const cartItemsToCheckout = computed(() => {
            return cart.value.map(item => {
                return {
                    product_id: item.product_id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                }
            })
        })

        const addToCart = (item: ItemCart) => {
            const findItem = cart.value.find(i => i.product_id === item.product_id)
            if (findItem) {
                if (item.stock === findItem.quantity) {
                    alert('Item is out of stock')
                    return
                }
                findItem.quantity++
                return
            }
            cart.value.push(item)
        }

        const removeFromCart = (id: number) => {
            cart.value = cart.value.filter(item => item.product_id !== id)
        }

        const removeAllCart = () => {
            cart.value = []
        }

        return {
            cart,
            quantityItemInCart,
            cartItemsToCheckout,
            totalPrice,
            addToCart,
            removeFromCart,
            removeAllCart
        }
    },
    {
        persist: {
            enabled: true,
        }
    }
)