import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Input from "../components/form/input";
import Select from "../components/form/select";
import { useForm } from "react-hook-form";
import DashboardWrapper from "../components/layout/dashboard-wrapper";

const fieldTypes = [
  {
    value: "Texto",
    label: "Texto",
  },
  {
    value: "Número",
    label: "Número",
  },
  {
    value: "Foto",
    label: "Foto",
  },
];

export default function EmployeeModel() {
  const [types, setTypes] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newTypes = [...types, data];
    console.log(newTypes);
    setTypes(newTypes);
  };

  const removeItem = (index) => {
    console.log(index);
    const newTypes = types.filter(function (_, i) {
      return i !== index;
    });
    console.log(newTypes);
    setTypes(newTypes);
  };

  return (
    <DashboardWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex gap-x-3 w-3/4 md:w-1/2"
        >
          <Input
            id="fieldName"
            placeholder="Propriedade"
            {...register("fieldName")}
          />
          <Select
            id="fieldType"
            options={fieldTypes}
            placeholder="Tipo"
            {...register("fieldType")}
          />
          <button className="rounded-md p-2 outline-none focus:outline-none hover:bg-blue-100">
            <FaPlus className="text-gray-600" />
          </button>
        </form>
        {types && (
          <div className="flex flex-col gap-y-2 w-3/4 md:w-1/2 mt-3">
            {types.map(({ fieldName, fieldType }, index) => (
              <div className="flex gap-x-3 w-full">
                <p className="py-2 px-3 flex rounded item-center w-1/2 text-gray-600 font-medium bg-blue-50">
                  {fieldName}
                </p>
                <p className="py-2 px-3 flex rounded item-center w-1/2 text-gray-600 font-medium bg-blue-50">
                  {fieldType}
                </p>
                <button
                  onClick={() => removeItem(index)}
                  className="rounded-md p-2 outline-none focus:outline-none hover:bg-blue-100"
                >
                  <FaMinus className="text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardWrapper>
  );
}
