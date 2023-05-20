import React, { useContext } from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from './redux/GlobalState';
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


function Body() {
    
    const { data} = useContext(GlobalContext)
const income=data.filter((e)=>e.Flow==="true")
console.log(income)
const expence=data.filter((e)=>e.Flow==="false")
console.log("expense",expence)
const totalincome= income.reduce((accu,val)=>{
    return accu+val.Amount
},0
)
console.log("totalincome",totalincome)
const totalexpence= expence.reduce((accu,val)=>{
    return accu+val.Amount
},0
)
console.log("totalexpence",totalexpence)



    
 const incomelastweek= income.slice(income.length-7).reduce((accu,val)=>{
    return accu+val.Amount
},0
)
  const expencelastweek =expence.slice(expence.length-7).reduce((accu,val)=>{
    return accu+val.Amount
},0
)
  const incomelastmonth =income.slice(income.length-30).reduce((accu,val)=>{
    return accu+val.Amount
},0
)
  const expencelastmonth =expence.slice(expence.length-30).reduce((accu,val)=>{
    return accu+val.Amount
},0)
  const incomelastyear =income.slice(income.length-365).reduce((accu,val)=>{
    return accu+val.Amount
},0
)
  const expencelastyear =expence.slice(expence.length-365).reduce((accu,val)=>{
    return accu+val.Amount
},0)

  return ( 
//     <div>hi
//     </div>
    <div>



        <div className="card-header">
                            <h5 className="mb-0">Applications</h5>
                            <div className="col-xl-3 col-sm-6 col-12">
            <div className="card shadow border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total balance</span>
                            <span className="h3 font-bold mb-0">
                                {totalincome-totalexpence}
                                </span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <AccountBalanceWalletIcon/>
                            
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
       
    <div className="row g-6 mb-6">
        <div className="col-xl-3 col-sm-6 col-12">
            <div className="card shadow border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">INCOME</span>
                            <span className="h3 font-bold mb-0">
                                {
                                totalincome
                            }
                            </span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-success text-white text-lg rounded-circle">
                            <AccountBalanceIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                        <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-bank">+</i>
                        </span>
                        <span className="text-nowrap text-xs text-muted">Total income</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
            <div className="card shadow border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">EXPENSES</span>
                            <span className="h3 font-bold mb-0">
                                {
                                totalexpence
                            }
                            </span>
                        </div>
                        <div className="col-auto">
                            <div className="icon icon-shape bg-danger text-white text-lg rounded-circle">
                                <MoneyOffCsredIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm">
                        <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-bank">-</i>
                        </span>
                        <span className="text-nowrap text-xs text-muted">Total Expences</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
                <Navbar >
                <Nav >
                <Link  to="/navbar/weeklyreport" >
                <button  type="button" className="btn btn-default" data-bs-placement="top" data-bs-content="last 7days income.">
                <span>Weeklyreport</span>
                 <span title="weekly income" className="badge badge-primary bg-success" >{incomelastweek}</span>
                 <span title="weekly expence" className="badge badge-danger bg-danger">{expencelastweek}</span>
                </button>
                </Link>
                <Link  to="/navbar/monthlyreport" >
                <button type="button" className="btn btn-default">
                <span>Monthlyreport</span>
                 <span className="badge badge-primary bg-success">{incomelastmonth}</span>
                 <span className="badge badge-danger bg-danger">{expencelastmonth}</span>
                </button>
                </Link>
                <Link  to="/navbar/yearlyreport" >
                <button type="button" className="btn btn-default">
                <span>Yearlyreport</span>
                 <span className="badge badge-primary bg-success">{incomelastyear}</span>
                 <span className="badge badge-danger bg-danger">{expencelastyear}</span>
                </button>
                </Link>
             </Nav>
      </Navbar>
   

    </div>
  )
}

export default Body