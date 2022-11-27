const cantBtn = document.getElementById("numero");
const sectionBtn = document.getElementById("sectionBtn")
const contBtn = document.getElementById("contBtn")
const btnCrear = document.getElementById("btnCrear");
const btnEliminar = document.getElementById("btnEliminar")

btnCrear.addEventListener("click", () =>{
    let numBtn = Number(cantBtn.value)
    btnCrear.setAttribute("disabled", true)
    for (let i = 0; i < numBtn; i++) {
       const button = document.createElement("button")
        button.type ="Button"
        button.value = "Click"
        button.className="btnjs"
        button.id="aca"
        button.addEventListener("click",()=>{contBtn.innerText= `Apretaste el boton ${i+1}`;})
        button.textContent=`Boton ${i+1}`
       sectionBtn.appendChild(button)
    }
});

btnEliminar.addEventListener("click", ()=>{
    const sectionBtnA = sectionBtn.querySelectorAll("button")
    sectionBtnA.forEach(button => button.remove());
    contBtn.innerText=""
    btnCrear.removeAttribute("disabled")
})