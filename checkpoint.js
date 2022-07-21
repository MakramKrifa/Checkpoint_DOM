function show(){
 var drop= document.getElementById("dropdown")
     drop.style.display=drop.style.display=="block"?"none":"block"
}

function add(){
         document.querySelectorAll('.btn').forEach(item => {
            item.addEventListener('click', event => {
                itemcopy = item.parentElement.cloneNode(true);
               
                itemcopy.setAttribute("class","added")
                console.log(item.parentElement)
           
              var newbtn =  document.createElement("button")
              newbtn.innerText='remove item'
              itemcopy.append(newbtn)
             

              document.getElementById("dropdown").append(itemcopy)
               
            })
         })
 

}
add()