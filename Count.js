const Num = document.getElementById("num")



let n = (localStorage.getItem("n"))? parseInt(localStorage.getItem("n")):0;
Num.innerText = n;



function increment() {
     n++
     Num.innerText = n;
     localStorage.setItem("n", n)


}
function Descrement() {
     if (n > 0) {
          n--
          Num.innerText = n;
          localStorage.setItem("n", n)
     }




}
function reset() {
     n = 0;
     Num.innerText = n;
     localStorage.setItem("n", n)

}
function add(event) {
     event.preventDefault()
     const inputValue = parseInt(document.getElementById('value').value)
    
     if (!isNaN(inputValue)) {
          n += inputValue;
          Num.innerText = n;
          localStorage.setItem("n", n)
      
     }

}

