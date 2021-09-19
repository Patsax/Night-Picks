function randomCocktail(){
    var number = Math.floor(Math.random() * 30);
    var searchTermCocktail = document.querySelector('#searchTermCocktail').value
    let response = fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i="+ searchTermCocktail, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "dca3b7a6efmsh02799377b82d124p1daeb9jsna8627390b26f"
      }
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.drinks[number].strDrink);
      return response;
      response.clear();
    })
    .then((response) => {
      document.getElementById("response-container-cocktail").innerHTML = response.drinks[number].strDrink;
    });
  }
  
  
  function randomMovie(){
    var number = Math.floor(Math.random() * 10);
    var searchTermGenre = document.querySelector('#searchTermGenre').value
    var searchTermService = document.querySelector('#searchTermService').value
    let response =  fetch("https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/entertainment/search/?ProgramTypes=Movie&Genres="+searchTermGenre+"&Providers="+searchTermService, {
      "method": "GET",
      "headers": {
          "content-type": "application/json",
          "x-rapidapi-host": "ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com",
          "x-rapidapi-key": "dca3b7a6efmsh02799377b82d124p1daeb9jsna8627390b26f"
      }
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response.Hits[number].Source.Title);
    return response;
  })
  .then((response) => {
    document.getElementById("response-container-movie").innerHTML = response.Hits[number].Source.Title;
  });
  }
  
  