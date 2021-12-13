import 'bootstrap/dist/css/bootstrap.min.css'
import 'regenerator-runtime'
import './styles/style.css'
import './script/component/food-bar'
import './script/component/food-ter'
import AOS from 'aos'
import { search, main } from './script/view/main'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 1200
})

document.addEventListener('DOMContentLoaded', search)
document.addEventListener('DOMContentLoaded', main)
