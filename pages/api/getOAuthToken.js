// pages/api/getOAuthToken.ts
import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tokens = await oauth2Client.refreshToken(process.env.REFRESH_TOKEN);
    const accessToken = tokens.credentials.access_token;
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch access token" });
  }
}
