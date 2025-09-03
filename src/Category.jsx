import Breakfast from "./assets/Breakfast.png"
import Soup from "./assets/Soups.png"
import Pasta from "./assets/Pasta.png"
import Meal from "./assets/Meal.png"
import Burger from "./assets/Burger.png"
import Pizza from "./assets/Pizza.png"


const Categories = [
    {
        id:1,
        name: "Breakfast",
        image:<img src={Breakfast} alt="Breakfast" className="w-[70px] h-[80px] text-gray-500 hover:text-stone-700 " />,
    },
    {
        id:2,
        name: "Soups",
        image:<img src={Soup} alt="Soup" className="w-[70px] h-[80px] text-gray-500 hover:text-orange-500" />,
    },
    {
        id:3,
        name: "Pasta",
        image:<img src={Pasta} alt="Pasta" className=" w-[70px] h-[80px] text-gray-500 hover:text-yellow-500" />,
    },
    {
        id:4,
        name: "Meals",
        image:<img src={Meal} alt="Meal" className="w-[70px] h-[80px] text-gray-500 hover:text-green-700" />,
    },
    {
        id:5,
        name: "Burgers",
        image:<img src={Burger} alt="Burger" className="w-[70px] h-[80px] text-gray-500 hover:text-brown-700" />,
    },
    {
        id:6,
        name: "Pizza",
         image:<img src={Pizza} alt="Pizza" className="w-[70px] h-[80px] text-red-500 hover:text-brown-700" />,
    },
]

export default Categories