import { useEffect, useState } from "react";
import { login, fetchContents, saveQuestionnaire,  LoginResponse } from "./api";
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



export const useSaveQuestionnaire = () => {
  const saveQuestionnaireData = async (questionnaireTitle: string): Promise<void> => {
    console.log("Questionnaire title in useSaveQUestionnaire " + questionnaireTitle)
      try {
        const response: LoginResponse | null = await login();

        if (response) {
          const accessToken = response.accessToken;
        await saveQuestionnaire(accessToken, questionnaireTitle);
        console.log("Questionnaire saved successfully.");
        } 
      } catch (error) {
        console.error("Failed to save questionnaire:", error);
      }
  };

  return saveQuestionnaireData;
};

export const useSaveQuestionnaire2 = (questionnaireTitle: string): void => {
  useEffect(() => {
    const saveData = async (): Promise<void> => {

      try {
        const response: LoginResponse | null = await login();

        if (response) {
          const accessToken = response.accessToken;
        await saveQuestionnaire(accessToken, questionnaireTitle);
        console.log("Questionnaire saved successfully.");
        } 
      } catch (error) {
        console.error("Failed to save questionnaire:", error);
      }
    };

    saveData();
  }, [questionnaireTitle]);
};