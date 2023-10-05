import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/notes/blog">Jump to the blog</a>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Don't be bothered. Not much to see in this section. Really!
      </>
    ),
  },
  {
    title: <a href="/notes/docs/category/rebased-and-soapbox">Soapbox & Rebased tutorials</a>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sharing some of my learnings from hosting a Fediverse site based on Rebased and Soapbox. Rebased is a fork of Pleroma.
      </>
    ),
  },
  {
    title: <a href="/notes/docs/category/docusaurus">Docusaurus tutorials</a>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
     <>
        Some learnings over the course of installing Docusaurus.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
