import NavBar from './components/NavBar'
import Galeria from './components/Galeria'
import Buttons from './components/Buttons'
import Description from './components/Description'

function GaleriaApp() {
  addEventListener('scroll', (e)=>{
    let y = window.scrollY
    if (y > 620) {
      document.querySelector('.buscador').classList.add('buscadorS')
    }else{
      document.querySelector('.buscador').classList.remove('buscadorS')
    }
  })
  return (
    <>
      <Description/>
      <NavBar/>
      <Galeria/>
      <Buttons/>
    </>
  )
}

export default GaleriaApp