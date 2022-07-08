import { useCallback, useMemo, useRef } from "react"
import { useCotizador } from "../hooks"
import { MARCAS, PLANS } from '../constants'

const Resultado = () => {

    const { result, data } = useCotizador()
    const { brand, plan, year } = data
    const yearRef = useRef(year)

    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.id === Number(brand)), 
        [result]
    )
    const [nombrePlan] = useCallback(
        PLANS.filter(p => p.id === Number(plan)),
        [result]
    )

    if (result === 0) {
        return null
    }
    
	return (
        <div className="bg-gray-100 shadow mt-10 flex justify-center items-center flex-col">
            <h2 className="text-gray-600 text-4xl font-black">
                Resumen
            </h2>
            <p className="mt-2">
                <span className="text-xl font-semibold">
                    Marca: {nombreMarca.name}
                </span>
            </p>
            <p>
                <span className="text-xl font-semibold">
                    Año: {yearRef.current}
                </span>
            </p>
            <p>
                <span className="text-xl font-semibold">
                    Plan: {nombrePlan.name}
                </span>
            </p>
            <p>
                <span className="text-2xl font-bold">
                    Total: {result}
                </span>
            </p>
        </div>
	)
}

export default Resultado
