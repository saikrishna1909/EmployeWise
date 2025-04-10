import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../Context/UserContext';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateUser, deleteUser } = useUser(); 
  const [userInfo, setUserInfo] = useState(null);
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(res => {
        const user = res.data.data;
        setUserInfo(user);
        setFormData({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        });
      })
      .catch(err => {
        console.error("Error fetching user:", err);
        toast.error("Failed to load user data");
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = () => {
    axios.put(`https://reqres.in/api/users/${id}`, formData)
      .then(() => {
        updateUser(Number(id), formData);
        toast.success("✅ User updated successfully");
        setTimeout(() => navigate('/all-users'), 1000);
      })
      .catch(() => {
        toast.error("❌ Failed to update user");
      });
  };

  const handleDelete = () => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        deleteUser(Number(id)); 
        toast.success("🗑️ User deleted successfully");
        //setTimeout(() => navigate('/all-users'), 1000);
        navigate('/all-users', { state: { refetch: true } });
      })
      .catch(() => {
        toast.error("❌ Failed to delete user");
      });
  };

  if (!userInfo) return <p className='text-center mt-4'>Loading...</p>;

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="card mx-auto shadow p-3" style={{ width: '500px' }}>
        <img src={userInfo.avatar} alt={userInfo.first_name} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title text-center mb-3">Edit User</h4>

          <div className="form-group mb-2">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-2">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-success" onClick={handleUpdate}>
              Save Changes
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
