 let all = [];

function addCar(){
    let carName = document.getElementById("ism").value;
    let surName = document.getElementById("familya").value;
    let date = document.getElementById("date").value;
    let carPhoto = document.getElementById("photo").value;
    let carMoney = document.getElementById("tolov").value;


    document.getElementById("ism").value="";
    document.getElementById("familya").value="";
    document.getElementById("date").value="";
    document.getElementById("photo").value="";
    document.getElementById("tolov").value="";


    let newCar ={
        name: carName,
        surName: surName,
        date: date,
        photo: carPhoto,
        money: carMoney
    }

    all.push(newCar);
    console.log(all);
    drowCard()
}



function drowCard() {
    let result = "";

    for(let i = 0; i<all.length; i++){
        result+=`
               <div class=" col-12 mt-3">
               <tr>
               <td>${i+1}</td>
               <td><p>${all[i].name + " " + all[i].surname}</p></td>
               <td><p>${all[i].date}</p></td>
               <td><img class="photo w-25" src="${all[i].phote}" alt="Error!"></td>
               <td><p>${all[i].money}</p></td>
               <td><button class="btn btn-danger btn-block" onclick="deleteStudent(${i})">Delete</button></td>
           </tr>
               </tr>
               </div>
            `
    }

   


    


    document.getElementById("natija").innerHTML = result; 
}


function deleteStudent(index){
  all.splice(index, 1);
  saveStudent();
}