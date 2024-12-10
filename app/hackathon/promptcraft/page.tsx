"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PromptCraftPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prompt: "",
    image: null as File | null,
    imagePreview: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file), // Generate a preview URL
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("prompt", formData.prompt);

    if (formData.image) {
      data.append("image", formData.image);
    } else {
      setSubmissionStatus("Please upload an image.");
      return;
    }

    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSubmissionStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          prompt: "",
          image: null,
          imagePreview: "",
        });
        toast.success("Successfully Submitted!", {
          position: "top-right",
        });
      } else {
        setSubmissionStatus("Form submission failed. Please try again.");
      }
    } catch (error) {
      if (error instanceof Error) throw new Error();
      setSubmissionStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-md md:grid-cols-2">
          {/* Left Side: Image Upload and Preview */}
          <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="mb-4">
              {formData.imagePreview ? (
                <img
                  src={formData.imagePreview}
                  alt="Uploaded Preview"
                  className="h-48 w-48 rounded-md object-cover shadow-md"
                />
              ) : (
                <div className="flex h-48 w-48 items-center justify-center rounded-md bg-gray-300 shadow-md">
                  <span className="text-gray-500">No Image Uploaded</span>
                </div>
              )}
            </div>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="p-6">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
              Participate Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="prompt"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prompt
                </label>
                <textarea
                  id="prompt"
                  name="prompt"
                  value={formData.prompt}
                  placeholder="Enter the prompt you used"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
            {submissionStatus && (
              <div className="mt-4 text-center text-sm text-gray-600">
                {submissionStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
