var chrs = [
  {name:"Optimus Prime", class:"leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class:"leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class:"scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class:"scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class:"soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class:"soldier", afl:"decepticon", vehicle:"tank"},
];

function createTF(tf){
	var displayDiv = document.createElement("div");
	displayDiv.classList.add("character");
	
	var theName = document.createElement("h3");
	theName.innerHTML="Name: "+tf.name;
	
	var theClass = document.createElement("h3");
	var classText = tf.class;
	var capText = classText.toUpperCase()
	theClass.innerHTML="Class: "+capText;
	
	var theAfl = document.createElement("img");
	if (tf.afl==="autobot"){
		displayDiv.classList.add("autobot");
		theAfl.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
	}else if(tf.afl==="decepticon"){
		displayDiv.classList.add("decepticon");
		theAfl.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
	}
	
	var theVehicle = document.createElement("h3");
	if (tf.vehicle==="truck"){theVehicle.style.color="blue";}
	else if (tf.vehicle==="tank"){theVehicle.style.color="green";}
	else if (tf.vehicle==="car"){theVehicle.style.color="gold";}
	else if (tf.vehicle==="plane"){theVehicle.style.color="white";}
	theVehicle.innerHTML = "Vehicle: "+tf.vehicle;
	
	displayDiv.appendChild(theName);
	displayDiv.appendChild(theClass);
	displayDiv.appendChild(theAfl);
	displayDiv.appendChild(theVehicle);
	document.body.appendChild(displayDiv);
}
for(var i=0;i<chrs.length;i++){
	createTF(chrs[i]);
}
// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepticon"

// in the top right, based on the top information, insert an img element for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white