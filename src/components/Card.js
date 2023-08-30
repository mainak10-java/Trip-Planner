import { useState } from "react";

function Card(props){
    const [readMore,setReadmore]= useState(false);
    const description=readMore ? props.info : `${props.info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readMore);
    }

    return(
        <div className="card">
            <img src={props.image} alt="@" className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <div className="tour-price">₹ {props.price}</div>
                    <div className="tour-name">{props.name}</div>
                </div>

                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readMore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() =>props.removeTour(props.id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;