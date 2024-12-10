"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CSVRow {
  label: string;
}

export default function DataHackathon() {
  const [userData, setUserData] = useState<number[] | null>(null);
  const [predefinedData, setPredefinedData] = useState<number[] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const calculateF1 = (actual: number[], predicted: number[]): number => {
    let tp = 0,
      fp = 0,
      fn = 0;

    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === 1 && predicted[i] === 1) tp++;
      else if (actual[i] === 0 && predicted[i] === 1) fp++;
      else if (actual[i] === 1 && predicted[i] === 0) fn++;
    }

    const precision = tp / (tp + fp);
    const recall = tp / (tp + fn);

    return 2 * ((precision * recall) / (precision + recall)) || 0;
  };

  useEffect(() => {
    // Fetch predefined CSV data
    fetch("/testData.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            const labels = (result.data as CSVRow[]).map((row: CSVRow) =>
              parseInt(row.label, 10),
            );
            setPredefinedData(labels);
          },
          error: (error: unknown) => {
            console.error("Error parsing predefined CSV:", error);
            toast.error("Failed to load predefined data.");
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching predefined CSV:", error);
        toast.error("Error loading predefined data.");
      });
  }, []);

  const handleUserFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast.info("Processing user CSV file...");
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          const data = result.data as CSVRow[];
          const labels = data.map((row: CSVRow) => parseInt(row.label, 10));
          setUserData(labels);
          toast.success("User CSV uploaded successfully!");
        },
        error: (error) => {
          console.error("Error parsing user CSV:", error);
          toast.error("Error parsing user CSV.");
        },
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userData || !predefinedData) {
      toast.error("Please upload both user and predefined data.");
      return;
    }

    if (userData.length !== predefinedData.length) {
      toast.error("Mismatch in data length between user and predefined data.");
      return;
    }

    const f1Score = calculateF1(predefinedData, userData);

    const data = {
      name: formData.name,
      email: formData.email,
      f1Score,
    };

    try {
      const response = await fetch("/api/data-hackathon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Submission successful!");
        setFormData({ name: "", email: "" });
        setUserData(null);
      } else {
        const error = await response.json();
        toast.error(`Submission failed: ${error.error}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <ToastContainer />
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-md md:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-gray-200 p-6">
          <div className="mb-4 flex h-48 w-48 items-center justify-center rounded-md bg-gray-300">
            <span className="text-gray-600">CSV File</span>
          </div>
          <label className="mb-2 block text-sm font-semibold">
            Upload User Data CSV
          </label>
          <input
            type="file"
            accept=".csv"
            onChange={handleUserFileUpload}
            className="block w-full rounded border border-gray-300 px-2 py-1"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
            Participant Information
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
                onChange={handleChange}
                placeholder="Your name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
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
                onChange={handleChange}
                placeholder="Your email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
