import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const credentialsPath = path.join(__dirname, 'credentials.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

const { client_id, client_secret, redirect_uris } = credentials.web;
const redirect_uri = redirect_uris[0];

export const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
export const SCOPES = ['https://www.googleapis.com/auth/drive.file'];