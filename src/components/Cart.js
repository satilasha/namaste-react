import { useSelector, useDispatch } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from "../utils/appStore/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartItems", cartItems)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="w-6/12 mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold">Cart</h1>

                <button
                    onClick={handleClearCart}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Clear Cart
                </button>
            </div>

            {/* Empty Cart Message */}
            {cartItems.length === 0 && (
                <div className="px-4 flex flex-col items-center gap-2">
                    <h1 className="text-xl text-gray-800 text-center">Your cart is empty</h1>
                    <h2 className="text-gray-500 text-center">
                        You can go to home page to view more restaurants
                    </h2>
                </div>
            )}

            {/* Cart Items */}
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <ItemList key={item?.card?.info?.id} data={item} />
                ))}
            </div>
        </div>
    )

}

export default Cart