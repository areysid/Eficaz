import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT) {
      throw new Error("Missing GOOGLE_SERVICE_ACCOUNT environment variable");
    }

    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const SPREADSHEET_ID = "12Nrzk8Ef_OmiKO6gjK6LhrbRoGgz9OUPkMqzUfhhVzU";
    const RANGE = "Courses!A:G";

    const client = await auth.getClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      auth: client,
    });

    const rows = response.data.values || [];
    if (!rows.length) return res.status(200).json([]);

    const headers = rows[0];
    const data = rows.slice(1).map((row) => {
      const obj: Record<string, string> = {};
      headers.forEach((header, i) => {
        obj[header] = row[i] || "";
      });

      // Convert Google Drive links to direct links
      if (obj.Image) {
        const match = obj.Image.match(/\/d\/(.*?)\//);
        if (match && match[1]) {
          obj.Image = `https://drive.google.com/uc?export=view&id=${match[1]}`;
        }
      } else {
        // If Image cell is blank, generate path from Title
        const fileName = obj.Title.replace(/\s/g, "") + ".png";
        obj.Image = `/courses/${fileName}`;
      }

      return obj;
    });

    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
