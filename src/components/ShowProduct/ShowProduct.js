import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./ShowProduct.css"

class ShowProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchedProducts: [],
            apiFetchError: false,
            errorMsg: "",
        };
        this.API_ENDPOINT = "https://fakestoreapi.com/products";
    }

    fetchedProductsViaApi = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log("21");
                const fetchedProducts = response.data;
                this.setState({
                    fetchedProducts
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        return (
            <>
                <Navbar />
                <Loader />
                {console.log(this.state.fetchedProducts)}
                <div className="card-parent">
                    {this.state.fetchedProducts.map((current) => {
                        return (
                            <Card
                                key={current.id}
                                title={current.title}
                                img={current.image}
                                price={current.price}
                                details={current.description}
                                rate={current.rating.rate}
                                count={current.rating.count}
                            />)
                    })}
                </div>
            </>
        )
    }


    componentDidMount() {
        this.fetchedProductsViaApi();
    }
}


export default ShowProduct;