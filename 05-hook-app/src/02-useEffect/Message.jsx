import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Messaged Mounted');

      return () => {
        console.log('Messaged Unmounted');
      }
    }, []);


  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
