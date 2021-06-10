import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import DashboardWrapper from "../components/layout/dashboard-wrapper";
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

  return (
    <DashboardWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
        <h3 className="text-lg mb-4 font-semibold text-gray-600 font-brand">
          Comece criando um template para cadastrar seus colaboradores
        </h3>
        <a
          href="/employee-model"
          className="py-20 px-32 flex gap-x-4 items-center justify-center border-2 border-blue-300 rounded-lg border-dashed text-gray-600 bg-blue-100 font-medium outline-none focus:outline-none hover:bg-blue-200 transition duration-500"
        >
          <FaPlus />
          Criar template
        </a>
      </div>
    </DashboardWrapper>
  );
}
