window.addEventListener("load", function() {

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         const randomDestination = Math.floor(Math.random() * 6);
         div.innerHTML =
         `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomDestination].name}</li>
            <li>Diameter: ${json[randomDestination].diameter}</li>
            <li>Star: ${json[randomDestination].star}</li>
            <li>Distance from Earth: ${json[randomDestination].distance}</li>
            <li>Number of Moons: ${json[randomDestination].moons}</li>
         </ol>
         <img src="${json[randomDestination].image}"></img>
         `
      })
   })
      
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems")
      let fuelStatus = document.getElementById("fuelStatus")
      let launchStatus = document.getElementById("launchStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      
      event.preventDefault();

      faultyItems.style.visibility = "visible";


      if ((pilotName.value === '') || (copilotName.value === '') || (fuelLevel.value === '') || (cargoMass.value === '')) {
         alert("Please fill out all sections");
      }

      else if (isNaN(pilotName.value) === false|| isNaN(copilotName.value) === false){
         alert("Please provide pilot/copilot name");
      }

      else if (isNaN(fuelLevel.value) === true|| isNaN(cargoMass.value) === true){
         alert("Please provide a number for fuel level/cargo mass");
      }

      else {
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value} is ready for launch`;
         

         if (fuelLevel.value < 10000){
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `${fuelLevel.value} L of fuel is not enough, you will need 10,000 L`;
            launchStatus.innerHTML = "Shuttle NOT ready for launch";
            launchStatus.style.color = "#d31d1d"; /red/
            fuelStatus.style.color = "#d31d1d"; /red/
         } else {
            fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} L. Ready for launch`;
            fuelStatus.style.color = "black"
         }

         if (cargoMass.value > 10000){
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `${cargoMass.value} kg of cargo is too much, it must be below 10,000 kg`;
            launchStatus.innerHTML = "Shuttle NOT ready for launch";
            launchStatus.style.color = "#d31d1d"; /red/
            cargoStatus.style.color = "#d31d1d"; /red/
         }  else {
            cargoStatus.innerHTML = `Cargo level ${cargoMass.value} kg. Ready for launch`;
            cargoStatus.style.color = "black"
         }

         if (cargoMass.value <= 10000 && fuelLevel.value >= 10000){
            launchStatus.innerHTML = "Shuttle ready for launch!";
            launchStatus.style.color = "#24913e"; /green/
            fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} L. Ready for launch`;
            cargoStatus.innerHTML = `Cargo level ${cargoMass.value} kg. Ready for launch`;
            

            
         }
      }
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
