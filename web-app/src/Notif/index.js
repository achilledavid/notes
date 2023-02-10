import { useState } from "react";
import { useEffect } from "react";
import { NotifStyle } from "./NotifStyle";

const Notif = () => {
    let [user, setUser] = useState('');

    useEffect(() => {
        fetchUser();
    }, []);

    // Récupération des notes

    const fetchUser = async () => {
        const response = await fetch("/profile");
        const data = await response.json();
        setUser(data.name);
    };

    return (
        <NotifStyle className="notif">
            Connected as {user} 👋
        </NotifStyle>
    )
}

export default Notif;