import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT) {
      throw new Error("Missing GOOGLE_SERVICE_ACCOUNT environment variable");
    }

    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const SPREADSHEET_ID = "12Nrzk8Ef_OmiKO6gjK6LhrbRoGgz9OUPkMqzUfhhVzU";
    const RANGE = "Courses!A:G";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];
    if (!rows.length) return res.status(200).json([]);

    const headers = rows[0];
    const data = rows.slice(1).map((row) => {
      const obj = {};
      headers.forEach((header, i) => {
        obj[header] = row[i] || "";
      });

      // ✅ New logic: if Image URL is given, use it directly.
      // If missing, fallback to placeholder.
      if (!obj.Image || !obj.Image.startsWith("http")) {
        obj.Image = "/courses/placeholder.jpg";
      }

      return obj;
    });

    return res.status(200).json(data);
  } catch (err) {
    console.error("Error caught:", err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
