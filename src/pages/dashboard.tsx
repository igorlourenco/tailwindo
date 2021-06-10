import { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth";
import { findCompanyByUser } from "../database/client";
import { Company } from "../interfaces/company";

export default function Dashboard() {
  const { user } = useAuth();
  const [company, setCompany] = useState<Company>(null);

  useEffect(() => {
    async function getCompany() {
      const { company, error } = await findCompanyByUser(user.id);
      if (company) {
        setCompany(company);
        return;
      }
      if (error) {
        console.log(error);
        return;
      }
    }

    getCompany();
  }, [user]);

  return <div>{company?.name}</div>;
}
