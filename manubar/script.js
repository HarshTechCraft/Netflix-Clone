const myList = document.getElementById('my-list');

const savedMovies = JSON.parse(localStorage.getItem('mylist')) || [];

savedMovies.forEach(movieInfo => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = movieInfo;
    myList.appendChild(movieElement);
});
    
function unsaveall()
{
    if(localStorage.getItem("mylist"))
    {
        localStorage.removeItem("mylist");
        location.reload();
    }
    localStorage.removeItem("change1")
    localStorage.removeItem("change2")
    localStorage.removeItem("change3")
    localStorage.removeItem("change4")
    localStorage.removeItem("change5")
    localStorage.removeItem("change6")
    localStorage.removeItem("change7")
    localStorage.removeItem("change8")
    localStorage.removeItem("change9")
    localStorage.removeItem("change10")
    localStorage.removeItem("change11")
    localStorage.removeItem("change12")
    localStorage.removeItem("change13")
    localStorage.removeItem("change15")
    localStorage.removeItem("change16")
    localStorage.removeItem("change17")
    localStorage.removeItem("change18")
    localStorage.removeItem("change19")
    localStorage.removeItem("change20")
    localStorage.removeItem("change21")
}

function unsave()
{
    if(localStorage.getItem("mylist"))
    {
        
    
        localStorage.removeItem("mylist");
        location.reload();
    }

    

}

