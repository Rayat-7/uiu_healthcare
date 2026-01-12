'use client';

import React, { useState, use } from 'react';

const PrescriptionPage = (props: { params: Promise<{ id: string }> }) => {
    const params = use(props.params);
    const [patientName, setPatientName] = useState('');
    const [medications, setMedications] = useState([{ name: '', dosage: '', frequency: '' }]);
    const [tests, setTests] = useState(['']);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleMedicationChange = (index: number, field: 'name' | 'dosage' | 'frequency', value: string) => {
        const newMedications = [...medications];
        newMedications[index][field] = value;
        setMedications(newMedications);
    };

    const addMedication = () => {
        setMedications([...medications, { name: '', dosage: '', frequency: '' }]);
    };

    const removeMedication = (index: number) => {
        const newMedications = medications.filter((_, i) => i !== index);
        setMedications(newMedications);
    };

    const handleTestChange = (index: number, value: string) => {
        const newTests = [...tests];
        newTests[index] = value;
        setTests(newTests);
    };

    const addTest = () => {
        setTests([...tests, '']);
    };

    const removeTest = (index: number) => {
        const newTests = tests.filter((_, i) => i !== index);
        setTests(newTests);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ patientId: params.id, patientName, medications, tests, startDate, endDate, notes });
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-center mb-10">Create Prescription</h1>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="patientName" className="block text-lg font-semibold text-gray-800 mb-2">Patient Name</label>
                            <input
                                type="text"
                                id="patientName"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={patientName}
                                onChange={e => setPatientName(e.target.value)}
                                placeholder="Enter patient's name"
                            />
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Medications</h3>
                            {medications.map((med, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border rounded-lg">
                                    <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                value={med.name}
                                                onChange={e => handleMedicationChange(index, 'name', e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                placeholder="Medication Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
                                            <input
                                                type="text"
                                                value={med.dosage}
                                                onChange={e => handleMedicationChange(index, 'dosage', e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                placeholder="e.g., 500mg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                                            <input
                                                type="text"
                                                value={med.frequency}
                                                onChange={e => handleMedicationChange(index, 'frequency', e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                placeholder="e.g., Twice a day"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <button type="button" onClick={() => removeMedication(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
                                    </div>
                                </div>
                            ))}
                            <button type="button" onClick={addMedication} className="bg-green-500 text-white p-2 rounded-md">Add Medication</button>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Tests</h3>
                            {tests.map((test, index) => (
                                <div key={index} className="flex items-center gap-4 mb-2">
                                    <input
                                        type="text"
                                        value={test}
                                        onChange={e => handleTestChange(index, e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="e.g., Blood Test"
                                    />
                                    <button type="button" onClick={() => removeTest(index)} className="bg-red-500 text-white p-2 rounded-md">Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={addTest} className="bg-green-500 text-white p-2 rounded-md">Add Test</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label htmlFor="startDate" className="block text-lg font-semibold text-gray-800 mb-2">Start Date</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                                    value={startDate}
                                    onChange={e => setStartDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="block text-lg font-semibold text-gray-800 mb-2">End Date</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                                    value={endDate}
                                    onChange={e => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-8">
                            <label htmlFor="notes" className="block text-lg font-semibold text-gray-800 mb-2">Notes</label>
                            <textarea
                                id="notes"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                                value={notes}
                                onChange={e => setNotes(e.target.value)}
                                placeholder="Add any additional notes..."
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700">
                                Submit Prescription
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default PrescriptionPage;
