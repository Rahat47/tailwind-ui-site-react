import { Route, Routes } from 'react-router-dom';
import Content from './pages/Content';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/content' element={<Content />} />
            </Routes>
        </>
    );
}

export default App;
