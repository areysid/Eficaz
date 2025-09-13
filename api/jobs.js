// api/jobs.js
import axios from "axios";
import { getCeipalToken } from "./ceipal.js"; // correct relative path

export async function getJobPostings() {
  try {
    const accessToken = await getCeipalToken();

    const response = await axios.get(
      "https://api.ceipal.com/v1/getJobPostingsList",
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );

    console.log("Job Postings:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching job postings:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
}
