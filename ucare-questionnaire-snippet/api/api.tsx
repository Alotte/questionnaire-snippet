import axios, { AxiosResponse } from "axios";
import { QuestionnaireListing } from "../model/QuestionnaireListing";

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export async function login(): Promise<LoginResponse | null> {
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

    console.log("Access Token:", access);
    console.log("Refresh Token:", refresh);

    return {
      accessToken: access,
      refreshToken: refresh,
    };
  } catch (error) {
    console.error("Login failed", error);
    return null;
  }
}


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
    console.log('Contents:', contents);

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