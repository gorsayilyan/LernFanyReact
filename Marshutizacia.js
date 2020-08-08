import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const Home = () => (
<div>
<img src={"./Utester/qyabab.jpg"} alt="achon1" height="500" width="700" />
</div>
)

const About = () => (
<div>
<img src={"./Utester/xoziXorovac.jpg"} alt="achon1" height="500" width="700" />
</div>

)

const Contacts = () => (
<div>
<img src={"./Utester/Xash.jpg"} alt="achon1" height="500" width="700" />
</div>
)

class Marshutizacia extends React.Component {
render() {
return (
<BrowserRouter history={history}>
<div>
<ul>
<li><Link to="/">A</Link></li>
<li><Link to="/b">B</Link></li>
<li><Link to="/c">C</Link></li>
</ul>
<hr/>
<Route exact path="/" component={Home}/>
<Route path="/b" component={About}/>
<Route path="/c" component={Contacts}/>
</div>

</BrowserRouter>
)}}

export default Marshutizacia;