import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/about.module.css";
import Head from "next/head";
import skills from "../public/skills";

const about = () => {
  return (
    <>
      <Head>
        <title>About Me | Lwazi Think Booi</title>
        <meta
          name='description'
          content='Here you can find more about my expirience as a web developer.'
        />
      </Head>
      <Navbar />
      <div className='pageContainer'>
        <header>
          <div className='shortLine'></div>
          <h1 className='pageHeader'>About</h1>
        </header>
        <main className={styles.container}>
          <section className='text'>
            <p>
              Hi! My name is <strong>Lwazi Think</strong> and I'm a front-end web
              developer from Johannesburg, South Africa.
            </p>
            <p>
              I have enrolled in an extensive full stack web delopment bootcamp with HyperionDev.
            </p>
            <p>
              Since then I have acquired a wide knowledge of the basics of web development:{" "}
              <strong>HTML, CSS, and Javascript</strong>.
            </p>
            <p>
              In addition, I have specialized knowledge in{" "}
              <strong>
                Material-UI, Bootstrap, React.js, and Next.js
              </strong>
              .
            </p>
            
            <p>
              Other things worth mentioning:{" "}
              <ul>
                <li>
                  I follow the best <strong>SEO</strong>{" "}
                  <span className={styles.smallText}>
                    (Search Engine Optimization)
                  </span>{" "}
                  practice, which means that I write a{" "}
                  <strong>semantic code</strong>, handle everything that Google
                  loves to see in websites, and connect the websites to Google
                  platforms.
                </li>
                <li>
                  I follow <strong>UI/UX</strong>{" "}
                  <span className={styles.smallText}>
                    (User Interface / User Experience)
                  </span>{" "}
                  principles, meaning that the websites I build will be more
                  pleasant to use and more engaging.
                </li>
              </ul>
            </p>
          </section>

          <section className={styles.skilles}>
            <div className={styles.skillesHeader}>
              <h2>Skills & Tools:</h2>
            </div>
            <div className={styles.skillesList}>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.id}>
                    <img
                      className={styles.skillImg}
                      src={skill.img}
                      alt={skill.name}
                    />
                    <h4>{skill.name}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default about;