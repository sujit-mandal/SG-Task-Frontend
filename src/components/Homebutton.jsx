import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Homebutton = () => {
  return (
    <div className="text-black text-2xl font-bold">
      <Link to={"/"}>
        <button className="inline-flex items-center gap-2">
          <IoHomeOutline />
          <h3>Home</h3>
        </button>
      </Link>
    </div>
  );
};

export default Homebutton;
