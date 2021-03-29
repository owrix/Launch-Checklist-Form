window.addEventListener("load", function() {
      
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
             
      if ((pilotName.value === '')|| (copilotName.value === '')||(fuelLevel.value === '') || (cargoMass.value === '')) {
         alert("Please fill out all sections");
         event.preventDefault();
      }
      else if (isNaN(pilotName.value) === false|| isNaN(copilotName.value) === false){
         alert("Please provide pilot/copilot name");
         event.preventDefault();
      }
      else {
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value} is ready for launch`;
         if (fuelLevel.value < 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = `${fuelLevel.value} L of fuel is not enough, you will need 10,000 L`;
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for launch";
            document.getElementById("launchStatus").style.color = "#ff6347"; /yum/
         }
         if (cargoMass.value > 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = `${cargoMass.value} kg of cargo is too much, it must be below 10,000 kg`;
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT ready for launch";
            document.getElementById("launchStatus").style.color = "#ff6347"; /yum/
         }
         if (cargoMass.value <= 10000 && fuelLevel.value >= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch!";
            document.getElementById("launchStatus").style.color = "#33cc33"; /lets go/
         }
         event.preventDefault();
      }
   })

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML =
         `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}"></img>
         `
      })
   })

})




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
