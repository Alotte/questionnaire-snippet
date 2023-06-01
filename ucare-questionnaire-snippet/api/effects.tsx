import { useEffect } from "react";
import { login, fetchContents, LoginResponse } from "./login";

//Example function to access and fetch all Questionnaires from the API
export const useFetchQuestionnaires = () => {
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response: LoginResponse | null = await login();
            
            if (response) {
            await fetchContents(response.accessToken);
            // Perform additional actions with the fetched data
            }
        } catch (error) {
            // Handle errors
            console.error("Error:", error);
        }
        };

        fetchData();
    }, []);
};
