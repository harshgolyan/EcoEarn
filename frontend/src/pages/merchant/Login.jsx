import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MerchantLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function loginHandler() {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/merchant-login", {
                email,
                password
            });
            console.log(response.data);
            localStorage.setItem("merchantToken", response.data.token);
            navigate("/merchant/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
                <div className="h-[90%] w-[80%] flex shadow-2xl rounded-lg overflow-hidden">
                    <div className="bg-white w-full flex flex-col justify-center items-center p-10">
                        <div className="text-4xl font-bold text-gray-800 mb-6">Merchant Login</div>
                        <div className="w-full max-w-xs space-y-6">
                            <div className="flex flex-col text-left">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-1">Email</label>
                                <input 
                                    id="email"
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-600 mb-1">Password</label>
                                <input 
                                    id="password"
                                    type="password" 
                                    placeholder="Enter your password"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="text-green-700 underline cursor-pointer" onClick={() => navigate("/merchant/signup")}>Don't have an account ?</div>
                            <button
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                                onClick={loginHandler}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
