# maps_ts
The little app to practice in google maps and markers.
## Setup
- you need install `npm install -g parcel-bundler`, you'll be able to run typescript code without configuring tsconfig and other files.
### Setup google key:
1. First of all you need generate a Google dev project.
    - Create new project or if you want use exciting one.
    - In library we should find maps JavaScript api.
    - console: https://console.developers.google.com/
2. Enable google maps support inside the project
3. Generate api key
4. Add google maps script in the project.
```
    <script src="https://maps.googleapis.com/maps/api/js?key=yout api key on step 3"></script>
```

If setup was correct, you should see in developer console -> Network -> JS. Name of js?key=your_api_key with status code 200.

To start project `parcel index.html`