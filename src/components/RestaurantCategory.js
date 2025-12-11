
import ItemList from './ItemList'
import { useState } from 'react'

const RestaurantCategory = ({data, showItem, setShowIndex}) => {

    // const [showItem, setShowItem] = useState()

    //controlled
    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-4 border border-gray-200">

            {/* Header / Toggle */}
            <div className="w-full flex items-center justify-between cursor-pointer select-none"
                // onClick={() => setShowItem(!showItem)}>
                onClick={handleClick}>

                <span className="text-lg font-semibold text-gray-800">
                    {data?.title} ({data?.itemCards.length})
                </span>

                <span className={`text-xl transition-transform duration-300 ${showItem ? "rotate-180" : "rotate-0"}`}>
                    ↓
                </span>
            </div>

            {/* Content */}
            <div
                className={`transition-all duration-300 overflow-hidden ${showItem ? "max-h-screen mt-3" : "max-h-0"}`}>

                {showItem && data?.itemCards.map((item) => (
                    <ItemList key={item?.card?.info?.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default RestaurantCategory