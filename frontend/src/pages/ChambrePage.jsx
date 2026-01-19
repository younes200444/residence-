import ChambreView from "../componenet/ChambreView";
import {useCallback, useEffect} from "react";
import {useGlobalData} from "../context/GlobalDataContext";
import {fetchRooms} from "../api/acceuilServiceApi";

const ChambrePage= ()=> {

    const {
        pageAccueil,
        setPageAccueil,
    }=useGlobalData();

    const init = useCallback(async () => {
        const responseApi = await fetchRooms();
        setPageAccueil(responseApi?.response)


    }, []);
    useEffect(()=>{
        init();
    },[init])


    return <ChambreView pageAcceuil={pageAccueil}/>
}

export default ChambrePage;