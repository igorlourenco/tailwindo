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

export default function Register() {
  return (
    <CenteredBlue>
      <FormWrapper>
        <FormHeader>Comece agora, crie sua conta</FormHeader>
        <Form>
          <FormControl>
            <Label htmlFor="name">Seu nome</Label>
            <Input type="text" id="name" placeholder="Harry Potter" />
          </FormControl>

          <FormControl>
            <Label htmlFor="email">Seu email para acesso</Label>
            <Input
              type="email"
              id="email"
              placeholder="harrypotter@hogwarts.uk"
            />
          </FormControl>

          <FormControl>
            <Label htmlFor="password">Sua senha super segura</Label>
            <Input type="password" id="password" placeholder="**********" />
          </FormControl>

          <CenteredVertically>
            <Checkbox id="terms" />
            <CheckboxLabel htmlFor="terms">
              Eu aceito os temos e condições
            </CheckboxLabel>
          </CenteredVertically>

          <SubmitButton>Criar conta</SubmitButton>
        </Form>
        <GoToAnotherAuthPage
          message="Já tem conta?"
          redirectLabel="Faça login."
          redirectUrl="/auth/login"
        />
      </FormWrapper>
    </CenteredBlue>
  );
}
