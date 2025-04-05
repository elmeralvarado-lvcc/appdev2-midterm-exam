const fs = MISSING_CODE;

// Step 1: Create and write to a file
fs.MISSING_CODE("message.txt", MISSING_CODE, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }

  console.log("File created and data written successfully.");

  // Step 2: Read the contents of the file
  fs.MISSING_CODE(MISSING_CODE, MISSING_CODE, (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    console.log("File contents:", MISSING_CODE);

    // Step 3: Delete the file
    fs.MISSING_CODE("message.txt", (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
        return;
      }
      console.log("File deleted successfully.");
    });
  });
});
