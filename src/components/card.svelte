<script lang="ts">
	interface IInfo {
		compra: string;
		venta: string;
		agencia: string;
		nombre: string;
		variacion: string;
		ventaCero: string;
		decimales: string;
		actualizacion: string;
	}
	export let info: IInfo;

	console.log(info);

	const parseToCurrency = (value: string) => {
		const parsedToNumberValue = Number(value.replace('.', '').replace(',', '.'));

		if (isNaN(parsedToNumberValue) || parsedToNumberValue === 0) {
			return '-';
		}

		return parsedToNumberValue.toLocaleString('es-AR', {
			style: 'currency',
			currency: 'ARS'
		});
	};
</script>

<div
	class="border-2 rounded border-black py-2 flex flex-col gap-2 drop-shadow-xl px-4 w-72 justify-center"
>
	<div class="border-b-2 border-black pb-1">
		<h2 class="uppercase text-center text-2xl font-semibold">
			{info.nombre}
		</h2>
	</div>
	<div class="flex justify-around items-center border-b-2 border-black pb-1">
		<div class="flex flex-col justify-center items-center">
			<span class="uppercase font-semibold">compra</span>
			<span
				>{parseToCurrency(info.compra)} {info.nombre.toUpperCase() === 'BITCOIN' ? 'USD' : ''}</span
			>
		</div>
		<div class="flex flex-col justify-center items-center">
			<span class="uppercase font-semibold">venta</span>
			<span>{parseToCurrency(info.venta)}</span>
		</div>
	</div>
	<div class="border-b-2 border-black pb-1 flex justify-center items-center gap-1	">
		<span
			class={`${
				Number(info.variacion.replace(',', '.')) > 0 ? 'text-red-900' : 'text-green-900 rotate-180'
			}`}
		>
			{info.nombre.toUpperCase() === 'BITCOIN' || info.variacion === '0' ? '❖' : '▲'}</span
		>
		<span class="font-bold"> Variación: </span>
		<span
			class={`${
				Number(info.variacion.replace(',', '.')) > 0 ? 'text-red-900' : 'text-green-900'
			} font-semibold`}
			>{info.nombre.toUpperCase() === 'BITCOIN' || info.variacion === '0'
				? '-'
				: info.variacion + '%'}</span
		>
	</div>
	<div class="uppercase font-semibold flex justify-center items-center">
		<span>actualizado: {info.actualizacion}</span>
	</div>
</div>
