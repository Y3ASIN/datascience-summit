import React from "react";
import TitleBar from "./Titlebar";
import RegisterButton from "./RegisterButton";
import { formLinks } from "@/constants";

const RegisterForm: React.FC = () => {
  return (
    <section className="group min-h-screen rounded-md bg-gray-100 px-4 py-2 shadow-xl sm:px-6 sm:py-5 lg:px-8">
      <TitleBar
        title="Choose Your Events and Register to Participate!"
        subText="text-3xl"
      />
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4">
        {formLinks.map((links) => (
          <RegisterButton key={links.title} links={links} />
        ))}
      </div>
    </section>
  );
};

export default RegisterForm;
