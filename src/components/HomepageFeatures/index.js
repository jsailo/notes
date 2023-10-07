import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/notes/blog">Jump to the blog</a>,
    Svg: require('@site/static/img/view_the_blog.svg').default,
    description: (
      <>
        Not much to see in this section ATM. Really!
      </>
    ),
  },
  {
    title: <a href="/notes/docs/category/rebased--soapbox">Soapbox & Rebased tutorials</a>,
    Svg: require('@site/static/img/rebased_soapbox.svg').default,
    description: (
      <>
        Learnings from hosting a personal Fediverse site based on Rebased and Soapbox.
      </>
    ),
  },
  {
    title: <a href="/notes/docs/category/docusaurus">Docusaurus tutorials</a>,
    Svg: require('@site/static/img/docusaurus_tutorials.svg').default,
    description: (
     <>
        Learnings over the course of installing Docusaurus.
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
