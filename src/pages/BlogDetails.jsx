import { useParams } from "react-router-dom";
import StudentInfo from "../components/StudentInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import Homebutton from "../components/Homebutton";
const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/blog-details/${params.slug}`
        );
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.slug]);
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <Homebutton />
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 mt-5">
          <div>
            <h2 className="text-[40px] font-bold">{blog?.title}</h2>
            <p className="text-2xl text-justify">{blog?.description}</p>
          </div>
        </div>
        <div className="col-span-4 mt-5">
          <StudentInfo blogId={blog._id} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
