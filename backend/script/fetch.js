import OpenAI from "openai";
import fs from 'fs'


// Replace 'your_actual_api_key' with your OpenAI API key
const apiKey = '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';
const fileContent = fs.readFileSync('./bill.txt', 'utf-8');

/**
 * This function generates the total and purpose of a bill from the OpenAI API.
 */
async function generateBillTotalAndPurpose(billText) {
  const openai = new OpenAI({ apiKey });

  // Create a completion request.
  const completionRequest = {
    model: "gpt-3.5-turbo-instruct",
    prompt: billText,
    max_tokens: 100, // Adjust max_tokens as needed
    temperature: 0, // Adjust temperature as needed
  };

  // Send the completion request to the OpenAI API.
  try {
    const completion = await openai.completions.create(completionRequest);

    // Get the completion text from the OpenAI response.
    const completionText = completion.choices[0].text;

    // Print completionText for debugging.
    console.log("Completion Text:", completionText);

    // Adjust the regular expression based on the actual response format.
    const regex = /\[([^\]]+)]/; // Example: Match anything between [ and ]
    const match = completionText.match(regex);

    if (!match) {
      throw new Error("Invalid format in completionText");
    }

    console.log("Matched values:", match[1]);

    // Extract values using the simplified regular expression.
    const [total, purpose] = match[1].split(",").map((value) => value.trim());

    return [parseFloat(total), purpose.replace(/"/g, "")];
  } catch (error) {
    throw new Error(`Error in OpenAI API request: ${error.message}`);
  }
}

// Example usage:
const billText = `forget all the bill i send before
this is a new bill for which I spend money on. 
${fileContent}
give me what is the total expense for this bill and what is this bill for, like what did i do with the money like did i use this for like food, grocery or others etc.. NOTE : give me the output in an array format... that is like [total, what is this for] ...ex:[7000, food]
`;

try {
  const [total, purpose] = await generateBillTotalAndPurpose(billText);
  console.log(`Total: ${total}`);
  console.log(`Purpose: ${purpose}`);
} catch (error) {
  console.error(error.message);
}
