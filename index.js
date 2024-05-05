const fs = require("fs");
const { recognize } = require("node-tesseract-ocr");
const { openai } = require("./openai_config.js");

async function extractTextFromImage(imagePath) {
  const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  };

  const text = await recognize(imagePath, config);
  return text;
}

function writeCSV(data) {
  // File path to save the CSV
  const filePath = "output/data.csv";

  // Write the data to the CSV file
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing to CSV file:", err);
    } else {
      console.log("CSV file saved successfully.");
    }
  });
}

async function main() {
  const imagePath = "images/test1.png"; // Replace with the path to your image file
  const text = await extractTextFromImage(imagePath);

  query = `data: ${text.trim()}
          Prompt: This is the electoral data, can you please format this into the a csv fromat in given order including header
          Output format: SrNo, EPIC, Name, Husband Name/Fathers Name, House Number, Age, Gender
            `;
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-3.5-turbo",
  });
  res = chatCompletion.choices[0].message.content;

  // Output CSV
  writeCSV(res);
}

main();
