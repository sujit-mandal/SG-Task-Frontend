import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [showBlog, setShowBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blog = await axios.get(
          "https://sg-server-gamma.vercel.app/all-blogs"
        );
        setShowBlog(blog.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(showBlog);
  const columns = [
    {
      name: "Post Id",
      selector: (row) => row._id,
    },
    {
      name: "Post Title",
      selector: (row) => row.title,
    },
    {
      name: "Posted Date",
      selector: (row) => row.postedDate,
    },
    {
      name: "Action",
      cell: (row) => (
        <Link to={`/student-data/${row._id}`}>
          <button className="px-3 py-2 rounded-2xl bg-cyan-600 text-white">
            View Data
          </button>
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <Navbar />
      <h1 className="mx-auto max-w-7xl pl-10 text-4xl font-bold py-5">
        Admin Dashboard
      </h1>
      <div className="flex items-center justify-center max-w-screen-lg mx-auto mt-5">
        <DataTable columns={columns} data={showBlog} />
      </div>
    </>
  );
};

export default AdminDashboard;
