var ctx = document.getElementById("summaryChart").getContext("2d");
var data = new SummaryData();
var jayson = document.getElementById("dada").innerHTML;

if(jayson == ""){
  data.addVote("Döner", 2);
  data.addVote("Döner", 1);
  data.addVote("Brot", 0);
  data.addVote("Salat", 1);
  data.addVote("Käseschnitzel", 6);
  data.addVote("Yoghurt", 2);
  data.addParticipant("Michelle");
  data.addParticipant("Jana");
  data.addParticipant("Lukas");
  data.addParticipant("Adrian");
  data.addParticipant("Niklas");
  data.addParticipant("Pauline");
  data.addParticipant("Jonas");
  data.addParticipant("Christopher");
  data.addParticipant("Caroline");
  data.addParticipant("Martha");
} else {
var cont = JSON.parse(jayson);
var casts = [];
casts.fill(0);
for (let i = 0; i < cont.votes.length; i++) {
    data.addParticipant(cont.votes[i].name);
  for(let j = 0; j < cont.votes[i].winner.length; j++){
    if(typeof(casts[cont.votes[i].winner[j]]) === 'undefined'){
      casts[cont.votes[i].winner[j]] = 0;
    }
    casts[cont.votes[i].winner[j]] = (casts[cont.votes[i].winner[j]]) + 1;

  }
}
}
console.log(casts);
Object.keys(casts).forEach((item, i) => {
//console.log(" Item:" + item + "   cont:" + casts[item]);
data.addVote(item, casts[item]);
});



fillWelcomeAltTable("participantsTable", data.participants);
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: data.getLabels(),
        datasets: [{
            label: "Anzahl an abgegebenen Stimmen",
            data: data.getAmounts(),
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
