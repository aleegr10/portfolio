import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';
import pdf from '../../assets/curriculum.pdf';

const lenguajes = [
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'JavaScript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org/',
  },
  {
    name: 'Vue.js',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
    href: 'https://vuejs.org/',
  },
  {
    name: 'Angular',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
    href: 'https://angular.io/',
  },
  {
    name: 'C#',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'TypeScript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    href: 'https://www.typescriptlang.org/',
  },
  {
    name: 'PHP',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    href: 'https://www.php.net/',
  },
  {
    name: 'Java',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    href: 'https://www.java.com/',
  },
  {
    name: 'C++',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
    href: 'https://isocpp.org/',
  },
  {
    name: 'SQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'Django',
    img: 'https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png',
    href: 'https://www.djangoproject.com/',
  },
];

const herramientas = {
  programacion: [
    {
      name: 'Visual Studio Code',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg',
      href: 'https://code.visualstudio.com/',
    },
    {
      name: 'Git',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      href: 'https://git-scm.com/',
    },
    {
      name: 'Docker',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
      href: 'https://www.docker.com/',
    },
    {
      name: 'Node.js',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      href: 'https://nodejs.org/',
    },
    {
      name: 'MongoDB',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
      href: 'https://www.mongodb.com/',
    },
    {
      name: 'Webpack',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg',
      href: 'https://webpack.js.org/',
    },
    {
      name: 'Jupyter',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg',
      href: 'https://jupyter.org/',
    },
    {
      name: 'Visual Studio',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg',
      href: 'https://visualstudio.microsoft.com/',
    },
  ],
  IA: [
    {
      name: 'TensorFlow',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
      href: 'https://www.tensorflow.org/',
    },
    {
      name: 'PyTorch',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg',
      href: 'https://pytorch.org/',
    },
    {
      name: 'Keras',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg',
      href: 'https://keras.io/',
    },
    {
      name: 'Scikit-learn',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png',
      href: 'https://scikit-learn.org/',
    },
    {
      name: 'OpenCV',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg',
      href: 'https://opencv.org/',
    },
    {
      name: 'Pandas',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg',
      href: 'https://pandas.pydata.org/',
    },
    {
      name: 'NumPy',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg',
      href: 'https://numpy.org/',
    },
    {
      name: 'Matplotlib',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg',
      href: 'https://matplotlib.org/',
    },
  ],
  bigData: [
    {
      name: 'Apache Hadoop',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/hadoop/hadoop-original.svg',
      href: 'https://hadoop.apache.org/',
    },
    {
      name: 'Apache Spark',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1280px-Apache_Spark_logo.svg.png',
      href: 'https://spark.apache.org/',
    },
    {
      name: 'Apache Kafka',
      img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg',
      href: 'https://kafka.apache.org/',
    },
    {
      name: 'Apache Flink',
      img: 'https://flink.apache.org/img/logo/png/1000/flink_squirrel_1000.png',
      href: 'https://flink.apache.org/',
    },
    {
      name: 'HBase',
      img: 'https://cdn.worldvectorlogo.com/logos/hbase.svg',
      href: 'https://hbase.apache.org/',
    },
    {
      name: 'Apache Beam',
      img: 'https://beam.apache.org/images/logos/full-color/nameless/beam-logo-full-color-nameless-1000.png',
      href: 'https://beam.apache.org/',
    },
  ],
  ciberseguridad: [
    {
      name: 'Wireshark',
      img: 'https://www.wireshark.org/assets/images/sflogo.png',
      href: 'https://www.wireshark.org/',
    },
    {
      name: 'Metasploit',
      img: 'https://atomrace.com/blog/wp-content/uploads/2017/10/metasploit-logo.png',
      href: 'https://www.metasploit.com/',
    },
    {
      name: 'Nmap',
      img: 'https://asset.brandfetch.io/idHnSFcYKj/idj4y8Dz-_.png',
      href: 'https://nmap.org/',
    },
    {
      name: 'Snort',
      img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/snort_logo_icon_167980.png',
      href: 'https://www.snort.org/',
    },
    {
      name: 'Kali Linux',
      img: 'https://static-00.iconduck.com/assets.00/distributor-logo-kali-linux-icon-2048x2005-dki611fk.png',
      href: 'https://www.kali.org/',
    },
    {
      name: 'Nessus',
      img: 'https://storage.googleapis.com/datanyze-data//technologies/d5e69acc67124328c6b8bc330bdecb46e83b9641.png',
      href: 'https://www.tenable.com/products/nessus',
    },
  ],
};

function About() {
  return (
    <div className={styles.me}>
      <h2>Quien soy y más sobre mi</h2>
      <p>
        ¡Hola! Me llamo Alejandro Gil, un apasionado desarrollador web con una
        sólida formación en ciberseguridad e inteligencia artificial y Big Data.
        Mi pasión por la tecnología me ha llevado a explorar diferentes áreas
        dentro del inmenso mundo del desarrollo de software.
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
        Además, mi certificación en inteligencia artificial y Big Data me ha
        abierto nuevas fronteras para crear soluciones innovadoras. Destaco por
        mi dedicación, creatividad y habilidades para resolver problemas,
        siempre en búsqueda de aprender y mejorar para mantenerme actualizado en
        las últimas tendencias tecnológicas. Estoy entusiasmado por continuar
        contribuyendo al campo de la tecnología y espero tener la oportunidad de
        colaborar en emocionantes proyectos futuros.
        <br /> <br />
      </p>
      <h2>Trayectoria</h2>
      <p>
        Tengo experiencia en realización de pequeños proyectos realizados con
        Salesforce y en la participación de todo proceso de una aplicación
        (desde el planteamiento inicial, extracción de funcionalidades
        necesarias, desarrollo, pruebas y evolución). Además de esto, he
        desarrollado la labor de docente en cursos online, tanto en cursos de
        desarrollo web, como ciberseguridad.
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
      <div className={styles.skillsContainer}>
        <h2 className={styles.skills}>Lenguajes</h2>
        {lenguajes.map((skill, index) => (
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
      <div className={styles.skillsContainer}>
        <h2 className={styles.skills}>Herramientas</h2>
        <h4>Programacion</h4>
        {herramientas.programacion.map((skill, index) => (
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
        <h4>IA</h4>
        {herramientas.IA.map((skill, index) => (
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
        <h4>Big Data</h4>
        {herramientas.bigData.map((skill, index) => (
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
        <h4>Ciberseguridad</h4>
        {herramientas.ciberseguridad.map((skill, index) => (
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
        <a href={pdf} alt="curriculum">
          DESCARGAR CV
        </a>
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
            <div className={styles.socialContainer}>
              <a
                title="contact github"
                href={constants.profilesUrls.github}
                className="btnShadow"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                title="contact linkedin"
                href={constants.profilesUrls.linkedin}
                className="btnShadow"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                title="contact whatsapp"
                href={constants.profilesUrls.whatsapp}
                className="btnShadow"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
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
