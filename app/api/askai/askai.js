import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
   apiKey: String(process.env.OPENAI_API_KEY),
});

const sentPromptToAi = async(myPrompt) => {
    const ask = "If they ask you what's your name, you can say I am easy chat now you can answer bellow question /n"
    const newPrompt = ask+ myPrompt
    try {
       const completion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: newPrompt }],
          model: 'gpt-3.5-turbo',
       });
    
       const choice = completion.choices && completion.choices[0];
       return choice.message.content
    } catch (err) {
       return
false
    }
}