import ReactDOM from 'react-dom/client';
import Headers from './src/UI/Header';
import Footer from './src/UI/Footer';
import './index.css';
import Body from './src/UI/Body';

const App = () => {
    return (
        <>
            <Headers/>
            <Body/>
            <Footer/>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
