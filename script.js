const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var Array;

function List(First_Name,Surname,Contact_Number,Game_Session) {
  this.First_Name = First_Name;
  this.Surname = Surname;
  this.Contact_Number = Contact_Number;
  this.Game_Session = Game_Session;
}


const LISTS = [
  new List('Joe','Caputo','7658312387','Black Rain'
), new List('Piper','Chapman','7142548798','Black Rain'
), new List('Tasha','Jefferson','7998987220','Black Rain'
), new List('Gloria','Mendoza','7512645873','Black Rain'
), new List('Theodore','Bagwell','7561384896','One Last Riddle'
), new List('Brad','Bellick','7883256418','One Last Riddle'
), new List('Lincoln','Burrows','7112356983','One Last Riddle'
), new List('Fernando','Sucre','7963212321','One Last Riddle'
), new List('Sara','Tancredi','7954186684','One Last Riddle'
), new List('Daryl','Dixon','7325649845','The Burning Plague'
), new List('Maggie','Greene','7459832185','The Burning Plague'
), new List('Carol','Peletier','7124979566','The Burning Plague'
), new List('Eugene','Porter','7223654987','The Burning Plague'
), new List('Billy','Cranston','7985645784','The Sea Witch'
), new List('Kimberly','Hart','7815307459','The Sea Witch'
), new List('Trini','Kwan','7548755285','The Sea Witch'
), new List('Tommy','Oliver','7989444568','The Sea Witch'
), new List('Jason','Scott','7774854987','The Sea Witch'
), new List('Zack','Taylor','7845222547','The Sea Witch'
), new List('Joyce','Byers','7954668187','Tomb of Horrors'
), new List('Dustin','Henderson','7889554857','Tomb of Horrors'
), new List('Jim','Hopper','7954845148','Tomb of Horrors'
), new List('Nancy','Wheeler','7445845711','Tomb of Horrors'
)
];



function loop_search(Array) {


    for (i = 0; i < 23; i++) {
    if (LISTS[i].Game_Session == testArea.value ) {
      testWrapper.style.borderColor = "Green";
     Array[i] = LISTS[i].First_Name + " " + LISTS[i].Surname + " " + LISTS[i].Contact_Number;
     theTimer.innerHTML += " " + Array[i] + "<br />";
        }
      }
    }









// Match the text entered with the provided text on the page:


// Start:
  function reset() {
  theTimer.innerHTML = '';
  testArea.value = '';
  testWrapper.style.borderColor = "Grey";
  }


// Reset everything:


// Event listeners for keyboard input and the reset button:
// testArea.addEventListener("keypress", loop_search, false);
testArea.addEventListener("keyup", loop_search, false);
resetButton.addEventListener("click", reset, false);
