import React, {Component} from "react";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDB from "./LastMovieInDB";
import GenresInDB from "./GenresInDB";


let cardData = [
    {
        titulo: "Movies in Data Base",
        cifra: "21",
        borde: "border-left-primary",
        icono: "fa-film"
    },
    {
        titulo: "Total Awards",
        cifra: "79",
        borde: "border-left-success",
        icono: "fa-award"
    },
    {
        titulo: "Actors Quantity",
        cifra: "49",
        borde: "border-left-warning",
        icono: "fa-user"
    }
]

class ContentRowTop extends Component {

    constructor(){
        super();
        this.state = {
            products : {},
            users: {}
        }
    }

    componentDidMount(){
        Promise.all([fetch('http://localhost:3000/api/products').then(response => response.json()),
                    fetch('http://localhost:3000/api/users').then(response => response.json())])
                    .then(values => {this.setState({products: values[0]}), this.setState({users: values[1]})})
    }

    componentDidUpdate() {
        
    }

    render(){
        return(
            <>
                {console.log(this.state.users)}
                {this.state.products == '' || this.state.users == '' ? <h1>Cargando...</h1> : <div className="container-fluid">
                {/*Content Row Top*/}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
                    {/*Content Row Movies*/}
                    <div className="row">
                        <ContentRowMovies titulo={'Total de productos'} cifra={this.state.products.total} borde={cardData[0].borde} icono={cardData[0].icono}/>
                        <ContentRowMovies titulo={'Total de usuarios'} cifra={this.state.users.total} borde={cardData[1].borde} icono={cardData[1].icono}/>
                        <ContentRowMovies titulo={'Total de categorías'} cifra={2} borde={cardData[2].borde} icono={cardData[2].icono}/>
                    </div>
                    {/*End Content Row Movies*/}
                    {/*Content Row Last Movie in Data Base*/}
                    <div className="row">
                        <LastMovieInDB />
                        <GenresInDB />
                    </div>
                    {/*End Of Content Row Last Movie in Data Base*/}
                    {/*End Of Content Row Top*/}
                </div>}
            </>
        )
    }
}

export default ContentRowTop;