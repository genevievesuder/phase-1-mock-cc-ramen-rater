// write your code here
//Grab the data from the server!


// See all ramen images in the ramen-menu div id="#ramen-menu"

//When the page loads, request the data from the server to get all the ramen objects. 

//Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

document.addEventListener("DOMContentLoaded", () => {

const ramenFormContainer = document.querySelector(".container");
const newRamenForm = document.querySelector("#new-ramen");

const handleClick = (event) => {
    
    addRamen = !addRamen;
    if (addRamen) {
      ramenFormContainer.style.display = "block";
    } else {
      ramenFormContainer.style.display = "none";
    }

  }

addBtn.addEventListener("click", handleClick);
  

const renderRamen = (ramenObj) => {
    const ramenImg = document.createElement("img")

ramenImg.classList.add("ramen.image")
console.log(ramenImg)
}

const fetchData = () => {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(renderRamen)
    })
}

fetchData()






});

//ANOTHER FAILED ATTEMPT

// document.addEventListener("DOMContentLoaded", () => {

//     const ramenMenu = () => document.getElementById('#ramen-menu');
//    // console.log(ramenMenu); to check

//    //create fetch request
//    fetch("http://localhost:3000/ramens")
//    .then(response => response.json())
//    .then((data) => {
//      data.forEach((ramenObj) => {
//          //the const img will create a new img per each ramen id
//          const ramenImg = document.createElement("img");
//          console.log(ramenImg)
//          ramenImg.src = ramenObj.image
//          ramenMenu().appendChild(ramenImg)
//          console.log(ramenObj);
//          debugger;
//      })

//    })

// });



//failed attempt below

// const renderRamenMenu = (ramenObj) => {
//     const myForm =  document.createElement('form')
//     myForm.classList.add('ramen-form')
//     myForm.innerHTML =`
// <form id="edit-ramen">
//   <h4>Update the Featured Ramen</h4>
//   <label for="rating">Rating: ${ramens.rating}</label>
//   <input type="number" name="rating" id="new-rating" />
//   <label for="new-comment">Comment: ${ramens.content}</label>
//   <textarea name="new-comment" id="new-comment"></textarea>
//   <input type="submit" value="Update" />
// </form>
// `
// ramenDiv().appendChild(myForm)
// }

// // const ramenDiv = () => document.getElementById("ramen-menu")

// const fetchData = () => {
//     fetch(" http://localhost:3000/ramens")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(renderRamenMenu)
//     })
//  }

// fetchData()