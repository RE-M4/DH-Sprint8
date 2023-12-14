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

function Table (props) {
    return(
        <div>
            <table className="movieTable">
                <thead>
                    <tr>
                        <th>{props.title}</th>
                    </tr>
                </thead>
                <tbody>
                {props.result.map((element, i) => <TableRow key={i}><td>{element.product_name}</td><td>{element.product_description}</td></TableRow>)}
                {props.result.map((element, i) => <TableRow key={i}><td>{element.first_name}</td><td>{element.last_name}</td><td>{element.email}</td></TableRow>)}
                {props.result.map((element, i) => <TableRow key={i}><td>{element.product_name}</td><td>{element.product_description}</td></TableRow>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table;