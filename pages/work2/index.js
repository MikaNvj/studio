'use client';

import styles from '../../styles/worktwo.module.css'


import Card from '../card';
import lg1 from '../../assets/s.png';
import lg2 from '../../assets/ez.png';
import lg3 from '../../assets/1.png';
import lg4 from '../../assets/final.png';
import lg5 from '../../assets/botoman.png';
import lg6 from '../../assets/post.png';
import lg7 from '../../assets/post2.png';



export default function Worktwo() {

  return (

    <main className={styles.main}>

      {

        cards.map( (carde, i) => {

          return <Card key={i} card={carde}/>

        })

      }

    </main>

  )

}
const cards = [
  {
    url: lg1,
    title: "Title 1",
    id: 1,
  },
  {
    url: lg2,
    title: "Title 2",
    id: 2,
  },
  {
    url: lg3,
    title: "Title 3",
    id: 3,
  },
  {
    url: lg4,
    title: "Title 4",
    id: 4,
  },
  {
    url: lg5,
    title: "Title 5",
    id: 5,
  },
  {
    url: lg6,
    title: "Title 6",
    id: 6,
  },
  {
    url: lg7,
    title: "Title 7",
    id: 7,
  },
];