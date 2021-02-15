import '../scss/gallery.scss'
import Nav from './Nav'
import Content from './Content'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import human from '../images/human.jpg'
import animal from '../images/animal.jpg'
import car from '../images/car.jpg'


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/content" component={Content} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const Gallery = () => (

  <div>
    <h1>Gallery</h1>
    <div class="outer-container">
        <div>
          <figure>
          <img src={human} />
          <figcaption>Caption for first image</figcaption>
        </figure>
        </div>
        <div>
        <figure>
          <img src={animal} />
          <figcaption>Caption for second image</figcaption>
        </figure>
        </div>
        <div>
        <figure>
          <img src={car} />
          <figcaption>Caption for third image</figcaption>
        </figure>
        </div>
      </div>
    </div>

);

export default App;
