import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext({})

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser();
    }, [])
    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:5555/api/auth/refetch",{withCredentials:true});
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (<UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>);
}