import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Nome Cognome — Software Engineer"
      description="Portfolio personale di Nome Cognome, software engineer.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Software engineer</p>
          <h1>
            Costruisco prodotti <span>semplici</span> e solidi.
          </h1>
          <p className={styles.intro}>
            Sono Nome Cognome. Mi occupo di sviluppo web, architettura e
            documentazione tecnica, con attenzione all&apos;esperienza di chi
            usa e mantiene il software.
          </p>
          <div className={styles.links}>
            <Link className={styles.primaryLink} to="/docs/intro">
              Leggi la documentazione <span aria-hidden="true">↗</span>
            </Link>
            <a
              className={styles.secondaryLink}
              href="https://github.com/tuo-username"
              target="_blank"
              rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              className={styles.secondaryLink}
              href="https://www.linkedin.com/in/tuo-username/"
              target="_blank"
              rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className={styles.projects} aria-labelledby="projects-title">
          <p className={styles.sectionLabel}>Cosa trovi qui</p>
          <h2 id="projects-title">Lavoro, apprendimento e progetti.</h2>
          <div className={styles.projectGrid}>
            <article>
              <span className={styles.projectNumber}>01</span>
              <h3>Progetti</h3>
              <p>Case study concreti, con scelte tecniche e risultati.</p>
            </article>
            <article>
              <span className={styles.projectNumber}>02</span>
              <h3>Documentazione</h3>
              <p>Note tecniche e guide scritte per essere riutilizzate.</p>
            </article>
            <article>
              <span className={styles.projectNumber}>03</span>
              <h3>Contatti</h3>
              <p>
                <a href="mailto:tua-email@example.com">Scrivimi via email</a>{' '}
                per parlare di una nuova opportunità.
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
