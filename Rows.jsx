import useCustomData from "../Custom Hooks/useCustomData";
import rowsData from "../Custom Hooks/rows.json";
function Rows(){
    const {data,addData}=useCustomData(
        rowsData,
        "rows"
    );
    return(
        <div>
            <h2>Rows</h2>
            <button onClick={addData}>+10</button>
            {
                data.map((rows)=>(
                    <div key={rows.id} className="row">
                        {rows.name}
                    </div>
                ))
            }
        </div>
    );
}
export  default Rows;