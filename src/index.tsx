import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';
import "@fontsource/opendyslexic"
import { disableReactDevTools } from '@fvilers/disable-react-devtools';


if (process.env.NODE_ENV === "production") disableReactDevTools()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    </BrowserRouter>
);


reportWebVitals();
