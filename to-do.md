# To Do:
### Needs (by priority):
1) Present markdown in devblog dynamically
2) Dockerize entire app and host app using NginX

## 1 - Present Markdown Dynamically
Inside the source folder, there will be a content folder holding all markdown
files, in which new markdown files can be easily added.
```
packages/button
├── src
│   ├── assets
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── content
        ├──devblog1.md
        ├──devblog2.md
        ├──etc...

```
In my devblog page, the title and image for all my content will be available.
Upong clicking the title, the user will shown the specific markdown file, which
will then give the option for the user to send the file to others using a link.

## 2 - Dockerize and host
Simply put, the app needs to be available in a docker container so it can be 
hosted and ran on my home server with nginx. This will allow me to send traffic
through cloudflare so my domain can be used and the website can be accessed with
HTTPS. 