import type { PageLoad } from './$types';

async function getDolarInfo() {
  try {
    const resp = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const lastUpdateResp = await fetch("https://www.dolarsi.com/api/api.php?type=ultima")

    const parsedLastUpdatedResp = await lastUpdateResp.json()
    const parsedResp = await resp.json() as {casa: {compra: string; venta: string; agencia: string; nombre: string; variacion: string; ventaCero: string; decimales: string}}[]


    const lastUpdate = parsedLastUpdatedResp[0].ultima.zona12

    const formattedArray = parsedResp.map(({casa}) => ({...casa, actualizacion: lastUpdate.fecha}))

    return formattedArray

  } catch (error) {
    console.log(error)
  }
}

export const load = (async () => {

  const dolarInfo = await getDolarInfo()

  if(dolarInfo) {
    return {
      dolarInfo
    }
  }

}) satisfies PageLoad;