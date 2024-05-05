
import Header from './assets/Components/Header'
import Balance from './assets/Components/Balance';
import IncomeExpenses from './assets/Components/IncomeExpenses';
import TransactionList from './assets/Components/TransactionList';
import './App.css'

function App() {


  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </>
  );
}

export default App
