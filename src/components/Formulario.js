import React, {useState} from 'react';

const Formulario = () => {
    
    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    });

    const [error, setError] = useState(false);

    const {artista,cancion} = busqueda;

    // funcion a cada input para leer su contenido

    const actualizarState = e=>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // consultar las apis

    const buscarInformacion = e=>{
        e.preventDefault();
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }
        
        // Todo bien, pasar al componente principal

        setError(false);

    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador letras canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;