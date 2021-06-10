import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonWithIcon from "../components/button-icon";
import FormControl from "../components/form/form-control";
import Label from "../components/form/label";
import Input from "../components/form/input";
import Select from "../components/form/select";
import { useAuth } from "../contexts/auth";
import Textarea from "../components/form/textarea";
import { createCompany } from "../database/client";
import { useRouter } from "next/router";
import { toast } from "tailwind-toast";
import { findCompanyByUser } from "../database/client";
import { Company } from "../interfaces/company";

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
  const router = useRouter();
  const { user, signInWithGoogle } = useAuth();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    if (company) router.push("/dashboard");
  }, [company]);

  const onSubmit = async (data) => {
    data.motivation ?? " ";
    setIsLoading(true);
    await createCompany({ ownerId: user.id, ...data });
    toast()
      .success("Sucesso!", "Sua conta foi criada.")
      .with({
        duration: 3000,
        speed: 1000,
        positionX: "center",
        positionY: "bottom",
        color: "blue",
        tone: 500,
        fontColor: "blue",
        fontTone: 50,
      })
      .show(); //show pill shaped toast

    setIsLoading(false);
    router.push("/dashboard");
  };

  return (
    <div
      className="flex flex-col p-5 w-full items-center min-h-screen justify-center bg-no-repeat	"
      style={{
        backgroundImage: `url("/images/register/wave.svg")`,
      }}
    >
      <h1 className="text-3xl text-center text-gray-600 font-brand font-bold">
        Todo o cuidado que seu time merece 💙
      </h1>
      <div className="flex flex-col items-center justify-center border gap-y-5 p-5 mt-8 w-full lg:w-1/3 shadow-md rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl text-center text-gray-600 font-brand font-semibold">
            Crie sua conta
          </h3>
          <p className="text-gray-600 text-center text-md">
            {user
              ? "Estamos ansiosos para ter você conosco"
              : "Comece fazendo registrando seu login"}
          </p>
        </div>
        {user ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-y-5 w-full"
          >
            <FormControl>
              <Label htmlFor="name">Em qual empresa você trabalha?</Label>
              <Input id="name" {...register("name")} />
            </FormControl>
            <FormControl>
              <Label htmlFor="whom-teams">
                Com quem você deseja usar o Your Team?
              </Label>
              <Select
                id="whom-teams"
                options={teamsOptions}
                {...register("whomTeams")}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="team-size">E com quantas pessoas?</Label>
              <Select
                id="team-size"
                options={companySizeOptions}
                {...register("teamSize")}
              />
            </FormControl>

            <FormControl>
              <Label htmlFor="problem">
                Qual problema fez você querer usar Your Team?
              </Label>
              <Textarea
                id="motivation"
                placeholder="(opcional)"
                {...register("motivation")}
              />
            </FormControl>

            <ButtonWithIcon
              type="submit"
              icon={isLoading ? null : "touch"}
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : " Finalizar cadastro"}
            </ButtonWithIcon>
          </form>
        ) : (
          <ButtonWithIcon
            bgColorIntensity={100}
            textColor="blue-700"
            icon="google"
            onClick={signInWithGoogle}
          >
            Entrar com Google
          </ButtonWithIcon>
        )}
      </div>
    </div>
  );
}
