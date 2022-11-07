import Header from "./components/Header/Header"
import { useState } from 'react';

function App () {
  //remetente atual
  const [currSender, setCurrSender] = useState("Me")

  //possíveis remetentes
  const [senders, setSenders] = useState([
    "Me",
    "Fulano",
    "Ciclano",
    "Beltrano",
    "Astrodev"
  ])

  //mudar remetente atual
  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }

  return (
    <>
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender}
      />

      <h1>{currSender}</h1>
      <p>Testando nova branch</p>
    </>
  )
}

export default App