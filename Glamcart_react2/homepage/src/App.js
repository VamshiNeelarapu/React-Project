import logo from './logo.svg';
import './App.css';
import Homeproducts from './Components/Homeproducts';
import Wishlistp from './Components/Wishlistp';
import Trending from './Components/Trending';
import Flashsale from './Components/Flashsale';
import NewArrivals from './Components/NewArrivals';

function App() {
  return (
    <div className="App">
{/* <Homeproducts/> */}
<hr/>
<Trending/>

<Wishlistp/>

{/* <Flashsale/>
 <NewArrivals/> */}


    </div>
  );
}

export default App;
