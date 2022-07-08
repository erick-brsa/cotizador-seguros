import { useCotizador } from "../hooks"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

const AppSeguro = () => {

  const { result, loading } = useCotizador()
  
  return (
    <>
        <header className="my-10">
          <h1 className="text-white text-center text-4xl font-black">
              Seguros
          </h1>
        </header>
        <main className="bg-white md:w-2/3 lg:2/4 mx-auto shadow-lg p-10 rounded">
            <Formulario />

            
              { loading ? (
                <Spinner />
              ) : (
                <Resultado />
              )}
        </main>
    </>
  )
}

export default AppSeguro