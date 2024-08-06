// import styles from '../../styles/service.module.css';
import styles from '../../styles/accordion.module.css';

export default function Back() {
  return (
    <div className={styles.back_section}>
      <section className={styles.accordion}>
    <h2 className={styles.title_faq}>Foire aux question</h2>
                    <p className={styles.paragraphe}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    </p>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd2"/>
        <label for="rd2" className={styles.tab__label}> Lorem ipsum dolor sit amet,</label>
        <div className={styles.tab__content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>
    </div>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd3"/>
        <label for="rd3" className={styles.tab__label}> Lorem ipsum dolor sit amet,</label>
        <div className={styles.tab__content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>
    </div>
    <div className={styles.tab}>
        
        <input type="radio" name="accordion-2" id="rd4"/>
        <label for="rd4" className={styles.tab__label}> Lorem ipsum dolor sit amet,</label>
        <div className={styles.tab__content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>
    </div>
    
    
</section>
       
    </div>
  );
}
