import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";
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
                // console.log(fetchedProducts);
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
                {console.log(this.state.fetchedProducts)}
                {this.state.fetchedProducts.map((current) => {
                    return <h1 key={current.id}>{current.title}</h1>
                })}
            </>
        )
    }


    componentDidMount() {
        this.fetchedProductsViaApi();
    }
}


export default ShowProduct;