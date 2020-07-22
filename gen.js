function myFunction(id) {
 var str1 = document.getElementById("input1").value;
 var str2 = document.getElementById("input2").value;
 var num1 = document.getElementById("inputnum1").value;
 var num2 = document.getElementById("inputnum2").value; 
 str1 = str1.slice(0,num1);
 str2 = str2.slice(0,num2);
 var result = str1.concat(str2);
 result = result.slice(0,5);
 document.getElementById("output1").value = result;
 }
