import { useEffect, useState } from "react";
import { login, fetchContents, LoginResponse } from "./api";
import { QuestionnaireListing } from "../model/QuestionnaireListing";

export const useFetchQuestionnaires = (): QuestionnaireListing[] => {
  const [questionnaires, setQuestionnaires] = useState<QuestionnaireListing[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: LoginResponse | null = await login();

        if (response) {
          const accessToken = response.accessToken;
          const fetchedQuestionnaires = await fetchContents(accessToken);
          setQuestionnaires(fetchedQuestionnaires);
        }
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return questionnaires;
};
