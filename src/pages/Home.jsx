import Blogs from '../components/Blogs';
import CenteredHeader from '../components/CenteredHeader';
import ContactCards from '../components/ContactCards';
import ContentSection from '../components/ContentSection';
import HeroHome from '../components/HeroHome';
import SimpleFooter from '../components/SimpleFooter';

const Home = () => {
    return (
        <>
            <header>
                <HeroHome />
            </header>

            <main>
                <ContactCards />
                <CenteredHeader />
                <ContentSection />
                <Blogs />
            </main>

            <footer>
                <SimpleFooter />
            </footer>
        </>
    );
};

export default Home;
