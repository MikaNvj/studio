import Image from 'next/image';

import styles from '../../styles/card.module.css';



const Card = ({ card }) => {



  return (

    <div className={styles.cardContainer}>

      <div

        className={styles.card}


      >
        <Image
          className={styles.img}
          src={card.url}

          alt="Picture of the author" />



      </div>

    </div>

  )

}



export default Card