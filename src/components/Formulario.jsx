import { Fragment } from "react"
import { MARCAS, YEARS, PLANS } from "../constants"
import { useCotizador } from "../hooks"
import Error from "./Error"

const Formulario = () => {

	const { data, handleChangeData, error, setError, handleCotizar } = useCotizador()

	const handleSubmit = (e) => {
		e.preventDefault()
		if (Object.values(data).includes("")) {
			setError("Todos los campos son obligatorios")
			return
		}
		setError("")
		handleCotizar()
	}

	return (
		<div>
			{ error && (<Error />) }
			<form
				onSubmit={handleSubmit}
			>
				<div className="my-5">
					<label
						className="block bg-3 font-bold text-gray-400 uppercase"
						htmlFor="brand"
					>
						Marca
					</label>
					<select
						id="brand"
						name="brand"
						className="w-full p-3 bg-white border border-gray-200"
						onChange={handleChangeData}
						value={data.brand}
					>
						<option value="">Selecciona Marca</option>
						{MARCAS.map((marca) => (
							<option key={marca.id} value={marca.id}>
								{marca.name}
							</option>
						))}
					</select>
				</div>
				<div className="my-5">
					<label
						className="block bg-3 font-bold text-gray-400 uppercase"
						htmlFor="year"
					>
						Año
					</label>
					<select
						id="year"
						name="year"
						className="w-full p-3 bg-white border border-gray-200"
						onChange={handleChangeData}
						value={data.year}
					>
						<option value="">Selecciona Año</option>
						{YEARS.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>
				<div className="my-5">
					<label
						className="block bg-3 font-bold text-gray-400 uppercase"
						htmlFor="plan"
					>
						Elige un Plan
					</label>
					<div className="flex gap-3 items-center">
						{PLANS.map((plan) => (
							<Fragment key={plan.id}>
								<label>
									{plan.name}
								</label>
								<input
									id={plan.id}
									type="radio"
									name="plan"
									value={plan.id}
									onChange={handleChangeData}

								/>
							</Fragment>
						))}
					</div>
				</div>
				<input
					type="submit"
					value="Cotizar"
					className="w-full bg-indigo-500 hover:bg-indigo-600 rounded transition-colors cursor-pointer p-3 font-bolf text-white uppercase font-semibold"
				/>
			</form>
		</div>
	)
}

export default Formulario
