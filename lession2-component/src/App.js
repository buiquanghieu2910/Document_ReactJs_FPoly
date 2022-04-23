// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className="App">

      <Header>

        {/* <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 -col-lg-6">
            <Product/>
            <h1>Hiếu</h1>
          </div>


          <div className="col-xs-6 col-sm-6 col-md-6 -col-lg-6"></div>
        </div> */}
      </Header>
      <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 -col-lg-6">
            <Product></Product>
          </div>


          <div className="col-xs-6 col-sm-6 col-md-6 -col-lg-6">
          <Product></Product>
          </div>
        </div>
    </div>
  );
}

export default App;
