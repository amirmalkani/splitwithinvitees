let sugadd = document.getElementById('sugadd');
let sugval = document.getElementById('exampleFormControlTextarea1');
sugadd.addEventListener('click',()=>{
    sugadd.setAttribute("href", `whatsapp://send?text= ${sugval.value}&phone=+919004338890`);
    sugval.value = '';
})