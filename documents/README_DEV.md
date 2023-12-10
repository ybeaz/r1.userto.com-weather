# README SEP Academy React Typescript UI Project

## Decisions made

## How to section, architecture / development notes

### NOT USED NOW. How to build and deploy web.yourails.com

@link https://github.com/jsdelivr/jsdelivr // Link to CDN that works with GitHub.com
@link https://docs.expo.dev/distribution/publishing-websites/

- In VS Code, `~/Dev/r1.userto.com-weather/deployment`,
  - open `/deployment/index-weather.html`
  - !!! change version in links for `bundle.min.js` and `main.bundle.min.js`
- In VS code change versions (for example `"version": "0.60.0",`) in
  `/Users/admin/Dev/r1.userto.com-weather/package.json`
- Building
  `yarn export:web`: To build. It runs script from package.json file
- In Browser authorise at https://www.npmjs.com/ and check previous `r1.userto.com-weather` package version
- In Terminal
  - `cd ~/Dev/r1.userto.com-weather/web-build/ && eval $(ssh-agent -s); ssh-add ~/.ssh/2020-10-19-rsa && npm init && npm publish`,
    go through steps and change version to the next one
- In ForkLift copy
  - copy `/web-build/index.html` to `r1.userto.com/www/weather/index.html`
- In Browser, new Tab,
  - `shift`+`command`+`delete` and remove cache
  - check `https://r1.userto.com/weather/`
- Check version in https://www.npmjs.com/
