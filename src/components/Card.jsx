import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <div>
      <img
        src={blog?.firstImage}
        alt="card-image"
        className="w-full h-52 object-cover rounded-2xl mb-6"
      />
      <span className="px-3 py-2 border-[1px] border-black rounded-full ">
        {blog?.category}
      </span>
      <h2 className="text-2xl font-bold mt-10">{blog?.title}</h2>
      <p className="text-xl mt-5">{blog?.shortDescription.slice(0, 100)}.</p>
      <Link to={`/blog-details/${blog._id}`}>
        <button className="mt-5 font-medium text-[#F0672B]">
          Read Article ->
        </button>
      </Link>
    </div>
  );
};

export default Card;
