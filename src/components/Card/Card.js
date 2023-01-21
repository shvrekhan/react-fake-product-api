import React from "react";
import "./Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="Card">
                    <img src={this.props.img} />
                    <div className="card-category">{this.props.category}</div>
                    <div className="card-title">{this.props.title}</div>
                    <div className="rate-count"> Count ({this.props.count}) & Rating({this.props.rate})</div>
                    <div className="Price">{this.props.price}</div>
                    <div className="button-container">
                        <button>Buy Now</button>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;