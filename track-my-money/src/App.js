import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import { Header } from './components/Header';
import IncomeExp from './components/IncomeExp';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <div className='subContainer'>
        <Balance />
      <IncomeExp />
        </div>
   <div className='mainContainer'>
      <AddTransaction />
      <TransactionList />
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
