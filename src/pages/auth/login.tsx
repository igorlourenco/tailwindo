import React from "react";
import Form, {
  Checkbox,
  CheckboxLabel,
  FormControl,
  FormHeader,
  FormWrapper,
  GoToAnotherAuthPage,
  Input,
  Label,
  SubmitButton,
} from "../../components/form";
import { CenteredBlue, CenteredVertically } from "../../components/layout";

export default function Login() {
  return (
    <CenteredBlue>
      <FormWrapper>
        <FormHeader>Acesse sua conta</FormHeader>
        <Form>
          <FormControl>
            <Label htmlFor="email">Seu email</Label>
            <Input
              type="email"
              id="email"
              placeholder="harrypotter@hogwarts.uk"
            />
          </FormControl>

          <FormControl>
            <Label htmlFor="password">Sua senha</Label>
            <Input type="password" id="password" placeholder="**********" />
          </FormControl>

          <SubmitButton>Entrar</SubmitButton>
        </Form>
        <GoToAnotherAuthPage
          message="Ainda não tem conta?"
          redirectLabel="Registre-se."
          redirectUrl="/auth/register"
        />
      </FormWrapper>
    </CenteredBlue>
  );
}
