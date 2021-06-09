import React from "react";
import AuthButton from "../components/auth-button";
import FormControl from "../components/form/form-control";
import Label from "../components/form/label";
import Input from "../components/form/input";
import Select from "../components/form/select";
import { useAuth } from "../contexts/auth";

const companySizeOptions = [
	{value: 1, label: 'Entre 1 e 25 pessoas'},
	{value: 2, label: 'Entre 25 e 50 pessoas'},
	{value: 3, label: 'Entre 50 e 100 pessoas'},
	{value: 4, label: 'Mais de 100 pessoas'},
]

export default function Register() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex flex-col p-5 w-full items-center min-h-screen justify-center">
      <h1 className="text-3xl text-center text-gray-600 font-brand font-bold">
        Comece a dar todo o cuidado que seu time merece 💙
      </h1>
      <div className="flex flex-col items-center justify-center border gap-y-5 p-7 mt-8 w-full lg:w-1/3 shadow-md rounded-xl">
        {!user && (
          <>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl text-gray-600 font-brand font-semibold">
                Estamos ansiosos para ter você aqui
              </h3>
              <p className="text-gray-600 text-md">Crie sua conta.</p>
            </div>

            <FormControl>
              <Label htmlFor="company-name">Onde você trabalha?</Label>
              <Input
                id="company-name"
                placeholder="Hogwarts"
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="company-size">
                Quantas pessoas trabalham nessa companhia?
              </Label>
              <Select
                id="company-size"
				options={companySizeOptions}
             />
            </FormControl>

            <AuthButton icon="touch">Finalizar cadastro</AuthButton>
          </>
        )}
      </div>
    </div>
  );
}
