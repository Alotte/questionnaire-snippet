import axios, { AxiosResponse } from "axios";
import { QuestionnaireListing } from "../model/QuestionnaireListing";
import { APIQuestionnaire } from "../model/APIQuestionnaire";

export interface Cookies {
  accessToken: string;
  refreshToken: string;
}

export async function login(): Promise<Cookies | null> {
  try {
    const response: AxiosResponse<any> = await axios.post(
      "https://beta.u-careplatform.se/api/accounts/login/",
      {
        username: "test_r",
        password: "test@1234",
      }
    );

    // Store the cookies for subsequent requests

    const access: string = response.data.data.access;
    const refresh: string = response.data.data.refresh;
 
    

    return {
      accessToken: access,
      refreshToken: refresh,
    };
  } catch (error) {
    console.error("Login failed", error);
    return null;
  }
}


//Fetching Questionnaire data.
export async function fetchContents(accessToken: string): Promise<QuestionnaireListing[]> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      'https://beta.u-careplatform.se/api/contents/',
      {
        params: {
          type: 20, // Ensure we only fetch the Questionnaire content (type 20)
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const contents = response.data.results;

    if (!Array.isArray(contents)) {
      throw new Error('Invalid response format: data is not an array');
    }

    const parsedQuestionnaires: QuestionnaireListing[] = contents.map((item: any) => {
      if (!item.name || !item.creation_date) {
        throw new Error('Invalid response format: missing required properties');
      }

      const date = item.creation_date.slice(0, 10); // Extract the date portion

      return {
        title: item.name,
        creationDate: date,
        author: 'Unknown', //Question: There is no author property on the API, which is confusing.
        status: 'Active', //Question: There is no status property on the API.
      };
    });

    return parsedQuestionnaires;
  } catch (error) {
    console.error('API request error:', error);
    return [];
  }
}

// Format the QuestionnaireListing data to match the API structure
function formatQuestionnaireData(title: string, id: number): APIQuestionnaire {

  return {
    children: [],
    depth: 0,
    id: id + 1,
    is_deleted: false,
    language: "SE", // Fill in the appropriate value
    media: null,
    name: title,
    number_child: 0,
    parent: null,
    path: null,
    placeholder: 0,
    position: 8,
    properties: {},
    study: 3,
    type: 20 // Assuming the type is always 20 for questionnaires
  };
}

export async function saveQuestionnaire(accessToken: string, questionnaireTitle: string): Promise<any> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      "https://beta.u-careplatform.se/api/contents/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const contents = response.data.results;
    const currentItemCount = Array.isArray(contents) ? contents.length : 0;
    const formattedData = formatQuestionnaireData(questionnaireTitle, currentItemCount);

    const saveResponse: AxiosResponse<any> = await axios.post(
      "https://beta.u-careplatform.se/api/contents/",
      formattedData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return saveResponse.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}
