import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Formulario = ({listoParaAgregar, setAlert}) => {

    const [colaborador, setColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const manejeElCambio = (evento) => {
        
        setColaborador({
            ...colaborador,
            [evento.target.name]: evento.target.value,
        })
    }

    const manejeELSubmit = (evento) => {
        evento.preventDefault();

        if (
            colaborador.nombre === "" ||
            colaborador.correo === "" ||
            colaborador.edad === "" ||
            colaborador.cargo === "" ||
            colaborador.telefono === ""
        ) {
            setAlert({
                error: true,
                mensaje: 'Completa todos los campos',
                color: 'danger'
            });
            return;
        }

        listoParaAgregar(colaborador);

        setAlert({
            error:false,
            mensaje: "Colaborador Agregado",
            color: "success"
        })

        setColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ""
         })
    }

   



    return (
        <>
            <Form onSubmit={manejeELSubmit}>
                <Form.Control
                    type='text'
                    placeholder='Nombre del colaborador'
                    name='nombre'
                    className='my-3'
                    onChange={manejeElCambio}
                    value={colaborador.nombre}
                />
                <Form.Control
                    type='email'
                    placeholder='Email del colaborador'
                    name='correo'
                    className='my-3'
                    onChange={manejeElCambio}
                    value={colaborador.correo}
                />
                <Form.Control
                    type='text'
                    placeholder='Edad del colaborador'
                    name='edad'
                    className='my-3'
                    onChange={manejeElCambio}
                    value={colaborador.edad}
                />
                <Form.Control
                    type='text'
                    placeholder='Cargo del colaborador'
                    name='cargo'
                    className='my-3'
                    onChange={manejeElCambio}
                    value={colaborador.cargo}
                />
                <Form.Control
                    type='text'
                    placeholder='Telefono del colaborador'
                    name='telefono'
                    className='my-3'
                    onChange={manejeElCambio}
                    value={colaborador.telefono}
                />
                <Button type='submit'>Agregar colaborador</Button>
            </Form>
        </>
    )

}

export default Formulario;
