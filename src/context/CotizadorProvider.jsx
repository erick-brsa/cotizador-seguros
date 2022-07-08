import { useState, createContext } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext()

export const CotizadorProvider = ({ children }) => {    

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [result, setResult] = useState(0)

   const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
   }

   const handleCotizar = () => {
        // Base
        let resultado = 2000

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(data.year)

        // Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100

        // Américano 15%
        // Europeo 30%
        // Asiatico 5%
        resultado *= calcularMarca(data.brand)
        
        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(data.plan)

        // formatear
        resultado = formatearDinero(resultado)
        
        setLoading(true)
        
        setTimeout(() => {
            setLoading(false)
            setResult(resultado)
        }, 3000)
   }

    return (
        <CotizadorContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                result,
                handleCotizar,
                loading
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export default CotizadorContext