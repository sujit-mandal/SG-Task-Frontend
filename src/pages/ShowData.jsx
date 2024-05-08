import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import Navbar from "../components/Navbar";
const Data = () => {
  const params = useParams();
  const [studentInfo, setStudentInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentData = await axios.get(
          `http://localhost:5000/student-data/${params.blogId}`
        );
        setStudentInfo(studentData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.blogId]);

  const handleDownload = () => {
    if (!studentInfo.length) {
      alert("There is no data to export.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(studentInfo);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Student Data");

    XLSX.writeFile(workbook, "Student_Info.xlsx"); // Filename customization
  };

  const columns = [
    {
      name: "Full Name",
      selector: (row) => row.fullName,
    },
    {
      name: "Email",
      selector: (row) => row.emailAddress,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "Work/Home Number",
      selector: (row) => row.workOrHomeNumber,
    },
    {
      name: "Preferred Course",
      selector: (row) => row.preferredCourse,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex justify-between max-w-screen-xl mx-auto mt-10">
        <h3 className="pl-4 text-3xl font-bold">Student Info Data</h3>
        <button
          onClick={handleDownload}
          className="px-3 py-2 bg-cyan-500 text-white rounded-lg"
        >
          Export Data
        </button>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <DataTable columns={columns} data={studentInfo} />
      </div>
    </>
  );
};

export default Data;
