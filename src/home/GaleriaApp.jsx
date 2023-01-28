import NavBar from './components/NavBar'
import Galeria from './components/galeria'
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
    <div>
      <Description/>
      <NavBar/>
      <Galeria/>
      <Buttons/>
    </div>
  )
}

export default GaleriaApp