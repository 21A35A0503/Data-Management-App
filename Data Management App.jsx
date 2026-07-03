import Rows from "./Component/Custom Hooks/Rows";
import Cards from "./Component/Custom Hooks/Cards";
import "./style.css"
function App(){
    return(
        <div>
            <h1>
                Data Management App
            </h1>
            <Rows />
            <hr />
            <Cards />
        </div>
    );
}
export default App;