import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [makeAdmin, setMakeAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/my-products/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setMakeAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [makeAdmin, adminLoading];
};
export default useAdmin;
