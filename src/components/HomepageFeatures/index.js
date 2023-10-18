import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Web Development ',
    Svg: require('@site/static/img/undraw_web_development_0l6v.svg').default,
    description: (
      <>
       My Life time experience css tips and tricks that I learned from various websites
      </>
    ),
  },
  {
    title: 'Artificial Intelligence',
    Svg: require('@site/static/img/undraw_artificial_intelligence_re_enpp.svg').default,
    description: (
      <>
       Learn AI related concepts fun and easy way
      </>
    ),
  },
  {
    title: 'React Special',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
