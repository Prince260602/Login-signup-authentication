// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Registration() {
//   const navigate = useNavigate();
//   const [formData, setData] = useState({
//     name: "",
//     email: "",
//     pass: "",
//     c_pass: "",
//     tc: "", // Terms and conditions agreement checkbox value
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleReset = () => {
//     setData({
//       name: "",
//       email: "",
//       pass: "",
//       c_pass: "",
//       tc: "",
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     if (formData.pass !== formData.c_pass) {
//       alert("Password and Confirm Password should be the same");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/users/registration",
//         formData
//       );
//       console.log(response.data);

//       if (response.data.status === "success") {
//         // Store the JWT token in localStorage
//         localStorage.setItem("token", response.data.token);
//         navigate("/login");
//       } else {
//         alert(response.data.message);
//       }
//     } catch (err) {
//       console.log("There was an error!", err);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
//       <div className="mb-8 text-center">
//         <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
//         <p className="text-sm dark:text-gray-600">Create your account</p>
//       </div>
//       <form onSubmit={handleSubmit} className="space-y-12">
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block mb-2 text-sm">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm">
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//             />
//           </div>
//           <div>
//             <label htmlFor="pass" className="block mb-2 text-sm">
//               Password
//             </label>
//             <input
//               type="password"
//               name="pass"
//               id="pass"
//               placeholder="Password"
//               value={formData.pass}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//             />
//           </div>
//           <div>
//             <label htmlFor="c_pass" className="block mb-2 text-sm">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="c_pass"
//               id="c_pass"
//               placeholder="Password"
//               value={formData.c_pass}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
//             />
//           </div>
//           <div>
//             <label htmlFor="tc" className="block mb-2 text-sm">
//               Terms & Conditions
//             </label>
//             <input
//               type="checkbox"
//               name="tc"
//               id="tc"
//               checked={formData.tc}
//               onChange={(e) =>
//                 setData({ ...formData, tc: e.target.checked })
//               }
//               className="mr-2 leading-tight"
//             />
//             <span className="text-sm">I agree to the terms and conditions</span>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <button
//             type="submit"
//             className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-700"
//           >
//             Sign Up
//           </button>
//           <p className="px-6 text-sm text-center dark:text-gray-600">
//             Already have an account?
//             <a href="/login" className="hover:underline dark:text-violet-600">
//               Sign In
//             </a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }


































import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setData] = useState({
    name: "",
    email: "",
    pass: "",
    c_pass: "",
    tc: false, // Updated to boolean for checkbox
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setData({
      name: "",
      email: "",
      pass: "",
      c_pass: "",
      tc: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.pass !== formData.c_pass) {
      alert("Password and Confirm Password should be the same");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/registration",
        formData
      );
      console.log(response.data);

      if (response.data.status === "success") {
        // Store the JWT token in localStorage
        localStorage.setItem("token", response.data.token);
        navigate("/login");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log("There was an error!", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (

    <div className="flex flex-col items-center justify-center h-[500px] bg-blue-50">

      <div className="flex flex-col items-center max-w-lg px-8 py-10 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Facebook</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email or phone number"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="New Password"
              value={formData.pass}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <input
              type="password"
              name="c_pass"
              id="c_pass"
              placeholder="Confirm New Password"
              value={formData.c_pass}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="tc"
              id="tc"
              checked={formData.tc}
              onChange={(e) =>
                setData({ ...formData, tc: e.target.checked })
              }
              className="mr-2 leading-tight"
            />
            <span className="text-sm text-black ">I agree to the terms and conditions</span>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
          <p className="px-6 text-sm text-center text-gray-600">
            Already have an account?
            <a href="/login" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
