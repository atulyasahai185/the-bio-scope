import { GoogleGenAI } from "@google/genai";
import { GenAI_APIKey } from "../../utilis/fetchAPI";

const GenAI = new GoogleGenAI({
  apiKey: GenAI_APIKey,
  dangerouslyAllowBrowser: true,
});

export default GenAI;
