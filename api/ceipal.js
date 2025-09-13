// api/ceipal.js
import axios from "axios";

// --- Get access token ---
export async function getCeipalToken() {
  try {
    const authResponse = await axios.post(
      "https://api.ceipal.com/v1/createAuthtoken",
      {
        email: "neha@eficazindia.com",
        password: "Neha@05260",
        api_key: "5d12740ec96394c3757de779e900dfe09cf6c9a5697a79cda0af3381ee1a0784",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return authResponse.data.access_token;
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
}

// --- Fetch all job postings (all pages) ---
export async function getJobPostings() {
  try {
    const accessToken = await getCeipalToken();

    // Fetch first page
    const firstPage = await axios.get(
      "https://api.ceipal.com/v1/getJobPostingsList",
      { headers: { "Authorization": `Bearer ${accessToken}` } }
    );

    const jobsList = firstPage.data.results ?? [];
    const totalPages = firstPage.data.num_pages ?? 1;

    // Fetch remaining pages
    for (let page = 2; page <= totalPages; page++) {
      const pageRes = await axios.get(
        `https://api.ceipal.com/v1/getJobPostingsList/?page=${page}`,
        { headers: { "Authorization": `Bearer ${accessToken}` } }
      );
      jobsList.push(...(pageRes.data.results ?? []));
    }

    // Deduplicate by ID
    const uniqueJobs = Array.from(
      new Map(jobsList.map(job => [job.id, job])).values()
    );

    return uniqueJobs;
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
}

// --- Vercel API handler ---
export default async function handler(req, res) {
  try {
    const jobs = await getJobPostings();
    res.status(200).json({ status: "OK", jobs });
  } catch (err) {
    res.status(500).json({ status: "ERROR", message: err.message });
  }
}
