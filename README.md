# PAWP FE

## Create a React file "uploader"

See uploader.png in root directory
Create a SPA for uploading a list of images
Files can be "upoaded" on the right form ("upload" = just read into a data url and saved locally https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)
Images are then automatically displayed in a list to the right.
Images in the list to the right can be removed via clicking a delete button. Only the deleted image should be removed from the list.
State does NOT need to be maintained between page refresh.

## Project Info

Project is an already configured Gatsby project (you dont need to know this, just the boilerplate for serving the webpage)
Start project by running `yarn develop` or `npm run develop` (dont worry about `build` and `serve`. `clean` will remove node modules and cache, but shouldnt be nessecary)
Project will automatically be served at http://localhost:8000/

Choose your preferred technology.

- Supports javascript / typescript
- Supports css / styled-components (examples given, use one or the other)
- Has eslint & prettier

## Other info

React components should be added in App.tsx (or remove and create App.js for javascript)
For css, make it usuable. Doesnt need to be pretty.
Utlize basic ARIA accessible rules for buttons and images
