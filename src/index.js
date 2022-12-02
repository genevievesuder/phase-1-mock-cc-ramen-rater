// write your code here
//Grab the data from the server!


// See all ramen images in the ramen-menu div id="#ramen-menu"

//When the page loads, request the data from the server to get all the ramen objects. 

//Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

//Define global variables for later use

const ramenMenuDiv = document.getElementById('ramen-menu');

const detailImg = document.querySelector("#ramen-detail > .detail-image");
const detailName = document.querySelector("#ramen-detail > .name");
const detailRestaurant = document.querySelector("#ramen-detail > .restaurant");
const detailsRating = document.getElementById("rating-display");
const detailsComment = document.getElementById("comment-display");

//For the FORM
//Select the form, add an event listener, and prevent the default


const ramenForm = document.getElementById("new-ramen")

// <!-- New Ramen Form -->
// <form id="new-ramen">
//   <h4>Add New Ramen</h4>
//   <label for="name">Name: </label>
//   <input type="text" name="name" id="new-name" />
//   <label for="restaurant">Restaurant: </label>
//   <input type="text" name="restaurant" id="new-restaurant" />
//   <label for="image">Image: </label>
//   <input type="text" name="image" id="new-image" />
//   <label for="rating">Rating: </label>
//   <input type="number" name="rating" id="new-rating" />
//   <label for="new-comment">Comment: </label>
//   <textarea name="new-comment" id="new-comment"></textarea>
//   <input type="submit" value="Create" />
// </form>



// <!-- Ramen Details -->
// <div id="ramen-detail">
//   <img class="detail-image" src="./assets/image-placeholder.jpg" alt="Insert Name Here" />
//   <h2 class="name">Insert Name Here</h2>
//   <h3 class="restaurant">Insert Restaurant Here</h3>
// </div>

//callbacks

const handleClick = (ramen) => {
    detailImg.src = ramen.image
    detailName.innerText = ramen.name
    detailRestaurant.innerText = ramen.restaurant
    detailsRating.innerText = ramen.rating
    detailsComment.innerText = ramen.comment
}

const displayRamen = (ramenObj) => {
    //create img tag
    const ramenImg = document.createElement('img');
    //set img src
    ramenImg.src = ramenObj.image;
    //add the img tag to the ramen-menu div
    ramenMenuDiv.appendChild(ramenImg);
    //set an alt attribute -optional
    ramenImg.alt = ramenObj.name
    //set a class - optional
    ramenImg.classList.add("image-slider");
    //When invoking callback with a specific argument, wrap the function invocation within an anonymous function
    ramenImg.addEventListener("click", () => handleClick(ramenObj))
    //append img to div
    ramenMenuDiv.appendChild(ramenImg)
}

const handleSubmit = (event) => {
    event.preventDefault();
    const ramenName = event.target.name.value
    const ramenRestaurant = event.target.restaurant.value
    const ramenImg = event.target.image.value
    const ramenRating = event.target.rating.value
    const ramenComment = document.getElementById("new-comment").value
    const newRamen = {
        name: ramenName,
        restaurant: ramenRestaurant,
        image: ramenImg,
        rating: ramenRating,
        comment: ramenComment
    }
    //resets form
    event.target.reset()
    displayRamen(newRamen)
}
      
//lets grab the json data.
//fetch function

const fetchData = () => {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens => ramens.forEach(displayRamen)) //forEach automatically passes the current ramen we iterate over to the callback
    .catch()
}

//start the logic

ramenForm.addEventListener("submit", handleSubmit)



fetchData();














// });

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




//FINAL ATTEMPT

// document.addEventListener("DOMContentLoaded", () => {

// const ramenFormContainer = document.querySelector(".container");
// const newRamenForm = document.querySelector("#new-ramen");

// const handleClick = (event) => {
    
//     addRamen = !addRamen;
//     if (addRamen) {
//       ramenFormContainer.style.display = "block";
//     } else {
//       ramenFormContainer.style.display = "none";
//     }

//   }

// addBtn.addEventListener("click", handleClick);
  

// const renderRamen = (ramenObj) => {
//     const ramenImg = document.createElement("img")

// ramenImg.classList.add("ramen.image")
// console.log(ramenImg)
// }

// const fetchData = () => {
//     fetch("http://localhost:3000/ramens")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(renderRamen)
//     })
// }

// fetchData()

//      })