$(document).ready(function () {
    //set up Firebase link for database
    let firebaseConfig = {
        apiKey: "AIzaSyAXNuzAB6RENtUhROpLAOcxJ9DWuhuM3A8",
        authDomain: "train-schedule-55413.firebaseapp.com",
        databaseURL: "https://train-schedule-55413.firebaseio.com",
        projectId: "train-schedule-55413",
        storageBucket: "",
        messagingSenderId: "478734929925",
        appId: "1:478734929925:web:805cd578729b25466c0c6c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    let database = firebase.database();

    function addToDatabase(name, destination, time, frequency){
  
        //create train object
        database
            .ref()
            .push({
                name: name,
                destination: destination,
                time: time,
                frequency: frequency
            })
            
    }

        database
            .ref()
            .on("child_added", function (snapshot){

                let trainName = snapshot.val().name,
                    trainDestination = snapshot.val().destination,
                    trainTime = snapshot.val().time,
                    trainFrequency = snapshot.val().frequency

                    buildRoy(trainName, trainDestination, trainTime, trainFrequency)
            })

        function buildRow(name, destination, time, frequency, minutes){
            
            let nameCol = $("<td>")
            let destinationCol = $("<td>")
            let frequencyCol = $("<td>")
            let arrivalCol = $("<td>")
            let minutesAwayCol =$("<td>")
            let frequency = moment().diff(startTimeMoment, "minutes");
            let minutesAway = frequency / arrival;
             
            nameCol.text(name)
            destinationCol.text(destination)
            frequencyCol.text(frequency)
            arrivalCol.text(time)
            minutesAwayCol.text(minutes)
            arrivalCol.text(minutesAway)

            newRecord.append(nameCol)
            newRecord.append(destinationCol)
            newRecord.append(frequencyCol)
            newRecord.append(arrivalCol)
            newRocord.append(minutesAwayCol)

            $("#trainScheduleTable").append(newRecord)
        }

//push form entry into current train schedule
        $("btn").click(function (){
            event.preventDefault();
            let trainName = $("#trainName").val(),
                trainDestination = $("#trainDestination").val(),
                trainTime = $("#trainTime").val(),
                trainFrequency = $("#trainFrequency").val()

                addToDatabase(trainName, trainDestination, trainTime, trainFrequency)

        })

  

  
















})