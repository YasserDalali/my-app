import BentoGrid from "./components/BentoGrid";
import Functionalities from "./components/Functionalities";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import SectionProduct from "./components/SectionProduct";

function App() {
  return (
    <main className=" min-h-screen overflow-hidden">
      <NavBar />
      <Hero />
      <section className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:gap-3  lg:mx-10 py-20">
        <SectionProduct
          title="TRACK ATTENDENCE"
          img="https://www.sage.com/en-gb/-/media/images/sagedotcom/master/icons/spot%20icons%20over%20light/employees.svg?iar=0&hash=1BF8C4F5B7A833119C14BA59B0054620"
          revDir={true}
          desc="Track employee attendence and leave records with ease. Get insights to make informed decisions."
        />

        <SectionProduct
          title="EMPLOYEE DATABASE"
          img="https://www.sage.com/en-gb/-/media/images/sagedotcom/master/icons/spot%20icons%20over%20light/book-search.svg?iar=0&hash=EAD191276078BAB70DA5B9450629A365"
          revDir={false}
          desc="Manage employee information and records in a secure digital database."
        />

        <SectionProduct
          title="PAYROLL MANAGEMENT"
          img="https://www.sage.com/en-gb/-/media/images/sagedotcom/master/icons/spot%20icons%20over%20light/payroll-v1.svg"
          revDir={true}
          desc="Manage employee salaries, benefits, and all related financial aspects of employment."
        />
      </section>

<BentoGrid/>

      <section>
        <Intro></Intro>
      </section>




      <section>
        <Functionalities className="lg:padding"></Functionalities>
      </section>
    </main>
  );
}

export default App;
