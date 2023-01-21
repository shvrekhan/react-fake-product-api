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
            isLoading: false,
            isFetchFailed: false,
            failedMsg: "",
        };
        this.API_ENDPOINT = "https://fakestoreapi.com/products";
    }

    fetchedProductsViaApi = () => {

        axios.get(this.API_ENDPOINT)
            .then((response) => {
                if (response.data.length === 0) {
                    this.setState({
                        apiFetchError: true,
                        failedMsg: "!! NO product to Show.",
                        fetchedProducts: [],
                        isLoading: false
                    })

                } else {
                    const fetchedProducts = response.data;
                    this.setState({
                        fetchedProducts,
                        isLoading: false,
                        apiFetchError: false,
                    });
                }
            })
            .catch((error) => {
                this.setState({
                    apiFetchError: true,
                    failedMsg: "Api fetch failed Please try after some time.",
                    fetchedProducts: [],
                    isLoading: false
                })
            })

    }

    render() {
        return (
            <>
                <Navbar />

                {this.state.isLoading ? <Loader /> :
                    this.state.apiFetchError ? <h1 className="error">{this.state.failedMsg}</h1> :
                        <div className="card-parent">
                            {this.state.fetchedProducts.map((current) => {
                                return (
                                    <Card
                                        key={current.id}
                                        title={current.title}
                                        category={current.category}
                                        img={current.image}
                                        price={current.price}
                                        details={current.description}
                                        rate={current.rating.rate}
                                        count={current.rating.count}
                                    />)
                            })}
                        </div>
                }

            </>
        )
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        }, this.fetchedProductsViaApi);
    }
}


export default ShowProduct;