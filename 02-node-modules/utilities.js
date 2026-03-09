import fs from "fs";

/**
 * Reads a JSON file and returns it as a JavaScript value
 * @param {string} filename 
 * @returns {any} Parsed JSON (usually object or array)
 */
export function readFromJsonFile(filename) {
    // fs.readFileSync gives a buffer (raw bytes)
    const rawBuffer = fs.readFileSync(filename);

    // Convert Buffer -> string so JSON.parse can read it
    const rawText = rawBuffer.toString();

    // Convert JSON string -> real JS object/array
    const parsedJson = JSON.parse(rawText);

    return parsedJson;
}

/**
 * Writes JS data (object/array) to JSON file
 * @param {string} filename - The name of the JSON file to write to
 * @param {any} data - the JS object/array you want to save
 * @returns {void}
 */
export function writeToJsonFile(filename, data) {
    // Convert JS object/array -> JSON string
    const stringToWrite = JSON.stringify(data, null, 2);

    // Save the string into the file
    fs.writeFileSync(filename, stringToWrite);
}