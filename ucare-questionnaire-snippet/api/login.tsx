import axios, { AxiosResponse } from "axios";

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

export async function fetchContents(accessToken: string): Promise<void> {
  try {
    const response: AxiosResponse<any> = await axios.get(
      "https://beta.u-careplatform.se/api/contents/",
      {
        params: {
          type: 20, // Ensure we only fetch the Questionnaire content (type 20)
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const contents = response.data;
    console.log("Contents:", contents);
  } catch (error) {
    console.error("API request error:", error);
  }
}
