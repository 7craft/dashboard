const CHART = document.getElementById("lineChart");
console.log(CHART);
// set of randon testing data
var data1 = [60,50,40,30,89,30];
var data2 = [100,82,60,54,71,40];
var data3 = [90,90,90,50,20,50];
var data4 = [10,10,70,50,70,48];
var data7 = [92,78,65,36,54,132];
//

// Chart start here
let lineChart = new Chart(CHART ,{
    type:'line',
    data: {
        labels: ["Mon","tue","wed","thurs","fri","sat","sun"], // Chage it to function firebase.database().ref('/Directory of blablabla/' + token).once("value")
        datasets: [
            { // data set 1

                label: 'data1', //chage to on click function too
                lineTension:0, //lineTension 0 = very sharp Chart
                //backgroundColor: "#f65177",
                data: data1,

            },

            { // data set 2

                label: 'data2', //chage to on click function too
                fill: true,
                lineTension:0, //lineTension 0 = very sharp Chart
                //backgroundColor: "#5093e1", // delete commend for chart background 
                data:data2,
    
            }
        ],
    }
});