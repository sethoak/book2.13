//define array
const addressArray = [];

function masterBuilder(personObj) {
  return `
        <div>
            <h2>Name: $[personObj.name]</h2>
            <h2>Address: $[personObj.address]</h2>
        </div>
            `;
}

//adding an event via clicking a button on the mouse
document.querySelector("#saveEntry").addEventListener("click", event => {
  //
  const personName = document.querySelector("#fullName").value;
  const personAddress = document.querySelector("#address").value;
  const person = {
    name: personName,
    address: personAddress
  };
  addressArray.push(person);
  document.querySelector("#addressList").innerHTML += masterBuilder(person);
});

/*  OR
document.querySelector("#saveEntry").addEventListener("click", handleEvent => {});

function handleEvent (event){

}
*/
