import OpenAI from 'openai';
import { netflix_gpt_key } from './constants';

const openAi = new OpenAI({
  apiKey: netflix_gpt_key ,
  dangerouslyAllowBrowser:true
  // This is the default and can be omitted
});
export default openAi