import Card from "./Card";

function Tour(props){
    return(
        <div className="container">
            <div>
                <h2 className="title">Trip Planner</h2>
            </div>

            <div className="cards">
                {
                    props.tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tour;