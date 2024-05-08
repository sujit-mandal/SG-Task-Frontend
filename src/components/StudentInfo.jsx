import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const StudentInfo = ({ blogId }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataFromInputs = {
      blogId: blogId,
      fullName: event.target.fullName.value,
      emailAddress: event.target.emailAddress.value,
      mobileNumber: event.target.mobileNumber.value,
      workOrHomeNumber: event.target.workOrHomeNumber.value,
      university: event.target.university.value,
      preferredCourse: event.target.preferredCourse.value,
    };
    console.log("Form submitted:", formDataFromInputs);
    setErrorMessage(null);
    axios.post("http://localhost:5000/post-student-info", formDataFromInputs);
    toast.success("Form submitted successfully");
    formRef.current.reset();
  };

  return (
    <div className="bg-[#E5E5E3] rounded-xl">
      <div className="h-auto flex flex-col justify-center items-center">
        <div className="bg-[#1C66D7] text-white px-10 py-5 rounded-t-xl">
          <h3 className="text-2xl font-bold mb-4">
            Interested in studying UX?
          </h3>
          <p className="text-xl">
            SG can help - fill in your details and we'll call you back.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex flex-col w-full px-5 py-10 space-y-10"
        >
          <div>
            <input
              type="text"
              id="fullName"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Full Name*"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="emailAddress"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Email Address*"
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="mobileNumber"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Mobile Number*"
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="workOrHomeNumber"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Work/Home Number*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="university"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Desired University*"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 text-xl opacity-55">
              Your Preferred Study Course*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              required
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="bio-tech">Bio Tech</option>
            </select>
          </div>

          <button
            type="submit"
            className="text-white bg-[#FF3D00] hover:bg-[#ff3300c8] font-bold text-xl rounded-lg px-5 py-4 mb-2 "
          >
            Help me in Study UX
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentInfo;
