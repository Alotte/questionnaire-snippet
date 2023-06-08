import { useEffect, useState } from "react";
import { login, fetchContents, saveQuestionnaire,  Cookies } from "./api";
import { QuestionnaireListing } from "../model/QuestionnaireListing";

//Not used anymore
export const useFetchQuestionnaires = (): QuestionnaireListing[] => {
  const [questionnaires, setQuestionnaires] = useState<QuestionnaireListing[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: Cookies | null = await login();

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

export  const useSaveQuestionnaire = async (questionnaireTitle: string): Promise<void> => {
      try {
        const response: Cookies | null = await login();
        
        if (response) {
          const accessToken = response.accessToken;
        await saveQuestionnaire(accessToken, questionnaireTitle); 
        } 
      } catch (error) {
        console.error("Failed to save questionnaire:", error);
      }
  };

