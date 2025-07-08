import { Link } from 'react-router-dom';
import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <>
            <section className="flex items-center justify-between mx-3 md:mx-10 py-8">
                <Link href="/" className="text-3xl font-bold">Knowledge Cafe</Link>
                <img src={Profile} alt="Profile" />
            </section>
            <hr className="border border-gray-200 mx-3 md:mx-10" />
        </>
    );
};

export default Header;