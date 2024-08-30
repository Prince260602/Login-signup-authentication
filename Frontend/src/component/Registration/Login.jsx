// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [formData, setData] = useState({
//     email: "",
//     pass: "", // renamed from password to match backend
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/users/login",
//         formData
//       );
//       console.log(response.data);

//       if (response.data.status === "success") {
//         // Store the JWT token in localStorage
//         localStorage.setItem("token", response.data.token);
//         navigate("/profile");
//       } else {
//         alert(response.data.message);
//       }
//     } catch (err) {
//       console.log("There was an error!", err);
//       alert("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
//       <div className="mb-8 text-center">
//         <h1 className="my-3 text-4xl font-bold">Sign In</h1>
//         <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
//       </div>
//       <form onSubmit={handleSubmit} className="space-y-12">
//         <div className="space-y-4">
//           <div className="justify-between mb-2">
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
//             <div className="justify-between mb-2">
//               <label htmlFor="pass" className="block mb-2 text-sm">
//                 Password
//               </label>
//             </div>
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

//           <div className="justify-between mb-2">
//             <a href="#" className="text-xs hover:underline dark:text-gray-600">
//               Forgot password?
//             </a>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <button
//             type="submit"
//             className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-700"
//           >
//             Sign In
//           </button>
//           <p className="px-6 text-sm text-center dark:text-gray-600">
//             Dont have an account yet?
//             <a href="/registration" className="hover:underline dark:text-violet-600">
//               Sign up
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

export default function Login() {
  const navigate = useNavigate();
  const [formData, setData] = useState({
    email: "",
    pass: "", // renamed from password to match backend
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        formData
      );
      console.log(response.data);

      if (response.data.status === "success") {
        // Store the JWT token in localStorage
        localStorage.setItem("token", response.data.token);
        navigate("/profile");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.log("There was an error!", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[500px] bg-blue-50">
      <div className="flex flex-col items-center max-w-md px-8 py-10 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Facebook</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
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
              placeholder="Password"
              value={formData.pass}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-xs text-blue-600 hover:underline">
              Forgot password?
            </a>
            <span className="text-xs text-gray-500">•</span>
            <a href="/registration" className="text-xs text-blue-600 hover:underline">
              Sign up for Facebook
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
