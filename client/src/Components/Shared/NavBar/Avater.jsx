import { useContext } from 'react';
import avaterImg from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avater = () => {
    const {user} = useContext(AuthContext)
    return (
      <img src={user && user ? user.photoURL : avaterImg} alt="profile" height='30' width='30' className='rounded-full' />
    );
};

export default Avater;