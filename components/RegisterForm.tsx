import React from "react";
import TitleBar from "./Titlebar";
import RegisterButton from "./RegisterButton";
import { formLinks } from "@/constants";

const RegisterForm: React.FC = () => {
  return (
    <section className="min-h-screen shadow-xl rounded-md bg-gray-100 px-4 py-2 sm:px-6 sm:py-5 lg:px-8 group">
      <TitleBar
        title="Choose Your Events and Register to Participate!"
        subText="text-3xl"
      />
      <div className="grid-col-1 grid gap-5 sm:grid-cols-3">
        {formLinks.map((links) => (
          <RegisterButton key={links.title} links={links} />
        ))}
      </div>
    </section>
  );
};

export default RegisterForm;
