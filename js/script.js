'use strict' 

function Plan(name, description, view, year, nameClass, size){
    this.name = name; 
    this.description = description;
    this.view = view;
    this.year = year;
    this.nameClass = nameClass;
    this.size = size;
  }
  Plan.prototype.getNameDescription = function(){
    return this.description;
  }
  Plan.prototype.getNameSize = function(){
    return this.name + ' размер соцветия равен: ' + this.size;
  }
  let plan = new Plan('rose', 'common rose', 'common', '2 weeks', 'secondClass', '7 sm', 'Europe');
  console.log(plan.getNameDescription());
  console.log(plan.getNameSize());
  function Folder(name, description, view, year, nameClass, size, classDangerous, place, applicationArea){
    Plan.call(this, name, description, view, year, nameClass, size, applicationArea);
    this.classDangerous = classDangerous;
    this.place = place;
  }
  Folder.prototype = Object.create(Plan.prototype);
  Folder.prototype.getClassDangerous = function(){
    return this.classDangerous;
  }
  let folder = new Folder('Birch', 'common birch', 'common', '10 years', 'firstClass', '4 sm', 'Europe');
  console.log(folder.getClassDangerous());
  console.log(folder.getNameSize());

  function Doc(name, description, view, year, nameClass, size, applicationArea){
    Plan.call(this, name, description, view, year, nameClass, size);
    this.applicationArea = applicationArea;
  }

  Doc.prototype = Object.create(Plan.prototype);
  Doc.prototype.getNameApplicationArea = function(){
    return this.name + ' ' + this.applicationArea;
  }

  let doc = new Doc('Buckthorn', 'buckthorn alder', 'alder', '2 years', 'secondClass', '15 sm', 'Europe');
  console.log(doc.getNameApplicationArea());
  console.log(doc.getNameDescription());
  

  function got() {
      // Объявление переменных
    let inpOne = document.getElementById("inp-1").value;
    let inpTwo = document.getElementById("inp-2").value;
    let inpThree = document.getElementById("inp-3").value;
    let inpFour = document.getElementById("inp-4").value;
    let inpFive = document.getElementById("inp-5").value;
    let inpSix = document.getElementById("inp-6").value;
    let inpSeven = document.getElementById("inp-7").value;
    let inpEight = document.getElementById("inp-8").value;
    let tdOne = document.getElementById("td-1");
    let tdTwo = document.getElementById("td-2");
    let tdThree = document.getElementById("td-3");
    let tdFour = document.getElementById("td-4");
    let tdFive = document.getElementById("td-5");
    let tdSix = document.getElementById("td-6");
    let tdSeven = document.getElementById("td-7");
    let tdEight = document.getElementById("td-8");
  
    //Вывод данных в консоль
    console.log('name: ',inpOne);
    console.log('description: ',inpTwo);
    console.log('view: ',inpThree);
    console.log('year: ',inpFour);
    console.log('nameClass:',inpFive);
    console.log('size: ',inpSix);
    console.log('applicationArea: ',inpSeven);
    console.log('checkbox: ',inpEight);

  
    let i = 0
    function dump() {
        let table = document.querySelector("table")
        let original = document.getElementById('table-id')
        let clone = original.cloneNode(true)
        clone.id = "table-id-" + ++i
        table.appendChild(clone);
    tdOne.innerText = inpOne
    tdTwo.innerText = inpTwo
    tdThree.innerText = inpThree
    tdFour.innerText = inpFour
    tdFive.innerText = inpFive
    tdSix.innerText = inpSix
    tdSeven.innerText = inpEight
    tdEight.innerText = inpSeven
    }
    dump()
  }
  
  // Функция кнопки удалить из таблицы
  
  function del() {
    let tableRow = document.getElementById('table-tr')
    tableRow.remove()
  }
  