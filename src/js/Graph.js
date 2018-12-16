var chart_labels = ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
var temp_dataset = ['20', '21', '25', '32', '30', '27'];
var DO_dataset = ['6', '7', '8', '6', '4', '2'];

var maxmin_Temp_Threshold = ['24','28']; // <------------------ Get FROM CLOUND /Setting / max
var maxmin_DO_Threshold = ['4','15']; // <------------------ GET FROM CLOUND /setting / min

//Texting

var toplabels_dataset = ['Temperature (Celsius)','Dissolved Oxygen[D.O.] (mg/L)'];

// styling value ----------------------

var thresholdBroder = 3;

//----------------------------------
var chart_labels2 = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
var temp_dataset2 = ['5', '3', '4', '8', '10', '11', '10', '9'];
var rain_dataset2 = ['0', '0', '1', '4', '19', '19', '7', '2'];
var ctx = document.getElementById("forecast").getContext('2d');

var config = {
    type: 'bar',
    data: 
    {
        labels: chart_labels2,
        datasets: [
            {
                type: 'line',
                label: toplabels_dataset[0],
                yAxisID: "y-axis-0",
                fill: false,
                data: temp_dataset,
            },
        ]
    },
    options: 
    {
    	responsive: true,
        scales: 
        {
            yAxes: 
            [
                {
                    position: "left",
                    "id": "y-axis-0",
                },
            ]
        },
        annotation: 
        {
            drawTime: 'afterDatasetsDraw',
            annotations: 
            [
                {
                    // Maximum Threshold
                    type: 'line',
                    drawTime: 'afterDatasetsDraw',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: maxmin_Temp_Threshold[1],
                    borderColor: '#f65177', //set color
                    borderWidth: 4,
                    label: 
                    {
                        backgroundColor: "#f65177",
                        content: "max",
                        enabled: true
                    },
                        
                        
                },    
                {
                    // Minmimum Threshold
                    type: 'line',
                    drawTime: 'afterDatasetsDraw',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: maxmin_Temp_Threshold[0],
                    borderColor: '#f65177', //set color
                    borderWidth: 4,
                    label: 
                    {
                        backgroundColor: "#f65177",
                        content: "min",
                        enabled: true
                    },    
                }
            ]
          
        }


    }
};
var config2 = {
    type: 'bar',
    data: {
        labels: chart_labels2,
        datasets: [
            {
                type: 'line',
                label: toplabels_dataset[0],
                yAxisID: "y-axis-0",
                fill: false,
                data: temp_dataset,
            },
        ]
    },
    options: {
    		responsive: true,
            scales: 
            {
                yAxes: [
                    {
                    position: "left",
                    "id": "y-axis-0",
                    },
                ]
            },
            annotation: {
                drawTime: 'afterDatasetsDraw',
                annotations: [
                    {
                        // Maximum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_DO_Threshold[1],
                        borderColor: '#f65177', //set color
                        borderWidth: 4,
                        label: 
                        {
                            backgroundColor: "#f65177",
                            content: "max",
                            enabled: true
                        },
                        
                    },
                    {
                        // Minmimum Threshold
                        type: 'line',
                        drawTime: 'afterDatasetsDraw',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: maxmin_Temp_Threshold[0],
                        borderColor: '#f65177', //set color
                        borderWidth: 4,
                        label: 
                        {
                            backgroundColor: "#f65177",
                            content: "min",
                            enabled: true
                        },
                    }
                ]
          
      }


    }
};
var forecast_chart = new Chart(ctx, config);
//console.log(forecast_chart.config.options.annoation)
$("#0").click(function() {
    var data = forecast_chart.config.data;
    data.datasets[0].data = temp_dataset;
    data.datasets[0].label = toplabels_dataset[0];
    data.labels = chart_labels2;
    //var annoation = forecast_chart.config.data;
    forecast_chart.update();
});
$("#1").click(function() {
    var data = forecast_chart.config.data;
    data.datasets[0].data = DO_dataset;
    data.datasets[0].label = toplabels_dataset[1];
    data.labels = chart_labels2;
    console.log(forecast_chart.config.options);
    forecast_chart.config.options = 
    
    {
    	responsive: true,
        scales: 
        {
            yAxes: 
            [
                {
                    position: "left",
                    "id": "y-axis-0",
                },
            ]
        },
        annotation: 
        {
            drawTime: 'afterDatasetsDraw',
            annotations: 
            [
                {
                    // Maximum Threshold
                    type: 'line',
                    drawTime: 'afterDatasetsDraw',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: maxmin_DO_Threshold[1],
                    borderColor: '#f65177', //set color
                    borderWidth: 4,
                    label: 
                    {
                        backgroundColor: "#f65177",
                        content: "max",
                        enabled: true
                    },
                        
                        
                },    
                {
                    // Minmimum Threshold
                    type: 'line',
                    drawTime: 'afterDatasetsDraw',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: maxmin_DO_Threshold[0],
                    borderColor: '#f65177', //set color
                    borderWidth: 4,
                    label: 
                    {
                        backgroundColor: "#f65177",
                        content: "min",
                        enabled: true
                    },    
                }
            ]
          
        }


    }
    forecast_chart.update();
});