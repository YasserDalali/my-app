import React from "react";
import styles from "../style";
import {NavBar, Hero, Billing, CardDeal, Business, Clients, CTA, Footer, GetStarted, Stats, Testimonials} from "../components/new/index";


function SecondLanding() {
  return (
    <div className="bg-primary w-full h-screen overflow-hidden text-white">
      
            
      <nav className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <NavBar />
        </div>
      </nav>



      <main className={`bg-primary ${styles.flexStart}`}>
        <article className={`${styles.boxWidth}`}>
            <Hero />
            <Stats />
            <GetStarted />
            <Billing /> 
            <CardDeal />
            <Testimonials />
            <CTA />
            <Footer />
        </article>


        
        <article className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
          <div className={`${styles.boxWidth}`}>

            
            

          </div>
        </article>


      </main>
    </div>
  );
}

export default SecondLanding;
