const fs = require("fs");

const requestListener = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello There!</title></head>");
    res.write(
      '<body><h1>General Kenobi GGGGGGG</h1><p>Testing</p></body>'
    );
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestListener;
