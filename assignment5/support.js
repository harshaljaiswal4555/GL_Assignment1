
var myObj = [{ "id": "user1", "name": "Raju", "Age": "34" },
{ "id": "user2", "name": "Sita", "Age": "43" },
{ "id": "user3", "name": "Mita", "Age": "22" },
{ "id": "user4", "name": "Rita", "Age": "37" },
{ "id": "user5", "name": "Ram", "Age": "65" },
{ "id": "user6", "name": "Maya", "Age": "42" },
{ "id": "user7", "name": "Siya", "Age": "25" }
];

var dataInTab=[];

var userList = document.getElementById("userList");
var tableRef = document.getElementById("tab1");
var btn = [];
var i = 0;

myObj.forEach(element => {
  console.log(element);
  btn[i] = document.createElement("DIV");

  btn[i].id = element["id"];
  btn[i].draggable = true;
  btn[i].addEventListener('dragstart', function () { drag(event) }, false);

  btn[i].classList.add("user1");
  btn[i].innerHTML = element["id"];
  userList.appendChild(btn[i]);

   var newRow = tableRef.insertRow(-1);

  for (var j = 0; j < 4; j++) {
    var tabCell = newRow.insertCell(-1);
    tabCell.addEventListener('drop', function () { drop(event) }, false);
    tabCell.addEventListener('dragover', function () { allowDrop(event) }, false);
    var idd="id-" + i + "-" + j;
    tabCell.id = idd;

    var res ={ };
    res[idd]="";
    dataInTab.push(res);
    tabCell.addEventListener('dragenter', function () { handleDragEnter(event) }, false);
  }

  i++;
});


console.log(JSON.stringify(dataInTab));


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function handleDragEnter(e) {
  e.preventDefault();
  // this / e.target is the current hover target.
  this.className = 'tab2';
}

function removeElement(idt,ido){ 
  //var ss=document.getElementById(idt);

  document.getElementById(idt).innerHTML="";
  document.getElementById(idt).style.background="none";
  let temp  = document.createElement("DIV");

  temp.id = ido;
  temp.draggable = true;
  temp.addEventListener('dragstart', function () { drag(event) }, false);

  temp.classList.add("user1");
  temp.innerHTML = ido;
  userList.appendChild(temp);
  
};

function drop(ev) {
  ev.preventDefault();
  console.log(ev);
  var data = ev.dataTransfer.getData("text");
  //console.log(data);
  var p;
  for (k = 0; k < 7; k++) {
    if (myObj[k].id == data) {
      console.log(myObj[k].id);
      console.log(myObj[k].name);
      console.log(myObj[k].Age);
      p = myObj[k].id;
      var q = myObj[k].name;
      var r = myObj[k].Age;
    }
  }
 
  console.log(ev.target.id);
  document.getElementById(ev.target.id).innerHTML = p + "<br>" + q + "<br>" + r+"<br><button type=\"button\" onclick=\"removeElement('"+ev.target.id+"','"+data+"')\">X</button>";
  document.getElementById(ev.target.id).style.background="rgb(46,232,207)";
  document.getElementById(ev.target.id).drop="false";
  ev.dataTransfer.dropEffect = "move";
  ev.target.appendChild(document.getElementById(data));

  dataInTab[ev.target.id]=data;

  dataInTab.forEach(element => {
    console.log(element);
    if(element==ev.target.id){
      element[ev.target.id]=data;
    }
  });
  
  removeEventListener(data,drop(ev));

}