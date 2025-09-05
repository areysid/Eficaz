// api/reviews.js
export default async function handler(req, res) {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!placeId || !apiKey) {
      return res.status(500).json({ error: "Missing GOOGLE_PLACE_ID or GOOGLE_MAPS_API_KEY" });
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=reviews,rating&key=${encodeURIComponent(apiKey)}`;

    const r = await fetch(url);
    const data = await r.json();

    // pass through Google's response
    return res.status(r.ok ? 200 : r.status).json(data);
  } catch (err) {
    console.error("Error in /api/reviews:", err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
