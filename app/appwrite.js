import { Account, Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("673ea249001069e403d8");

export const account = new Account(client);
export { ID } from "appwrite";
