---
sidebar_position: 5
slug: modifying-the-docusaurus-front-page
title: Modifying the Docusaurus front page
---

# Modifying frontmatter texts

## Modifying texts in the home page and other places

Note: These steps are for the classic theme.

### To change the following texts:
- Easy to Use
- Focus on What Matters
- Powered by React

Open `/src/components/HomepageFeatures/index.js`, search for the texts, and save your changes.

### To change the following texts:
- My Site
- Dinosaurs are cool

1. Open `notes/docusaurus.config.js`
2. Look for the `const config` item and change the texts according to your liking.

### To change the `Docusaurus Tutorial - 5min` text:
1. Open `/src/pages/index.js` 
2. Look for the `button button--secondary button--lg` classname and change the text.

### To change the text and images in the middle of the home page:
1. Open `/src/components/HomepageFeatures/index.js` 
2. Look for the `const FeatureList` constant and change the texts in the codeblock.

### Removing the middle block
1. Open `src/pages/index.js` and look for the following block of code.

```js
      <main>
        <HomepageFeatures />
      </main>
```

2. Remove the `<HomepageFeatures />` component.


:::caution

If you are testing with `yarn start` on your local computer, stop and restart it again after removing the component. Do not remove the `const` because it is still being imported.

:::