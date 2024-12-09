'use client';

import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function DataHackathon() {
    const [userData, setUserData] = useState<number[] | null>(null);
    const [predefinedData, setPredefinedData] = useState<number[] | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const calculateF1 = (actual: number[], predicted: number[]): number => {
        let tp = 0, fp = 0, fn = 0;

        for (let i = 0; i < actual.length; i++) {
            if (actual[i] === 1 && predicted[i] === 1) tp++;
            else if (actual[i] === 0 && predicted[i] === 1) fp++;
            else if (actual[i] === 1 && predicted[i] === 0) fn++;
        }

        const precision = tp / (tp + fp);
        const recall = tp / (tp + fn);

        return 2 * ((precision * recall) / (precision + recall)) || 0; // Return 0 if precision + recall is NaN
    };

    useEffect(() => {
        fetch('/testData.csv')
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    complete: (result) => {
                        const labels = result.data.map((row: any) => parseInt(row.label, 10));
                        setPredefinedData(labels);
                    },
                    error: (error: any) => console.error('Error parsing predefined CSV:', error),
                });
            })
            .catch((error) => console.error('Error fetching predefined CSV:', error));
    }, []);

    const handleUserFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            toast.info('Processing CSV file...');
            Papa.parse(file, {
                header: true,
                complete: (result) => {
                    const labels = result.data.map((row: any) => parseInt(row.label, 10));
                    setUserData(labels);
                },
                error: (error) => {
                    console.error('Error parsing user CSV:', error);
                    toast.error('Error parsing user CSV.');
                },
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Ensure data is available
        if (!userData || !predefinedData) {
            toast.error('Please upload the user data CSV and ensure predefined data is loaded.');
            return;
        }

        if (userData.length !== predefinedData.length) {
            toast.error('The uploaded CSV does not match the predefined data length.');
            return;
        }

        // Calculate F1 score
        const f1Score = calculateF1(predefinedData, userData);

        const data = {
            name: formData.name,
            email: formData.email,
            f1Score, // Automatically include F1 score
        };

        try {
            const response = await fetch('/api/data-hackathon', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Submission successful!');
                setFormData({ name: '', email: '' });
                setUserData(null);
            } else {
                const error = await response.json();
                toast.error(`Submission failed: ${error.error}`);
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            toast.error('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="p-4">
            <ToastContainer />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                        <div className="mb-4">
                            <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded-md shadow-md">
                                <span className="text-gray-500">CSV File</span>
                            </div>
                        </div>
                        <label className="block mb-2 font-semibold">Upload User Data CSV</label>
                        <input
                            type="file"
                            accept=".csv"
                            onChange={handleUserFileUpload}
                            className="block mb-4 border border-gray-300 rounded px-2 py-1"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                            Participant Information
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
