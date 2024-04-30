// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date

      var dateString = today.toLocaleString();
      var day = today.getDay();
      var month = today.getMonth();
      var dayArray = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        var months = [
            "January", 
            "February", 
            "March", 
            "April", 
            "May", 
            "June", 
            "July", 
            "August", 
            "September", 
            "October", 
            "November", 
            "December"
        ];
        var hour = today.getHours();
        var ampm ="AM";
        if (hour>=12){
            hour-=12;
            ampm = "PM"
        }
        
	  //Write your own code here 


// Display the parts

      document.write(
      //   "Date: " + dateString + "<br />",
      //   "Day: " + dayArray[day] + "<br />",
            "Today: " + dayArray[day] +" "+ today.getDay() +" "+ months[month] +","+ " " + today.getFullYear()+" " 
            + hour +":"+today.getMinutes()+":"+today.getSeconds() +" "+ ampm + "<br />"
      );
	//Write your own code here 
