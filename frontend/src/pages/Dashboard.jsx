import React, { useState } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import { useNavigate } from "react-router-dom";
import SquishyCard from "../components/SquishyCard";
import Store from "../components/Store";
import TermsAndConditions from "../components/TermsAndConditions";
import Footer from "../components/Footer";

export default function Dashboard() {
    const [profilePic, setProfilePic] = useState(null); 
    const navigate = useNavigate();

    const subscriptions = [
        "Spotify Subscription",
        "YouTube Subscription",
        "Amazon Prime"
    ];

    // Function to handle profile picture upload
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result); 
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <NavbarDashboard />
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                {/* Profile Header */}
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                    {/* Profile Photo */}
                    <div className="relative group">
                        {/* Display the profile photo or a placeholder */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-green-500">
                            <img
                                src={profilePic || "836.jpg"}  // Use the uploaded picture or fallback to default
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePicChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" // Make the input fill the image area
                        />
                    </div>

                    {/* User Info */}
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {localStorage.getItem("name") || "N/A"}
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Phone: {localStorage.getItem("mobile")}
                        </p>
                        <p className="text-gray-600">
                            Eco Points: <span className="text-green-600 font-semibold">{localStorage.getItem("credits")}</span>
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-center md:justify-end space-x-4">
                    <button
                        onClick={() => navigate("/transaction")}
                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    >
                        View Transaction Log
                    </button>
                    <button
                        onClick={() => navigate("/credits")}
                        className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    >
                        Redeem Eco Points
                    </button>
                </div>
            </div>

            {/* Coupons Section */}
            <div className="mt-3 text-3xl text-center font-bold">Coupons</div>
            <div className="flex flex-wrap justify-center gap-4">
                {subscriptions.map((subscription, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4">
                        <SquishyCard subscriptions={[subscription]} />
                    </div>
                ))}
            </div>

            {/* Company Partners Section */}
            <div className="mt-3 text-3xl text-center font-bold">Company Partners</div>
            <Store />

            {/* Terms and Conditions Section */}
            <TermsAndConditions />
            <Footer />
        </>
    );
}
