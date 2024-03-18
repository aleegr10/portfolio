import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'Javascript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'NodeJS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Bootstrap',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    href: 'https://getbootstrap.com',
  },
  {
    name: 'Java',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    href: 'https://www.java.com',
  },
  {
    name: 'Materialize',
    img: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg',
    href: 'https://materializecss.com/',
  },
  {
    name: 'React Native',
    img: 'https://reactnative.dev/img/header_logo.svg',
    href: 'https://reactnative.dev/',
  },
  {
    name: 'Redux',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    href: 'https://redux.js.org',
  },
  {
    name: 'Webpack',
    img: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
    href: 'https://webpack.js.org',
  },
  {
    name: 'Sass',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    href: 'https://sass-lang.com/',
  },
  {
    name: 'Vue.js',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
    href: 'https://vuejs.org/',
  },
  {
    name: 'Tailwind CSS',
    img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    href: 'https://tailwindcss.com/',
  },
  {
    name: 'Next.js',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg',
    href: 'https://nextjs.org/',
  },
  {
    name: 'Angular',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg',
    href: 'https://angular.io/',
  },
  {
    name: 'Keras',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png',
    href: 'https://keras.io/',
  },
  {
    name: 'PyCharm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1024px-PyCharm_Icon.svg.png',
    href: 'https://www.jetbrains.com/pycharm/',
  },
  {
    name: 'Jupyter Notebook',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg',
    href: 'https://jupyter.org/',
  },
  {
    name: 'OpenCV',
    img: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg',
    href: 'https://opencv.org/',
  },
  {
    name: 'TensorBoard',
    img: 'https://seeklogo.com/images/T/tensorflow-logo-02FCED4F98-seeklogo.com.png',
    href: 'https://www.tensorflow.org/tensorboard',
  },
  {
    name: 'Nmap',
    img: 'https://asset.brandfetch.io/idHnSFcYKj/idj4y8Dz-_.png',
    href: 'https://nmap.org/',
  },
  {
    name: 'Wireshark',
    img: 'https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg',
    href: 'https://www.wireshark.org/',
  },
  {
    name: 'Burp Suite',
    img: 'https://www.vectorlogo.zone/logos/portswigger/portswigger-icon.svg',
    href: 'https://portswigger.net/burp',
  },
  {
    name: 'Metasploit',
    img: 'https://atomrace.com/blog/wp-content/uploads/2017/10/metasploit-logo.png',
    href: 'https://www.metasploit.com/',
  },
  {
    name: 'Snort',
    img: 'https://www.vectorlogo.zone/logos/snort/snort-icon.svg',
    href: 'https://www.snort.org/',
  },
  {
    name: 'Hadoop',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg',
    href: 'https://hadoop.apache.org/',
  },
  {
    name: 'NiFi',
    img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_nifi_logo_icon_168614.png',
    href: 'https://nifi.apache.org/',
  },
  {
    name: 'Spark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png',
    href: 'https://spark.apache.org/',
  },
  {
    name: 'Hive',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Apache_Hive_logo.svg/1138px-Apache_Hive_logo.svg.png',
    href: 'https://hive.apache.org/',
  },
  {
    name: 'Kafka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/473px-Apache_kafka.svg.png',
    href: 'https://kafka.apache.org/',
  },
  {
    name: 'Cassandra',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg',
    href: 'https://cassandra.apache.org/',
  },
  {
    name: 'Flink',
    img: 'https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png',
    href: 'https://flink.apache.org/',
  },
  {
    name: 'HBase',
    img: 'https://cdn.worldvectorlogo.com/logos/hbase.svg',
    href: 'https://hbase.apache.org/',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
    href: 'https://www.postgresql.org/',
  },
  {
    name: 'MongoDB',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
    href: 'https://www.mongodb.com/',
  },
  {
    name: 'SQLite',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg',
    href: 'https://www.sqlite.org/',
  },
  {
    name: 'Microsoft SQL Server',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Microsoft_SQL_Server_Logo.svg',
    href: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    name: 'Oracle Database',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg',
    href: 'https://www.oracle.com/database/',
  },
  {
    name: 'Redis',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
    href: 'https://redis.io/',
  },
  {
    name: 'Couchbase',
    img: 'https://www.vectorlogo.zone/logos/couchbase/couchbase-icon.svg',
    href: 'https://www.couchbase.com/',
  },
];

function About() {
  return (
    <div className={styles.me}>
      <h2>Quien soy y más sobre mi</h2>
      <p>
        ¡Hola! Me llamo Alejandro Gil, un apasionado desarrollador web con una
        sólida formación en ciberseguridad e inteligencia artificial. Mi pasión
        por la tecnología me ha llevado a explorar diferentes áreas dentro del
        inmenso mundo del desarrollo de software.
        <br />
        Desde muy joven, he sido fascinado por el potencial transformador de la
        tecnología en nuestro mundo. Opté por enfocar mi carrera en el
        desarrollo web debido a mi creencia en su capacidad para conectar
        personas y facilitar el acceso a la información. Mi formación en
        ciberseguridad ha profundizado mi comprensión de los desafíos en línea
        actuales, comprometiéndome a implementar las mejores prácticas de
        seguridad en cada proyecto para salvaguardar los datos y la privacidad
        de los usuarios.
        <br />
        Además, mi certificación en inteligencia artificial me ha abierto nuevas
        fronteras para crear soluciones innovadoras. Destaco por mi dedicación,
        creatividad y habilidades para resolver problemas, siempre en búsqueda
        de aprender y mejorar para mantenerme actualizado en las últimas
        tendencias tecnológicas. Estoy entusiasmado por continuar contribuyendo
        al campo de la tecnología y espero tener la oportunidad de colaborar en
        emocionantes proyectos futuros.
        <br /> <br />
      </p>
      <h2>Trayectoria</h2>
      <p>
        Tengo experiencia en realización de pequeños proyectos realizados con
        Slesforce y en la participación de todo proceso de una aplicación (desde
        el planteamiento inicial, extracción de funcionalidades necesarias,
        desarrollo, pruebas y evolución). Además de esto, he desarrollado la
        labor de docente en cursos online, tanto en cursos de desarrollo web,
        como ciberseguridad.
        <br />
        Busco ampliar mis conocimientos en la programación y obtener experiencia
        formando parte de un productivo y exitoso equipo. Tengo habilidad para
        adaptarme rapido a otras tecnologias. Estoy buscando un proyecto
        adecuado a mis habilidades que me permita desarrollarme, que me ponga
        nuevos retos y nuevos aprendizajes.
        <br />
        I have a basic level of English proficiency, both in speaking and
        writing.While I may need some assistance with complex topics, I&apos;m
        confident in my ability to communicate effectively and eager to further
        develop my language skills.
        <br /> <br />
      </p>
      <h2>Intereses y Hobbies</h2>
      <p>
        Soy un apasionado de la programación y estoy enfocado en ampliar mis
        conocimientos en áreas como testing, principios de clean code
        escalabilidad, etc. Además, estoy comprometido en mejorar mi nivel de
        inglés, reconociendo su importancia en el ámbito tecnológico. Estoy
        entusiasmado por seguir aprendiendo y creciendo en este campo dinámico y
        desafiante.
        <br />
        En mi tiempo libre suelo armar cubos rubik{' '}
        <img
          src="https://img.icons8.com/ios/20/000000/rubiks-cube.png"
          alt="rubik"
        />
        , ver y practicar deporte 🏀, escuchar música y jugar videojuegos 🎮.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <div className={styles.estudio}>
        <h2>
          Grado superior Desarrollo Aplicaciones Web (2020-2022) (Titulado)
        </h2>
        <h4>IES Francisco Romero Vargas</h4>
        <span>
          IES Francisco Romero Vargas - C/ Moreno Mendoza, 4, 11408 Jerez de la
          Frontera, Cádiz
        </span>
        <p>
          Durante mis estudios obtuve capacidad de responsabilidad, esfuerzo y
          sacrificio, forme parte de equipos de trabajo y trabaje en proyectos
          de desarrollo web. Además, aprendí varios lenguajes de programación
          como JavaScript, Java, PHP, etc.
        </p>
      </div>
      <div className={styles.estudio}>
        <h2>
          Curso de especialización en Ciberseguridad (2022-2023) (Titulado)
        </h2>
        <h4>IES Francisco Romero Vargas</h4>
        <span>
          IES Francisco Romero Vargas - C/ Moreno Mendoza, 4, 11408 Jerez de la
          Frontera, Cádiz
        </span>
        <p>
          Durante mis estudios obtuve capacidad de responsabilidad, esfuerzo y
          sacrificio, forme parte de equipos de trabajo y trabaje en proyectos
          de ciberseguridad. Además, aprendí a como hacer proyectos más seguros,
          usando mayormente Python. También aprendí a como gestionar y asegurar
          redes, para poder tener una conexión segura y sólo entre los
          departamentos de la empresa.
        </p>
      </div>
      <div className={styles.estudio}>
        <h2>
          Curso de especialización en Inteligencia Artificial y Big Data
          (2023-2024) (Titulado)
        </h2>
        <h4>IES Rafael Alberti</h4>
        <span>
          IES Rafael Alberti - C/ Amiel, s/n, 11012 Barriada de la Paz, Cádiz
        </span>
        <p>
          Durante mis estudios obtuve capacidad de responsabilidad, esfuerzo y
          sacrificio, forme parte de equipos de trabajo y trabaje en proyectos
          de inteligencia artificial. Además, aprendí a crear y usar modelos de
          IA con python. También aprendí a manejar y usar grandes cantidades de
          datos con herramientas como Nifi, Spark, Hadoop, etc.
        </p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <>
      <div>
        <h2>DESARROLLADOR WEB</h2>
        <p>
          - Prácticas de empresa en Vanguard Cloud & Innovation con la
          tecnología Salesforce. Marzo 2022 - Junio 2022
        </p>
      </div>
      <div>
        <h2>DOCENTE CURSOS ONLINE</h2>
        <p>- SEGURIDAD INFORMÁTICA Y FIRMA DIGITAL, 400 HORAs</p>
        <p>- PROTECCIÓN DE EQUIPOS EN LA RED, 20 HORAS</p>
        <p>- DESARROLLO WEB PARA COMERCIO ELECTRÓNICO, 450 HORAS</p>
      </div>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>CV Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
      <button type="button" className="boxShadow" disabled>
        DESCARGA CV
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Actualizado el 5 de Marzo, 2024</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="Alejandro Gil Profile"
              className={styles.img}
            />
            <h1>Alejandro Gil</h1>
            <a
              title="Buy me a coffe"
              className={styles.supportBtn}
              href={constants.profilesUrls.buymeacoffee}
              target="_blank"
              rel="noreferrer noopener"
            >
              APOYAME
            </a>
            <p>Desarrollo web, IA y Ciberseguridad con ❤️ y ☕️</p>
            <p>&#x1F1EA;&#x1F1F8;</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="formación"
                >
                  formación
                </button>
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experiencia"
                >
                  Experiencia
                </button>
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
              </li>
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
