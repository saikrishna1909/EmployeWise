import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import axios from 'axios';

const AllUsers = () => {
    const navigate = useNavigate();
    const { users, setUsers } = useUser();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
   

    const fetchUsers = async (currentPage) => {
        try {
          const res = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
          const fetchedUsers = res.data.data;
          const totalPages = res.data.total_pages;
      
          let combinedUsers = fetchedUsers;
      
          if (fetchedUsers.length < 6 && currentPage < totalPages) {
            const nextRes = await axios.get(`https://reqres.in/api/users?page=${currentPage + 1}`);
            const nextUsers = nextRes.data.data;
            const neededCount = 6 - fetchedUsers.length;
            combinedUsers = [...fetchedUsers, ...nextUsers.slice(0, neededCount)];
          }
      
          setUsers(combinedUsers);
          setTotalPages(totalPages);
          setPage(currentPage);
        } catch (err) {
          console.error("❌ Failed to fetch users:", err);
        }
      };
      
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/UserLogin');
        } else {
            if (users.length === 0) {
                fetchUsers(page);
            }
        }
    }, [page]);

    const handlePrev = () => {
        if (page > 1) fetchUsers(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) fetchUsers(page + 1);
    };

    const goToUserDetails = (id) => {
        navigate(`/user/${id}`);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">All Users - Page {page}</h2>
            {users.length === 0 ? (
                <p className="text-center mt-4">No users to display.</p>
            ) : (
                <>
                    <div className="row justify-content-center">
                        {users.map((user) => (
                            <div key={user.id} className="col-md-6 mb-4 d-flex justify-content-center">
                                <div className="card border-0 shadow" style={{ width: '500px' }}>
                                    <div className="row no-gutters">
                                        <div className="col-sm-5">
                                            <img className="card-img" src={user.avatar} alt={user.first_name} />
                                        </div>
                                        <div className="col-sm-7">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {user.first_name} {user.last_name}
                                                </h5>
                                                <p className="card-text">{user.email}</p>
                                                <a href={`mailto:${user.email}`} className="btn btn-primary me-2">Contact</a>
                                                <button className="btn btn-outline-secondary" onClick={() => goToUserDetails(user.id)}>✏️ Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                  
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        <button className="btn btn-secondary" disabled={page === 1} onClick={handlePrev}>
                            ◀ Previous
                        </button>
                        <button className="btn btn-secondary" disabled={page === totalPages} onClick={handleNext}>
                            Next ▶
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllUsers;

