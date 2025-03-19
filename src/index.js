const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      console.log(input.value);
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
            
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });


}

document.addEventListener('DOMContentLoaded', init);



/*
// practice matching the id's manually, without involving the server.
inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let unorderedList = document.querySelector('ul');
    let lists = unorderedList.children; // aray-like listChildren.

    for (let list of lists) {
        let listIDs = list.querySelector('li div'); // using decendant selector, get the divs that hold ID information.
        let ListIDsAsStrings = listIDs.textContent.split(':')[1].trim(); // get id information. Remove whitespace so that string length is 1.
        console.log(ListIDsAsStrings);
        
        let searchInputValue = document.getElementById('searchByID').value; // get value of user input when they search movie by id.
        
        if (searchInputValue == ListIDsAsStrings) { // using loose equality, compare if user inputValue matches exsting movie ID..
            listTitle = list.querySelector('li h3').textContent; // if there is a match get the conforming title.
            
            const movieDetailsTitle = document.querySelector('#movieDetails h4'); // find where the title is expeced.
            movieDetailsTitle.innerText = listTitle; // update the user with the searched title.
        }
    }
}); 
*/