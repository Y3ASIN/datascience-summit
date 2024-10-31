import RegisterForm from "@/components/RegisterForm";
import React from "react";

const Register: React.FC = () => {
  return (
    <section className="mp-20 mx-8 mt-10 min-h-screen max-w-96 sm:mx-auto sm:max-w-7xl">
      <RegisterForm />
    </section>
  );
};

export default Register;
