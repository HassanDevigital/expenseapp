import './App.css';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {IncomeExpense} from './Components/IncomeExpense';
import {AddTransaction} from './Components/AddTransaction';
import { TransactionList } from './Components/TransactionList';

function App() {
  return (
    <div>
     <Header/>
     <div  className='container' >
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
     </div>

    </div>
  );
}

export default App;
