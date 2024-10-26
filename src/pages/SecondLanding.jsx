import React from "react";
import styles from "../style";
import {NavBar, Hero, Billing, CardDeal, Business, Clients, CTA, Footer, Stats, Testimonials} from "../components/new/index";


/**
 * Returns a Landing page component
 * 
 * This component is the second landing page of the website, and it contains the following sub-components:
 * - NavBar
 * - Hero
 * - Stats
 * - Business
 * - Billing
 * - CardDeal
 * - Testimonials
 * - Clients
 * - CTA
 * - Footer
 * 
 * The component also has a background color of #1A202C and a full width of the screen.
 * The component is also overflow-hidden, which means that any content that is larger than the component
 * will be cut off at the edges of the component.
 * 
 * @return {ReactElement} The Landing page component
 */
function SecondLanding() {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
}

export default SecondLanding;
