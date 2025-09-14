import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        gender: '',
        bio: '',
        age: ''
    });

    const [error, setError] = useState('');
    const [missingDetailsError, setMissingDetailsError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requiredFields = ['username', 'password', 'name', 'email', 'gender', 'age'];
        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            setMissingDetailsError('Please fill in all required fields.');
            return;
        }

        try {
           const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.status === 409) {
                const data = await response.json();
                setError(data.msg);
                return;
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Signup successful:', data);
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleCancel = () => {
        setFormData({
            username: '',
            password: '',
            name: '',
            email: '',
            gender: '',
            bio: '',
            age: ''
        });
        setError('');
        setMissingDetailsError('');
    };

    const closeModal = () => {
        setError('');
        setMissingDetailsError('');
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {(error || missingDetailsError) && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-gray-900/70"></div>
                    <div className="bg-red-500 text-white rounded-lg shadow-xl p-6">
                        <h3 className="text-lg font-bold">Error</h3>
                        <p className="mt-2">{error || missingDetailsError}</p>
                        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-white text-red-600 rounded-lg hover:bg-gray-200 transition">
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="w-full max-w-3xl backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-10">
                <h2 className="text-4xl font-bold text-center text-white mb-8">Create Account</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                Username <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="janesmith"
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                Password <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                About
                            </label>
                            <textarea
                                name="bio"
                                rows={3}
                                value={formData.bio}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                Gender <span className="text-red-400">*</span>
                            </label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white focus:ring-2 focus:ring-pink-500"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Non Binary">Non Binary</option>
                            </select>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium text-gray-200">
                                Age <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="mt-2 w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between pt-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-3 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
