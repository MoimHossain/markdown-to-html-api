
const MarkdownIt = require('markdown-it');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const md = new MarkdownIt();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => response.sendFile(`${__dirname}/index.html`));

app.post('/convert', (request, response) => {
    const postBody = request.body;
    const html = md.render(postBody.markdown);
    response.json({ html: html });
});

app.listen(80, () => console.info('Application running on port 80'));