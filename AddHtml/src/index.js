import {add} from './submodule.js'

function calc() {
    console.log(add(1, 2))
}

window.calc = calc