/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  // console.log all the employees which have the profession of developer using the map function.
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
     arr.map((item)=>{
         if(item.profession=="developer"){
            console.log(item);
         }
     });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    //PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
     arr.forEach((item)=>{
      if(item.profession=="developer"){
        console.log(item);
      }
     });
  }
  
  function addData() {
    //Write your code here, just console.log
    //addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
    let item={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(item);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.
    /*let new_arr=[];
    for(let i=0;i<arr.length;i++){
    if(arr[i].profession!="admin"){
      new_arr.push(arr[i]);
     }
    }
    console.log(new_arr);
  */
    const updated_arr=arr.filter(item=>item.profession!="admin");
     console.log(updated_arr);
   
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    //ConcatinateArray() - Make another array with 3 objects just like the one in the above given array.
    let my_Arr=[{id:5,name:"suhan",age:"30",profession:"cto"},
    {id:6,name:"suhani",age:"40",profession:"ceo"},
    {id:7,name:"suman",age:"23",profession:"doctor"}];

    let result=arr.concat(my_Arr);
    console.log(my_Arr);
  }