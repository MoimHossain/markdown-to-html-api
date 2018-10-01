# markdown-to-html-api
A docker container that publishes API to convert a markdown file to it's HTML representation

# How to run?

From command line,

```bash
docker run -p 8080:80 moimhossain/md-2-html
```

Now the server is running. Invoke API (i.e. with PostMan for instance) as:

```
POST http://localhost:8080/convert
```

Body Json syntax:

```
{ "markdown" : "__hello world__" }
```

Will generate response ```200 OK``` with following Json body: 

```
{
    "html": "<p><strong>hello world</strong></p>\n"
}
```

### Have fun!