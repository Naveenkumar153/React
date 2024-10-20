import ReactDOM from 'react-dom/client';
import Headers from './src/UI/Header';
import Footer from './src/UI/Footer';
import './index.css';

const App = () => {
    return (
        <>
            <Headers/>
            <Footer/>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
