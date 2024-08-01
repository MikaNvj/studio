import styles from '../../styles/about.module.css';
import lg from '../../assets/lg.png';
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.about_section}>
            <h1 className={styles.title_about}>A propos de nous</h1>
            <div className={styles.about}>
                <div className={styles.img}>
                    <Image className={styles.logoimg}
                        src={lg}
                        width={'50%'}
                        height={'50%'}
                        alt="Picture of the author"
                    />
                </div>
                <div className={styles.paragraphe}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        </div>
    );
}
