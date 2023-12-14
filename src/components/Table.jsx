import React from "react";
import TableRow from "./TableRow";

let peliculas = [
    {
        titulo: 'Billy Elliot',
        duracion: '123',
        rating: 5,
        generos: ['Drama', 'Comedia'],
        premios: 2
    },
    {
        titulo: 'Alicia en el país de las maravillas',
        duracion: '142',
        rating: 4.8,
        generos: ['Drama', 'Acción', 'Comedia'],
        premios: 3
    }
]

function Table () {
    return(
        <div>
            <table className="movieTable">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Duración</th>
                        <th>Rating</th>
                        <th>Géneros</th>
                        <th>Premios</th>
                    </tr>
                </thead>
                <tbody>
                {peliculas.map((pelicula, i) => <TableRow titulo={pelicula.titulo} duracion={pelicula.duracion} rating={pelicula.rating} genero={pelicula.generos.map((genero,i) => <li key={i}>{genero}</li>)} premios={pelicula.premios} key={i}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;