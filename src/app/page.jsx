import Link from 'next/link';
import styles from './page.module.css';
import Featured from '@/components/featured/Featured';
import CatagoryList from '@/components/catagoryList/CatagoryList';
import CardList from '@/components/cardlist/CardList';
import Menu from '@/components/menu/Menu';



export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <div className="App">
        <Featured />
      </div>
      <h1 className={styles.catagorytitle}>Featured Catagories</h1>  
      <CatagoryList />
      <div className={styles.content}>
        <CardList page = {page} />
        <Menu />
      </div>
    </div>
  );
}
