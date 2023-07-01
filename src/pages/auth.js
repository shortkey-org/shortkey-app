import { useEffect } from "react";
import { useAuth } from "../contexts/AuthCtx";

export default function AuthPage() {

    const authCtx = useAuth();

    useEffect(() => {
        let url = document.location.href;
        let u = new URL(url);
        let status = u.searchParams.get("s");
        let token = u.searchParams.get("t") || u.searchParams.get("amp;t");
        
        if(status === '1' && token) {
            authCtx.setAccessToken(token);
            setTimeout(() => {
                window.location.href = "/";
            }, 200);
        }
        else
        {
            window.alert("Login failed, status: ", status);
            window.location.href = "/";
        }

    }, []);

    return (
        <span>Please wait...</span>
    );
}