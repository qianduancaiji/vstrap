
import './layui/css/layui.css'
console.log('fdsafds')
let oLi = document.querySelectorAll('li')
oLi.forEach((item, index) => {
	let r = index * 20
  item.style.background = `rgb(${r}, ${r}, ${r})`
})


