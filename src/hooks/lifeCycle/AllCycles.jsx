import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('componente creado')

        const intervalID = setInterval(() => {
            document.title= `${new Date}`
            console.log('Actualización del componente')
        }, 1000)

        return () => {
            console.log('componente va a desaparecer')
            document.title= 'El tiempo se ha detenido'
            clearInterval(intervalID)
        };
    }, []);


    return (
        <div>

        </div>
    );
}

export default AllCycles;
