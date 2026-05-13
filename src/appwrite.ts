import { Account, Client, TablesDB } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);

export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const NOTES_TABLE_ID = import.meta.env.VITE_APPWRITE_NOTES_TABLE_ID;
