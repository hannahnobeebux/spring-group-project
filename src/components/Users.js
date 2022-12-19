import { useEffect, useState } from "react";
import fetchGetAllUsers from "../utils/Users/fetchGetAllUsers";

export default function Users() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const data = await fetchGetAllUsers();
      setUsers(data);
      setIsLoading(false);
    }
    fetchUsers();
  }, []);

  if (!isLoading) {
    return users.map((user) => (
      <section key={user.id}>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
      </section>
    ));
  }
}
