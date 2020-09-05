import Head from 'next/head'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react';

function AnimatedLabel({ text, ...props }) {
  const animProps = useSpring({ from: { textDecoration: 'none' }, to: { textDecoration: 'underline' } });
  return <h3 style={animProps} {...props}>{text}</h3>
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.resumeSection}>
        <p>
          Hi, I'm Akhil. I'm a 3rd year undergrad at the University of Washington
          studying <a href="https://www.ece.uw.edu/">Electrical Engineering</a> with a concentration in embedded systems
          and power electronics.
        </p>
        <p>
          So far, my primary experience has been with front-end development;
          last summer I interned at the <a href="https://www.zillow.com/">Zillow Group</a> under the Rich Media
          Experiences (RMX) team, where I used web 3D graphics libraries and React
          to render 3D interactive floor maps.
        </p>
        <p>
          I'm currently doing research in the <a href="https://wp.ece.uw.edu/brl/">BioRobotics lab</a>. I'm implementing
          simulations to validate the performance and outcomes of conjecture-based
          learning algorithms, where agents estimate the strategies of other agents
          (in cooperative or competitive games).
        </p>
        <p>
          I'm actively looking for summer 2021 software and hardware
          engineering internships! Check out my <a href="https://github.com/akhilmandala"> Github </a>
          and <a href="https://www.linkedin.com/in/akhilmandala/"> LinkedIn </a>
          for more information, such as past employer recommendations.
        </p>
      </section>
    </Layout>
  )
}

// <AnimatedLabel text="Experience" className={utilStyles.profileSectionLabel} />
// <ul className={utilStyles.profileSectionPoints}>
//   <li>Electrical Engineering @ UW (class of '22) </li>
//   <li>SDE Intern @ Zillow </li>
//   <li>Research Assistant @ UW BioRobotics Lab</li>
// </ul>
