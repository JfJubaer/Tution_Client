import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title} _ Tution-Point`;
    },[title])
}

export default useTitle;