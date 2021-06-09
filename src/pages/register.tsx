import React from "react";
import AuthButton from "../components/auth-button";
import { useAuth } from "../contexts/auth";

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
                Crie sua conta com apenas um toque.
              </h3>
              <p className="text-gray-600 text-lg">Simples, fácil e rápido.</p>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="company-name" className="text-gray-600 ">
                Onde você trabalha?
              </label>
              <input
                id="company-name"
                className="border border-gray-300 rounded-md w-full px-3 py-2 font-medium text-gray-600 outline-none focus:ring-1 active:ring-1 ring-blue-400"
              />
            </div>

            <AuthButton icon="touch">Finalizar cadastro</AuthButton>
          </>
        )}
      </div>
    </div>
  );
}
