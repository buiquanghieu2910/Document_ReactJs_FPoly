// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className="App" >

      <Header >
      </Header>
      <div className="container">
        <div className="row" >
          <div className="col-xs-2 col-sm-2 col-md-2 -col-lg-2" >
            < Product > </Product>
          </div >

          <div className="col-xs-2 col-sm-2 col-md-2 -col-lg-2" >
            <Product > </Product>
          </div >

          <div className="col-xs-2 col-sm-2 col-md-2 -col-lg-2" >
            <Product > </Product>
          </div >

          <div className="col-xs-2 col-sm-2 col-md-2 -col-lg-2" >
            <Product > </Product>
          </div >

          <div className="col-xs-2 col-sm-2 col-md-2 -col-lg-2" >
            <Product > </Product>
          </div >

          <div className="col-xs-2 col-sm-2 col-md-2 -col-lg-2" >
            <Product > </Product>
          </div >
        </div >
      </div>
    </div >
  );
}

export default App;