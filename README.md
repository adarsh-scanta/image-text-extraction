# Image Text Extraction

This repository contains a Node.js script for extracting text from images and parsing the extracted text to obtain specific information. The script utilizes optical character recognition (OCR) to extract text from images and outputs the extracted information in CSV format.

## Assignment Task

The assignment task involves the following steps:

1. **Read Input Images**: Provide input images containing the relevant text you want to extract. Place these images in the `images/` directory.

2. **Extract Selective Text**: Extract specific information from the images, such as check marks on checkboxes and text written on lines.

3. **Output Key-Value Pairs in CSV Format**: Organize the extracted information into key-value pairs and output it in CSV format. Fields to include are `Name`, `Husband Name/Father's Name`, `House Number`, `Age`, and `Gender`.

## Installation

1. **Clone the Repository**: Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/image-text-extraction.git
   ```

2. **Install Dependencies**: Navigate into the cloned directory and install the required dependencies using npm:

   ```bash
   cd image-text-extraction
   sudo apt-get install tesseract-ocr
   npm install
   ```

## Usage

1. **Place Your Image Files**: Put your image files containing the text you want to extract into the `images/` directory within the repository.

2. **Edit `index.js`**: Customize the `index.js` file to specify the path to your image file(s) and any other settings you need to adjust.

3. **Run the Script**: Execute the Node.js script using the following command:

   ```bash
   node index.js
   ```

4. **Check Output**: Once the script finishes running, you'll find the extracted information saved in an `output.csv` file in the root directory of the repository.

## Dependencies

- `node-tesseract-ocr`: Library for optical character recognition (OCR) to extract text from images.
- `fs`: Built-in module in Node.js used for file system operations.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request to the repository.
