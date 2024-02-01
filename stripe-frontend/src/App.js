import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItems, setShowItems] = useState(false)
  return (
    <div className='App'>
      <h1>Payments</h1>
      {showItems ? <StripeContainer />
        :
        <>
          <h3>$10.00 item</h3>
          <button onClick={() => setShowItems(true)}>Process to Payments</button>
        </>
      }

    </div>
  );
}

export default App;
