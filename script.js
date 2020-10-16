                                      /*click event*/
  let Ul = document.getElementById('lists');
  let Btn2= document.getElementById("btn");
      Btn2.addEventListener("click",function Addelement(){
  let Inputvalue= document.getElementById("input").value;
  let Text=document.createTextNode(Inputvalue);
     if(Inputvalue===""){
      alert("Write something");
     }
    else{
       let Li =document.createElement("li");
      let Checkbox = document.createElement("input");
        Checkbox.type = 'checkbox';
     Checkbox.setAttribute('id','check');
    let Label = document.createElement('label');
    Ul.appendChild(Label);
    Li.appendChild(Checkbox);
	Li.appendChild(Label);	
   Label.appendChild(Text);
   Ul.appendChild(Li);
 }
  })
                                             /*keyup event*/
var Input2= document.getElementById("input");
   Input2.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
   var Inputvalue= document.getElementById("input").value;
   var Text=document.createTextNode(Inputvalue);
     if(Inputvalue===""){
      alert("Write something");
     }
	 else{
       Li =document.createElement("li");
      var Checkbox = document.createElement("input");
        Checkbox.type = 'checkbox';
     Checkbox.setAttribute('id','check');
    var Label = document.createElement('label');
    Ul.appendChild(Label);	
    Li.appendChild(Checkbox);
	Li.appendChild(Label);
   Label.appendChild(Text);
   Ul.appendChild(Li);
 }
  }
	  })
  
  
  