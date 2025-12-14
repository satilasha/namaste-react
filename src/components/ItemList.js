import { useDispatch } from "react-redux"
import { IMAGE_CDN_URL } from "../utils/constants"
import { addItem } from "../utils/appStore/cartSlice"

const ItemList = ({ data , 'data-testid': testid }) => {

    const item = data?.card?.info

    const { name, price, defaultPrice, description, imageId } = item

    const dispatch = useDispatch()

    const handleAddItem = (data) => {
        dispatch(addItem(data))
    }

    return (
        <div  data-testid={testid} className="flex justify-between p-5 m-5 border-b border-gray-300">

            {/* Left: Item text */}
            <div className="w-9/12 pr-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {name} - ₹{price ? price / 100 : defaultPrice / 100}
                </h3>

                <p className="py-3 text-sm text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Right: Image + Button */}
            <div className="w-3/12 flex flex-col items-center">
                <img
                    src={IMAGE_CDN_URL + imageId}
                    alt={name}
                    className="w-28 h-28 rounded-lg shadow-sm"
                />

                <button
                    className="mt-1 px-4 border border-green-600 text-green-700 rounded-md 
                       hover:bg-green-600 hover:text-white transition font-medium"
                    onClick={() => handleAddItem(data)}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default ItemList