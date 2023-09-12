const Buscador = ({buscar, manejeElCambio}) => {
    return (
        <>
            <form role="search">
                <input 
                    className="form-control me-2 my-3"
                    type="search" 
                    placeholder="Busca un colaborador"
                    aria-label="search"
                    value={buscar}
                    onChange={manejeElCambio}
                />
            </form>
        </>
    )
}

export default Buscador;