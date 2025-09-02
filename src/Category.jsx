import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";


const Categories = [
    {
        id:1,
        name: "Breakfast",
        image:<MdFreeBreakfast className="w-[60px] h-[50px] text-gray-500 hover:text-red-700" />
    },
    {
        id:2,
        name: "Soups",
        image:<TbSoupFilled className="w-[60px] h-[50px] text-gray-500 hover:text-red-700" />
    },
    {
        id:3,
        name: "Pasta",
        image:<GiNoodles className="w-[60px] h-[50px] text-gray-500 hover:text-red-700" />
    },
    {
        id:4,
        name: "Meals",
        image:<MdOutlineFoodBank className="w-[60px] h-[50px] text-gray-500 hover:text-red-700" />
    },
    {
        id:5,
        name: "Burgers",
        image:<PiHamburgerFill className="w-[60px] h-[50px] text-gray-500 hover:text-red-700" />
    },
    {
        id:6,
        name: "Pizza",
        image:<GiFullPizza className="w-[60px] h-[50px] text-gray-500 hover:text-red-700 " />
    },
]

export default Categories