import type { PageLoad } from './$types';

async function getDolarInfo() {
  try {
    const resp = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")

    const parsedResp = await resp.json()

    return parsedResp as {casa: {compra: string; venta: string; agencia: string; nombre: string; variacion: string; ventaCero: string; decimales: string}}[]

  } catch (error) {
    console.log(error)
  }
}

export const load = (async () => {

  const dolarInfo = await getDolarInfo()

  if(dolarInfo) {
    const parsedDolarInfo = dolarInfo.map(({casa}) => ({...casa}))

    return {
      dolarInfo: parsedDolarInfo
    }
  }

}) satisfies PageLoad;