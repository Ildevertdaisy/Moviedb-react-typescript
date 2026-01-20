import  {Link} from '@tanstack/react-router';
import { useFavorites } from '../hooks/useFavorite';

export default function Navbar() {
    const {favorites} = useFavorites();

    return (
      <nav style={styles.nav}>
        <div>
          <Link to="/" style={styles.logo}>
            MovieDB App
          </Link>
          <div style={styles.links}>
            <Link to="/" style={styles.link}>
              Acceuil
            </Link>
            <Link to="/favorites" style={styles.link}>
               Favoris ({favorites.length})
            </Link>
          </div>
        </div>
      </nav>
    );
}


const styles = {
   nav : {
        backgroundColor: "lightblue",
        padding: '1rem 0',
        boxshadow: '0 2px 4px gb(0,0,0,0.1)'
   },
   container: {
     maxWidth: '120px',
     margin: '0 auto',
     padding: '0 1rem',
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center'
   },
   logo : {
        fontSize : '1.5rem',
        fontWeight: 'bold',
        colo: '#fff',
        textDecoration: 'none'
   },
   links : {
     display: 'flex',
     gap: '2rem',
   },
   link : {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transitin: 'color 0.3s'
   }
}