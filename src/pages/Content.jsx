import ContentSection from '../components/ContentSection';
import HeroContentPage from '../components/HeroContentPage';
import SimpleFooter from '../components/SimpleFooter';

const Content = () => {
    return (
        <>
            <header>
                <HeroContentPage />
            </header>

            <main>
                <ContentSection />
            </main>

            <footer>
                <SimpleFooter />
            </footer>
        </>
    );
};

export default Content;
