import cep from './modules/cepMasks.js'
import { getUFByCEP, getCovidInfoByUF } from './modules/get-data-byCEP.js'

document.querySelector('input').addEventListener(
  'input',
  cep => {
    cep.target.value = cep(cep.target.value)
  },
  false
)

const form = document.querySelector('#form')
form.addEventListener('submit', e => {
  e.preventDefault()
  search()
})

async function search() {
  results.innerHTML = ''
  getCovidInfoByUF(getUFByCEP)
  cep.value = ''
}
