import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";
import { MdMiscellaneousServices, MdDesignServices } from "react-icons/md";
import { ImHome } from "react-icons/im";

export default   [
  {
    id: 1,
    name: "home",
    icon: <ImHome />,
  },
  {
    id: 2,
    name: "about",
    icon: <BsFillInfoCircleFill />,
  },
  {
    id: 3,
    name: "services",
    icon: <MdDesignServices />,
  },
  {
    id: 4,
    name: "reviews",
    icon: <FaBlogger />,
  },
  {
    id: 5,
    name: "contact",
    icon: <MdMiscellaneousServices />,
  },
];