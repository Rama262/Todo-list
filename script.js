var ul = document.getElementById('lists');
  var btn2= document.getElementById("btn");
      btn2.addEventListener("click",function addelement(){
  var inputvalue= document.getElementById("input").value;
  var text=document.createTextNode(inputvalue);
     if(inputvalue===""){
      alert("write something");
     }
    else{
       li =document.createElement("li");
      var checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
     checkbox.setAttribute('id','check');
    var label = document.createElement('label');
    ul.appendChild(label);  
    li.appendChild(checkbox);
   label.appendChild(text);
   
   li.appendChild(label);
   ul.appendChild(li);
 }
  })