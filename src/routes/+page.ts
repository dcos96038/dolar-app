import type { PageLoad } from './$types';

interface IDataResp {
  casa: {
    compra: string;
    venta: string;
    agencia: string;
    nombre: string;
    variacion: string;
    ventaCero: string;
    decimales: string
  }
}

interface IDateResp {
  ultima: {
    [key: string]: {
      fecha: string;
      nombre: string;
      hora: string;
    }
  }
}


async function getDolarInfo() {
  try {
    const resp = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const lastUpdateResp = await fetch("https://www.dolarsi.com/api/api.php?type=ultima")

    const parsedLastUpdatedResp = await lastUpdateResp.json() as IDateResp[]

    const parsedResp = await resp.json() as IDataResp[]

    const lastUpdate: string = parsedLastUpdatedResp[0].ultima.zona12.fecha

    const formattedArray = parsedResp.map(({casa}) => ({...casa, actualizacion: lastUpdate}))

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