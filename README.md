# ML Study Guide

A static study site based on the Machine Learning Study Guide deck. Search the curriculum, mark topics complete, or move the slider in the house-price regression lab. Progress is stored in the current browser.

## Run locally

Open `index.html` in a browser. No dependencies or build step are required.

## Publish

1. Extract the ZIP and push the extracted files to your GitHub repository with `index.html` at the repository root.
2. In Netlify, import the repository and select the branch you want to publish. The publish directory is configured in `netlify.toml`. Leave the build command empty.
3. Deploy the site. For a manual deploy, use the extracted folder containing `index.html`.

## Files

- `index.html` and `style.css` define the layout and visual design.
- `topics.js` contains the curriculum and definitions.
- `app.js` handles search, filters, progress and the regression lab.


