const Handlebars = require("handlebars");
const fs = require("fs");

function getTemplate() {
  return new Promise((resolve) => {
    fs.readFile("./src/template.html", "utf-8", (err, html) => resolve(html));
  });
}

async function createHTML(employees) {
  const template = await getTemplate();
  const HTML = Handlebars.compile(template)(employees);
  fs.writeFile("./dist/index.html", HTML, afterWrite);
}

function afterWrite(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
}

module.exports = createHTML;
