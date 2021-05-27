let lista: Array<string> = [];

const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const ul = document.querySelector('.ul') as HTMLUListElement
let lis = document.getElementById('lis') as HTMLUListElement
let botao = document.querySelector('button') as HTMLButtonElement
const sublinhado = 'sub'



form.addEventListener('submit', function(event: Event){

  event.preventDefault()
  lista.push(username.value)   
  let li = document.createElement("li") as HTMLLIElement 
  
  console.clear()
  
  
  for (var i:number = 0; i<lista.length; i++){
    console.log(lista[i] + ' ' + [i])
    
           
    li.innerText = lista[i]
    lis?.appendChild(li)   
    
    if(i != 0){
      console.log("passei por aqui" + [i])
      li.classList.add(sublinhado)
      
    }else{
      console.log("Não funcionou"+ [i])
    }
 }

})


  

  




    
