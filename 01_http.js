const http = MISSING_CODE;

const server = http.MISSING_CODE((req, res) => {
  if (req.MISSING_CODE === "/") {
    // Respond with current date and time in JSON format
    const date = new MISSING_CODE();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ date: date.toISOString() }));
  } else if (req.MISSING_CODE === "/hello") {
    // Respond with a simple greeting message
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(MISSING_CODE);
  } else {
    // Handle unknown routes with a 404 error
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

// Server listens on port 3000
server.listen(MISSING_CODE, () => {
  console.log("Server is listening on port 3000...");
});
