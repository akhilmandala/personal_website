import { useState } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

const name = "Akhil Mandala";
export const siteTitle = "Akhil Mandala - ECE student at UW";

function AnimatedLink({ text, ...props }) {
  const [backgroundHighlight, toggleBackgroundHighlight] = useState(false);
  console.log(backgroundHighlight);
  const animProps = useSpring({
    from: {},
    to: backgroundHighlight
      ? {
          width: "100 %",
          background: "lightpink",
          textColor: "white",
        }
      : { width: "0%", background: "white" },
  });
  return (
    <animated.div
      style={animProps}
      onMouseEnter={() => {
        toggleBackgroundHighlight(true);
      }}
      onMouseLeave={() => {
        toggleBackgroundHighlight(false);
      }}
    >
      <Link {...props}>{text}</Link>
    </animated.div>
  );
}

export default function Layout({ children, home }) {
  return (
    <>
    <div className={styles.container}>
      <header className={styles.header}>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main className={styles.mainContent}>{children}</main>
    </div>
    </>
  );
}

// <div className={utilStyles.profileLinks}>
//   <AnimatedLink href="/" text="resumé"></AnimatedLink>
//   <AnimatedLink href="/" text="projects"></AnimatedLink>
//   <AnimatedLink href="/" text="blog"></AnimatedLink>
// </div>
