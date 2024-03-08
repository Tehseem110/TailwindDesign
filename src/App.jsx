import React from 'react';
import styles from './style';
import { Navbar } from './components/index';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* {Navbar} */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* {Hero Section} */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      {/* {Hero 2 section} */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Stats businesss Billing CardDeal Testimonials Clients CTA Footer</div>
      </div>
    </div>
  );
};

export default App;
