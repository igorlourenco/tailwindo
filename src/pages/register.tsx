import React from "react";
import ButtonWithIcon from "../components/button-icon";
import FormControl from "../components/form/form-control";
import Label from "../components/form/label";
import Input from "../components/form/input";
import Select from "../components/form/select";
import { useAuth } from "../contexts/auth";
import Textarea from "../components/form/textarea";

const teamsOptions = [
  { value: 1, label: "Na empresa inteira" },
  { value: 2, label: "Com alguns times" },
  { value: 3, label: "Com apenas um time" },
  { value: 4, label: "Com algumas pessoas" },
  { value: 5, label: "Apenas eu" },
];

const companySizeOptions = [
  { value: 1, label: "Apenas eu" },
  { value: 2, label: "Entre 1 e 25" },
  { value: 3, label: "Entre 26 e 50" },
  { value: 4, label: "Entre 51 e 100" },
  { value: 5, label: "Entre 101 e 300" },
  { value: 6, label: "Entre 301 e 500" },
  { value: 7, label: "Mais de 500 " },
];

export default function Register() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex flex-col p-5 w-full items-center min-h-screen justify-center">
      <h1 className="text-3xl text-center text-gray-600 font-brand font-bold">
        Comece a dar todo o cuidado que seu time merece 💙
      </h1>
      <form className="flex flex-col items-center justify-center border gap-y-5 p-7 mt-8 w-full lg:w-1/3 shadow-md rounded-xl">
        {!user && (
          <>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl text-center text-gray-600 font-brand font-semibold">
                Crie sua conta{" "}
              </h3>
              <p className="text-gray-600 text-center text-md">
                Estamos ansiosos para ter você conosco
              </p>
            </div>

            <FormControl>
              <Label htmlFor="company-name">
                Em qual empresa você trabalha?
              </Label>
              <Input id="company-name" />
            </FormControl>
            <FormControl>
              <Label htmlFor="whom-teams">
                Com quem você deseja usar o Your Team?
              </Label>
              <Select id="whom-teams" options={teamsOptions} />
            </FormControl>
            <FormControl>
              <Label htmlFor="company-size">E com quantas pessoas?</Label>
              <Select id="company-size" options={companySizeOptions} />
            </FormControl>

            <FormControl>
              <Label htmlFor="problem">
                Qual problema fez você querer usar Your Team?
              </Label>
              <Textarea id="problem" placeholder="(opcional)" />
            </FormControl>

            <ButtonWithIcon icon="touch" type="submit">
              Finalizar cadastro
            </ButtonWithIcon>
          </>
        )}
      </form>
    </div>
  );
}
