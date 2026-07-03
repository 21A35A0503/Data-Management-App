import useCustomData from "../Custom Hooks/useCustomData";
import cardsData from "../Custom Hooks/cards.json";
function Cards(){
    const{data,addData}=useCustomData(
        cardsData,
        "cards"
    );
    return(
        <div>
            <h2>Cards</h2>
            <button onClick={addData}>+2</button>
            <div className="card-container">
                {data.map((card=>
                    <div key={card.id} className="card">
                        <h3>{card.title}</h3>
                        <p> {card.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
export default Cards;