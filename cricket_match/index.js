fetch(
  "https://api.cricapi.com/v1/currentMatches?apikey=758b5d41-28ee-4be9-96c5-ec90b3924747&offset=0"
)
  .then((response) => {
    data = response.json();
    return data;
  })
  .then((data) => {
    let container = document.querySelector("#data");
    // let card = document.createElement("div");
    console.log(data.data);
    data.data.slice(0, 10).forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card", "bg-primary", "text-white", "mt-5", "p-3");
      card.innerHTML = `
            <center>${element.name}</center>
            <div class="mt-4">Venue :${element.venue}</div>
            <div>Date :${element.date}</div>
            <div>Teams:${element.teams}</div><br>
            <center>Score-Board<center>
            <center><div>Match Status :${element.status} </div></center>
            
    `;
      let scores = document.createElement("div");
      scores.classList.add("score");
      element.score.forEach((value) => {
        let innings = document.createElement("div");
        innings.classList.add("score");
        innings.innerHTML = `
        <div>${value.inning}
          <div>Run:${value.r}</div>
          <div>Overs:${value.o}</div>
          <div>Wickets:${value.w}</div>
        </div>`;
        scores.append(innings);
      });
      card.append(scores);
      container.append(card);
    });
  })
  .catch((err) => {
    console.log("Error is there", err);
  });
