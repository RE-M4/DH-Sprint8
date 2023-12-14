import React from "react";
import PropTypes from "prop-types";

function ContentRowMovies (props) {
    return(
        <div className="col-md-4 mb-4">
            {/*Movies in DataBase*/}
            {/*Total Awards*/}
            {/*Actors Quantity*/}
            <div className={`card ${props.borde} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentRowMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    borde: PropTypes.oneOf(['border-left-primary', 'border-left-success', 'border-left-warning']),
    icono: PropTypes.string.isRequired
}

ContentRowMovies.defaultProps = {
    titulo: 'Sin título',
    cifra: 'No especificado',
    borde: '',
    icono: ''
}

export default ContentRowMovies;