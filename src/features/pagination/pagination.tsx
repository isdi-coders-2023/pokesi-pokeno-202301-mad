/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ApiResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: User[];
}

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchUsers = async (page: number) => {
    const response = await fetch(
      `https://example.com/api/users?page=${page}&per_page=10`
    );
    const data = (await response.json()) as ApiResponse;
    setUsers(data.data);
    setCurrentPage(data.page);
    setTotalPages(data.totalPages);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      fetchUsers(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      fetchUsers(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UsersList;
