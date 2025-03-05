"use client";
import { useRouter } from "next/navigation"; 
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function LogoutPage() {
    const router = useRouter(); 

    useEffect(() => {
        const logout = async () => {
            try {
                const response = await fetch("/api/logout", {
                    method: "GET",
                    credentials: "include", 
                });

                const data = await response.json();
                toast.success(data.msg); 
                localStorage.clear();           
                router.push("/"); 
            } catch (error) {
                console.error("Logout failed:", error);
            }
        };
        logout();
    }, [router]); 

    return <div>
                <ToastContainer />

    </div>
}
