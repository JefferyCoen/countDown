function startCountDown() {
    // Test function once started
    console.log("Count Down Started!");

    // Find Today's date
    var todaysDate = new Date(); 
    console.log("Today's Date: " + todaysDate);
    
    // Grab the users data
    var eventName = document.getElementById("userInput").value; 
    var eventDate = document.getElementById("userEventDate").value;

    // Use for reformat date and expired countdown
    const months = ["JAN.", "FEB.", "MAR.","APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    
    // Reformat the date
    var formattedEventDate = new Date(eventDate);
    formattedEventDate.setDate(formattedEventDate.getDate(eventDate) + 1); 
    var formattedDay = formattedEventDate.getDate(); 
    var formattedMonth = months[formattedEventDate.getMonth()]; 
    var formattedYear = formattedEventDate.getFullYear();
    // Test to make sure days are correct 
    // Console.log ("Event Date: " + formattedEventDate)
    console.log("Formatted Event Date: " + formattedMonth + " " + formattedDay + " " + formattedYear)

    // When the Count down will expired
    var newEventDate = new Date(eventDate);
    var newDay = newEventDate.getDate();
    var newMonth = months[newEventDate.getMonth()];
    var newYear = newEventDate.getFullYear();
    
    // Set eventHeading and eventDate
    document.getElementById("eventHeading").innerHTML = eventName;
    document.getElementById("eventDate").innerHTML = formattedMonth + " " + formattedDay + " " + formattedYear; 
    
    // Console.log event name and countdown expiration 
    console.log("Event: " + eventName +" - " + formattedMonth + " " + formattedDay + " " + formattedYear);  
    console.log("Count down will expire on: " + newMonth + " " + newDay + " " + newYear + " at midnight");
    
    //Start the counter
    var countDownDate = new Date(eventDate).getTime(); 
    setInterval(function(){
        var currentTime = new Date().getTime(); 
        var count = countDownDate - currentTime;

        var days = Math.floor(count / (1000 * 60 * 60 * 24));
        var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((count % (1000 * 60)) / 1000);

        if (count > 0){
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML= hours; 
        document.getElementById("minutes").innerHTML = minutes; 
        document.getElementById("seconds").innerHTML = seconds; 
        } else { 
            //Alert the user of an expired date with color change
            function myFunction() {
                document.getElementById("days").style.color = "#ff0000";
                document.getElementById("hours").style.color = "#ff0000";
                document.getElementById("minutes").style.color = "#ff0000";
                document.getElementById("seconds").style.color = "#ff0000";
              }
            
              myFunction()
            
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML= hours; 
            document.getElementById("minutes").innerHTML = minutes; 
            document.getElementById("seconds").innerHTML = seconds; 
            document.getElementById("expired").innerHTML = "Sorry, your selected date has expired. Please refresh and enter new date."
        }
    }); 
    // Hide the input fields once countdown starts
    function hide() {
        var hideThis = document.getElementById("input1");
        if (hideThis.style.display === "none") {
          hideThis.style.display = "block";
        } else {
          hideThis.style.display = "none";
        }
      }
    hide();
    
    // Unhide refresh button
    function unHide(){
      var unHideThis = document.getElementById("refresh"); 
      if (unHideThis.style.display = "none") {
        unHideThis.style.display = "block";
      } else {
        unHideThis.style.display = "none"
     }
    }
    unHide()
    event.preventDefault(); 
};





