const searchData = [
  "Avenger_End-Game",
  "Ant-Man",
  "Captain Marvel",
  "Thor Love and Thunder",
  "Sazam",
  "Justice League",
  "Flash",
  "Wonder Women",
  "Black Adam",
  "Suicide Squad",
  "Aqua Man",
  "Money Heist",
  "Peaky Blinder",
  "Sabrina",
  "Elite",
  "Narcos",
  "Breaking Bad",
  "Prison Break",
  "Black Panther",
  "Black widow",
  "Age_of_ultron",
];

const pageLinks = {
  "Avenger_End-Game": './mainpage/End_game.html',
  "Ant-Man": './mainpage/ant_man.html',
  "Captain Marvel": './mainpage/captain_m.html',
  "Thor Love and Thunder": './mainpage/Thor.html',
  "Sazam":'./mainpage/sazam.html',
  "Justice league":'./mainpage/justice.html',
  "Flash":'./mainpage/flash.html',
  "Wonder Women":'./mainpage/wonder.html',
  "Black Adam":'./mainpage/black_a.html',
  "Suicide Squad":'./mainpage/suicide.html',
  "Aqua Man":'./mainpage/aqua.html',
  "Money Heist":'./mainpage/money.html',
  "Peaky Blinder":'./mainpage/peaky.html',
  "Sabrina":'./mainpage/sabrina.html',
  "Elite":'./mainpage/elite.html',
  "Narcos":'./mainpage/narcos.html',
  "Breaking Bad":'./mainpage/breaking.html',
  "Prison Break":'./mainpage/prison.html',
  "Black Panther":'./mainpage/Black_panther.html',
  "Black widow":'./mainpage/Black_widow.html',
  "Age_of_ultron":'./mainpage/Age_of_ultron.html',
};

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchDropdown = document.getElementById('searchDropdown');

function updateSearchResults() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = searchData.filter(item => item.toLowerCase().includes(searchTerm));

  searchResults.innerHTML = '';
  
  // add result
  filteredResults.forEach(result => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    console.log(`${pageLinks}`)
    if (pageLinks.hasOwnProperty(result)) {
      a.href = pageLinks[result];
    } else {
      a.href = '#';
    }

    a.textContent = result;
    li.appendChild(a);
    searchResults.appendChild(li);
  });

  if (filteredResults.length > 0 && searchTerm !== '') {
    searchDropdown.style.display = 'block';
  } else {
    searchDropdown.style.display = 'none';
  

  }
}

searchInput.addEventListener('input', updateSearchResults);

// close menubar 
document.addEventListener('click', function (e) {
  if (!searchDropdown.contains(e.target) && !searchInput.contains(e.target)) {
    searchDropdown.style.display = 'none';
    

  }
});

window.onload(function(){
  alert('hello')

})


document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
