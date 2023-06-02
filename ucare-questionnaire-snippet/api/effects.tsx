import { useEffect, useState } from "react";
import { login, fetchContents, LoginResponse } from "./login";
import { QuestionnaireListing } from "../model/QuestionnaireListing";

export const useFetchQuestionnaires = (): QuestionnaireListing[] => {
  const [questionnaires, setQuestionnaires] = useState<QuestionnaireListing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: LoginResponse | null = await login();

        if (response) {
          await fetchContents(response.accessToken);
          // Perform additional actions with the fetched data
          
          // Example parsing logic (replace with your own)
          const parsedQuestionnaires: QuestionnaireListing[] = [
            {
              title: "Questionnaire 1",
              creationDate: "2022-01-01",
              author: "John Doe",
              status: "Active",
            },
            {
              title: "Questionnaire 2",
              creationDate: "2022-02-01",
              author: "Jane Smith",
              status: "Inactive",
            },
          ];

          setQuestionnaires(parsedQuestionnaires);
        }
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return questionnaires;
};


