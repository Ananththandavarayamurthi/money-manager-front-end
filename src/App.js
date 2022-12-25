
import Navbar from "./component/Navbar";
import Table1 from "./component/Table1"
import Table2 from "./component/Table2"
import Table from "./component/Table"
import Body from "./component/Body"
import Addmoney from "./component/Addmoney";
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './component/redux/GlobalState';

function App() {
 

  return (
    <Router>
<GlobalProvider>
  
      <div className="App">
        <Navbar/>
        <Body />
        <Routes>
        <Route path="/" element={<Table />}/>
        <Route path="/addmoney" element={<Addmoney />}/>
         <Route path="/navbar/weeklyreport" element={<Table />}/>
             <Route path="/navbar/monthlyreport" element={<Table1 />}/>
             <Route path="/navbar/yearlyreport" element={<Table2 />}/>
        </Routes>
      </div>
      
    </GlobalProvider>
    </Router>

  );
}

export default App;





