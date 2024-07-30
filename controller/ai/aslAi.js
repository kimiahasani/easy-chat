import OpenAI from 'openai';

process.loadEnvFile();

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

export const askToAi = async (myPrompt) => {
   const qqq =
   'if they ask you what is your name answer: my name is Easy Chat AI and then answer bellow question';
   const newPrompt = qqq + myPrompt;
   try {
      const completion = await openai.chat.completions.create({
         messages: [{ role: 'user', content: newPrompt }],
         model: 'gpt-3.5-turbo',
      });

      const choice = completion.choices && completion.choices[0];
      return choice.message.content;
   } catch (err) {
      return false;
   }
};
