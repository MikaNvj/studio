import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Homes from './home';
import About from './about';
import Services from './service';
import Work from './work';
import Worktwo from './work2';
import Back from './background';
import Footer from './footer';

export default function Home() {
  return (
    <div className={styles.container}>
       <Homes/>
       <About/>
       <Services/>
       <Work/>
       <Back/>
       <Worktwo/>
       <Footer/>
    </div>
  );
}
