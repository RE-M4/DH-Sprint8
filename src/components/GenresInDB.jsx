import React, {Component} from "react";
import Genre from './Genre';

let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]

class GenresInDB extends Component {
    constructor(){
        super();
        this.state = {
            genresList : []
        }
    }

    apiCall(url, handler){
        fetch(url)
            .then(response => response.json())
            .then(data => handler(data))
            .catch(error => console.log(error))
    }

    componentDidMount(){

    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div className="col-lg-6 mb-4">	{/*Genres in DB*/}					
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {genres.map((genre, i) => <Genre {...genre} key={i}/>)}
                    </div>
                </div>
            </div>
            {/*End Of Genres in DB*/}
        </div>
        )
    }
}

export default GenresInDB;