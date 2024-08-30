

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('http://localhost:3001/api/users/logged', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.user) {
          setUser(response.data.user);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!user) {
    return (
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-50 flex items-center justify-center">
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mb-4">Please log in to view your profile.</h1>
          <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Log In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" aria-label="Back to homepage" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook Logo"
              className="w-10 h-10"
            />
          </a>
          <div className="flex flex-grow mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 rounded-lg"
            />
          </div>
          <nav className="flex items-center space-x-4">
            <Link className="hover:underline text-black" to="/home">Home</Link>
            <Link className="hover:underline text-black" to="/friends">Friends</Link>
            <Link className="hover:underline text-black" to="/watch">Watch</Link>
            <Link className="hover:underline text-black" to="/marketplace">Marketplace</Link>
            <Link className="hover:underline text-black" to="/notifications">Notifications</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex space-x-4 py-6">
        <div className="flex-1">
          {/* Status update form */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-2 border border-gray-300 rounded-lg"
            ></textarea>
            <button className="mt-2 p-2 bg-blue-600 text-white rounded-lg">Post</button>
          </div>

          {/* News Feed */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="images/1234465.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-black">John Doe</h4>
                  <p className="text-sm text-gray-500 text-black">2 hours ago</p>
                </div>
              </div>
              <p className='text-black'>Here is an example of a post. It could be anything from a text update to a photo or video.</p>
            </div>

            {/* Repeat News Feed Posts */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="images/1234465.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-black">Jane Smith</h4>
                  <p className="text-sm text-gray-500 text-black">3 hours ago</p>
                </div>
              </div>
              <p className='text-black'>This is another post example with a different user.</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64">
          {/* Friends Suggestions */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="font-semibold mb-2 text-black">Friends</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src="images/1234465.png"
                  alt="Friend"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-black">Alice Johnson</p>
                  <button className="text-blue-600">Add Friend</button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="images/122.jpg"
                  alt="Friend"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-black">Bob Brown</p>
                  <button className="text-blue-600 ">Add Friend</button>
                </div>
              </div>
            </div>
          </div>

          {/* Groups */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2 text-black">Groups</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src="images/122.jpg"
                  alt="Group"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-black">React Developers</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/122.jpg"
                  alt="Group"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-black">Frontend Enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Profile Section */}
      <div className="container mx-auto mt-6 bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">Hello, {user.name}!</h1>
        <p className="text-lg text-black">Welcome to your profile page.</p>

        <div className="mt-4 p-4 border rounded-md border-gray-200">
          <h2 className="text-2xl font-semibold mb-2 text-black">Your Information:</h2>
          <p className='text-black'><strong>Name:</strong> {user.name}</p>
          <p className='text-black'><strong>Email:</strong> {user.email}</p>
          <p className='text-black'><strong>Terms and Conditions Accepted:</strong> {user.termsAccepted ? "False" : "True"}</p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
            className="px-6 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
