import dotenv from "dotenv"
dotenv.config()

export const TOKEN = process.env.TOKEN || ""
export const PREFIX = "_"

// https://discord.com/oauth2/authorize?client_id=804428505017221120&scope=bot
