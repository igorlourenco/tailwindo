import React from "react";
import { useAuth } from "../contexts/auth";

export default function Register() {
  const { user, signInWithGoogle } = useAuth();

  return (
    <div>
      {!user ? (
        <button onClick={signInWithGoogle}> Entrar com Google </button>
      ) : (
        <p>{user.name}</p>
      )}
    </div>
  );
}
