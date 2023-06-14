//Using restcountries API URL
// Display COuntries flags, name, region, subregion and population
//no response From given api url https://restcountries.eu/rest/v2/all
// i used ver3 API URL https://restcountries.com/v3.1/all 
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags);
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);
  }
};

//Comparing TWO JSON
// varobi1JSON ={name:"person1",age:5};
// varobj2JSON ={age:5,name:"person1"};
//stringify - Converts Javascript value into JSON strings 

// console.log( _.isEqual(varobi1JSON, varobj2JSON) ); (NO IDEA)
const object1 = {
    name: "jameel",
    age:26
  };
      
  const object2 = {
    age: 26,
    name: "jameel"
  };
      
console.log(JSON.stringify(object1) === JSON.stringify(object2));
//result ; false
