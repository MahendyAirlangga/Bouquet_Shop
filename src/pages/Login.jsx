import Button from "../components/button";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen bg-pink-50/50 flex items-center justify-center py-12 px-6">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 border border-pink-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-8 text-sm">Please enter your details to sign in</p>
                
                <form className="space-y-6">
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

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="rounded text-pink-500 focus:ring-pink-400 mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-pink-500 hover:text-pink-600 font-medium">Forgot password?</a>
                    </div>
                    
                    <Button className="w-full py-3">
                        Sign In
                    </Button>
                </form>
                
                <p className="text-center text-gray-600 mt-8 text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
