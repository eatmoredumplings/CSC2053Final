import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [vendor, setVendor] = useState(
        JSON.parse(localStorage.getItem("vendor")) || null
    );

    useEffect(() => {
        localStorage.setItem("vendor", JSON.stringify(vendor));
    }, [vendor]);

    return (
        <AuthContext.Provider value={{ vendor, setVendor }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
