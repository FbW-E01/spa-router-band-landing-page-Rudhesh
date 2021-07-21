import Img1 from './components/1.jpg'
import Img2 from './components/2.jpg'
import Img3 from './components/3.jpg'
import Img4 from './components/4.jpg'
import Img5 from './components/5.jpg'


import Navigation from './components/Navigation.jsx'
import {
    Route, Switch} from "react-router-dom"
    import './Band.css'

export default function Band() {
    return(
        <div className="band">
    
            <Navigation/>
<Switch>
<Route exact path="/">

<img className="photo1"  src={Img5} alt="Img1" />
      
    </Route>



    <Route exact path="/VOCALS">
<h1>Serj Tankian</h1>
<img className="photo"  src={Img1} alt="Img1" />
      
    </Route>



    <Route path="/GUITAR">

        <h1>Daron Malakian</h1>
        <img className="photo"  src={Img2} alt="Img1" />

    
    </Route>
    <Route exact path="/BASS">
    <h1>Shavo Odadjian</h1>
    <img className="photo"  src={Img3} alt="Img1" />


    </Route >
    <Route exact path="/DRUMS">
<h1>John Dolmayan</h1>
<img className="photo"  src={Img4} alt="Img1" />

    </Route>
    {/* <Route path="*">
        <p>Error please contact me
        </p>
    </Route> */}
</Switch>
        </div>
    )
}