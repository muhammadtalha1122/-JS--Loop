// for(var i=0;i<10;i++){
    //     console.log("run loop ",+ i)
    // }
    
    // var arr = []
    // for(let i = 1; i <=10;i++){
    //     let add = prompt("Enter an input");
    //     var checker = false;
    //     for(var j=0;j<add.length;j++){
    //         if(add.charCodeAt(j)==32 && add.charCodeAt(j-1)==32 ){
    //             checker= true
    //             break  
    //         }
    //     }
    //     if(add== "" || checker){
    //         break
    //     }
    //     else{
    //         arr.unshift(add);
    //     }
        
    // }
    
    // console.log(arr)
    // var starting_value = prompt("Enter Start Value")
    // var ending_value = prompt("Enter End  Value")
    // if(starting_value<=ending_value){
    //     for(var i=starting_value;i<ending_value;i++){
    //         console.log("value show ",i)
    //     }
    // }
    // else{
    //     console.log("enter correct data");
    // }
    
    // let cities = ["hyd","karachi","sargodha","islamabad","ahmedabad","rahim yar khan","moro"]
    // let inp = prompt("Enter City name")
    // var flag = false  // data found yes or not
    // for(let i=0;i<cities.length;i++){
    //    if(inp==cities[i]){
    //    flag=true
    //    break
    //    }
    // }
    // if(flag){
    //     console.log("City found")
    // }
    // else{
    //     console.log("not found")
    // }
    
    // for(var i=1;i<=5;i++){
    //     for(var j=1;j<=i;j++ ){
    //         document.write(i)
    //     }
    //     document.write("<br/>")
    // }
    
    // var arr =[11,12,30,2,45,133,5,6,78]
    // for(var i=0;i<arr.length;i++){
    //     for(var j=0;j<arr.length;j++ ){
    //         if(arr[i]<arr[j]){
    //             temp = arr[i]
    //             arr[i]= arr[j]
    //             arr[j]=temp
    //         }
    //     }
    // }
    // console.log(arr)
    
    // var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
    // var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
    
    
    // for(var i=0;i<firstNames.length;i++){
    //     for(var j=0;j<lastNames.length;j++){
    //         console.log(firstNames[i]+ " "+ lastNames[j])
    //     }
    
    // }
    
    //find large number 
    
    // var arr =[11,12,30,2,45,133,5,6,78]
    // var largestnumber =arr[0]
    // console.log(largestnumber)
    
    // in or of
    
    // for(var i=0;i<arr.length;i++){
    //     if(largestnumber<arr[i]){
    //         console.log(arr[i])
    //         largestnumber = arr[i]
    //     }
    // }
    // console.log(largestnumber)
    
    // in  =>index 
    // of=>value 
    
    // var arr =["ind","sa","ban","nz"]
    // for(let data of arr){
    //     console.log(data)
    
    // }
    // console.log("*****")
    // for(let index in arr){
    //     console.log("index is :"+ index  +"value " +  arr[index])
    // }
    
    // var arr =[11,12,30,2,45,133,5,6,78]
    // let largetsnumber = arr[0]
    // for(let data of arr){
    //     if(largetsnumber<data){
    //         largetsnumber=data
    
    //     }
    
    
    
    // }
    // console.log(largetsnumber)
    
    // var arr = [
    //     [1,2,3,4],
    //     [1,2,3,4],
    //     [0,0,0,0]
    // ]
    
    // for(var index in arr){
    //     for(var data of arr[index]){
    //         document.write(data+" ")
    //     }
    //     document.write("<br>")
    // }
    
    
    // let inptable= prompt("Enter Table number")
    // let count = prompt("Enter The length of table")
    // for(var i=1;i<=count;i++){
    //     document.write(inptable + "* "+ i + ": "+ inptable*i)
    //     document.write("<br/>")
    // }
    
    // for(var i=2;i<=20;i=i+2){
    //     if(i==20){
    //         document.write(i+"k")   
    //     }
    //     else{
    //         document.write(i+"k,")   
    //     }
     
    // }
    // for(var i=1;i<=10; i++){
    //     document.write( i)
    // }
    // var arr =["12","32","550","230","908","1","100"]
    // let largestnumber=arr[0]
    // for(let data of arr){
    //     if(largestnumber<data){
    //         largestnumber=data
    //     }
    // }
    // document.write(largestnumber)

    let arr=[
        [1,2,3,4],
        [4,3,5,6],
        [5,3,4,1]
    ]
    for(var index in arr){
      for(  var data of arr[index]){
        document.write(data,"")

      }
      document.write("<br/>")     
    }
   