import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="min-h-screen bg-pink-50/50 flex items-center justify-center py-12 px-6">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-pink-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
                <p className="text-center text-gray-500 mb-8 text-sm">Join us to get fresh flowers for every moment</p>
                
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                        />
                    </div>
                    
                    <Button className="w-full py-3">
                        Register
                    </Button>
                </form>
                
                <p className="text-center text-gray-600 mt-8 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
