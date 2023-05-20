import { GlobalContext } from './redux/GlobalState';
import { useContext } from 'react';
// import { useNavigate } from "react-router-dom";

function Table2() {
    const { data,removeMoney} = useContext(GlobalContext)

    // const navigate = useNavigate();
  return (
    <div>
        <div className="table-responsive">
    <table className="table table-hover table-nowrap">
        <thead className="thead-light">
            <tr>
                <th scope="col">id</th>
                <th scope="col">Date</th>
                <th scope="col">description</th>
                <th scope="col">Type</th>
                <th scope="col">amount</th>
            </tr>
        </thead>
        <tbody>
        
           {data.slice(data.length-365).map((e,i)=>(
            <tr key={i}>
                
            <td>
                    {i+1}   
            </td>
            <td>
            {e.Date}
            </td>
            <td>
            {e.Description}
            </td>
            <td>
                <span className="badge badge-dot me-4">
                <i className={e.Flow==="true"?"bg-success":"bg-danger"}></i>
            </span>
            {e.Flow==="true"?`income`:`expenses`}
            </td>
        
           
            <td>
                <span className="badge badge-lg badge-dot">
                {e.Amount}
                </span>
            </td>
            <td className="text-end">
                {/* <button href="javascript(void)" className="btn btn-sm btn-neutral" onClick={()=>navigate(`edit/${e.id}`)}>edit</button> */}
                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => removeMoney(e.id)}>
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>))}
            
        

        </tbody>
    </table>
</div>
    </div>
  )
}

export default Table2
