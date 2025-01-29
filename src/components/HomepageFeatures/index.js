import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fácil de usar en empresas de todos los tamaños",
    Svg: require("@site/static/img/undraw_mountain.svg").default,
    description: (
      <>
        Arquos Files es una plataforma de gestión de documentos fácil de usar
        para empresas de todos los tamaños.
      </>
    ),
  },
  {
    title: "Focalizado en la gestión de documentos",
    Svg: require("@site/static/img/undraw_tree.svg").default,
    description: (
      <>
        Arquos Files permite a las empresas organizar y compartir documentos de
        manera eficiente.
      </>
    ),
  },
  {
    title: "Potenciado por Phoenix Framework",
    Svg: require("@site/static/img/undraw_phoenix.svg").default,
    description: (
      <>
        Arquos Files está construido con Phoenix Framework, un framework de
        desarrollo web moderno y rápido.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
