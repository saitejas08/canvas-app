"use client";

import { useRouter } from 'next/navigation';
import AnimatedBackground from './AnimatedBackground';

export function AuthPage({ isSignin }: { isSignin: boolean }) {
    const router = useRouter();

    const toggleAuthMode = () => {
        // Toggle between '/signin' and '/signup' routes
        const newPath = isSignin ? '/signup' : '/signin';
        router.push(newPath);
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <AnimatedBackground />
            <div className="w-full max-w-md p-8 space-y-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {isSignin ? "Welcome back" : "Create account"}
                    </h1>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black" // Added text-black
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder={isSignin ? "Enter your password" : "Create a password"}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black" // Added text-black
                        />
                    </div>

                    {!isSignin && (
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black" // Added text-black
                            />
                        </div>
                    )}
                </div>

                <div className="pt-2">
                    <button
                        className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                        {isSignin ? "Sign in" : "Sign up"}
                    </button>
                </div>

                <div className="text-center text-sm text-gray-500">
                    {isSignin ? (
                        <p>
                            Don't have an account?{" "}
                            <button
                                onClick={toggleAuthMode}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                Sign up
                            </button>
                        </p>
                    ) : (
                        <p>
                            Already have an account?{" "}
                            <button
                                onClick={toggleAuthMode}
                                className="text-blue-500 hover:underline focus:outline-none"
                            >
                                Sign in
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}