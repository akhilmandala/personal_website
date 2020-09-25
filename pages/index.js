import Head from "next/head";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";

function AnimatedLabel({ text, ...props }) {
  const animProps = useSpring({
    from: { textDecoration: "none" },
    to: { textDecoration: "underline" },
  });
  return (
    <h3 style={animProps} {...props}>
      {text}
    </h3>
  );
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Akhil Mandala's personal website. His skills, qualifications, and projects are provided here."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={utilStyles.resumeSection}>
        <p>
          Hi, I'm Akhil. I'm a 3rd year undergrad at the University of
          Washington studying{" "}
          <a href="https://www.ece.uw.edu/">Electrical Engineering</a> with a
          concentration in embedded systems and power electronics.
        </p>
        <p>
          So far, my primary experience has been with front-end development;
          last summer I interned at the{" "}
          <a href="https://www.zillow.com/">Zillow Group</a> under the Rich
          Media Experiences (RMX) team, where I used web 3D graphics libraries
          and React to render 3D interactive floor maps.
        </p>
        <p>
          I'm currently doing research in the{" "}
          <a href="https://wp.ece.uw.edu/brl/">BioRobotics lab</a>. I'm
          implementing simulations to validate the performance and outcomes of
          conjecture-based learning algorithms, where agents estimate the
          strategies of other agents (in cooperative or competitive games).
        </p>
        <p>
          I'm also part of the{" "}
          <a href="https://sensor.cs.washington.edu/">Sensor Systems lab</a>. In
          this lab, I am investigting the use of{" "}
          <a href="https://en.wikipedia.org/wiki/Chirp_spread_spectrum">
            Chirp Spread Spectrum (CSS)
          </a>{" "}
          to encode binary or other forms of data into mechanical motors
          movement. Most of my work in this lab will involve signal processing
          and embedded systems.
        </p>
        <p>
          I'm actively looking for summer 2021 software and hardware engineering
          internships! Check out my{" "}
          <a href="https://github.com/akhilmandala"> Github </a>
          and <a href="https://www.linkedin.com/in/akhilmandala/"> LinkedIn </a>
          for more information, such as past employer recommendations.
        </p>
      </section>
    </Layout>
  );
}

// <AnimatedLabel text="Experience" className={utilStyles.profileSectionLabel} />
// <ul className={utilStyles.profileSectionPoints}>
//   <li>Electrical Engineering @ UW (class of '22) </li>
//   <li>SDE Intern @ Zillow </li>
//   <li>Research Assistant @ UW BioRobotics Lab</li>
// </ul>
