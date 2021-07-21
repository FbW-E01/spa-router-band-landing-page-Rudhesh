import ReactDOM from 'react-dom';
import Band from './Band.jsx'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter><Band/></BrowserRouter>,
    document.querySelector("#root")
);