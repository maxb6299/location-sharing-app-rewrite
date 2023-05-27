# location-sharing-app

![Alt text](/screenshot.jpg?raw=true)

The website converts the latitude and longitude to an address using the Google Maps API. Then, once the user submits this data, it is sent via a POST request to a node.js server, where in a .json file, it is appended to an array of other user data objects. Then using the data stored in the .json file, the website displays a simple table as well as a map with markers for each location of each user stored in the json file. The user can click on the markers to get more data on the user located there.

This Vue-based web application uses a form and HTML5 geolocation to gather necessary data from the user (name, phone number, location). The backend is made with node.js. It also utilizes the Google Maps API.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
