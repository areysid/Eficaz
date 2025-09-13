import { getCeipalToken } from "./ceipal";
import axios from "axios";

export default async function handler(req, res) {
  const page = req.query.page || 1;
  try {
    const accessToken = await getCeipalToken();
    const response = await axios.get(
      `https://api.ceipal.com/v1/getJobPostingsList?page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json({ status: "OK", jobs: response.data.jobs });
  } catch (err) {
    res.status(500).json({ status: "ERROR", message: err.message });
  }
}
