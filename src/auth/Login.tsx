import axios from "axios";
import { useState } from "react";
import { urlAccounts } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { authenticationResponse, userCredentials } from "./auth.model";
import AuthForm from "./AuthForm";

export default function Login()
{
    const [errors, setErrors] = useState<string[]>([]);

    async function login(credentials: userCredentials)
    {
        try
        {
            setErrors([]);
            const response = await axios.post<authenticationResponse>(`${urlAccounts}/login`, credentials);
            console.log(response.data);
        }
        catch (error: any)
        {
            setErrors(error.response.data);
        }
    }
    return (
        <>
            <h3>Login</h3>
            <DisplayErrors errors={errors} />
            <AuthForm
                model={{ email: '', password: '' }}
                onSubmit={async values => await login(values)}
            />
        </>
    )
}