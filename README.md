# Technical Test
Welcome to our technical test! :) Below you’ll have the instructions and some utils in order to be able to develop :)

### Exercise:
We are developing a small application for patients that have booked an appointment with a doctor through Doctoralia. This application would allow patients to reschedule their current appointment (reschedule the appointment) for another day and time.

However, you’ll have to mock the data of the current appointment (the one be rescheduled) and make different calls than in production to get the available slots and to book the appointment. 

#### Api:
- Url: `https://draliatest.azurewebsites.net/api/availability`

- Call to get the slots:
	`GET https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/{yyyyMMdd}`

- Call to book a slot:
	`POST https://draliatest.azurewebsites.net/api/availability/BookSlot`

Example payload for booking a slot to reschedule an appointment:
```
{        
            "Start": Start timestamp (string "YYYY-MM-dd HH:mm:ss"),
            "End": End timestamp (string "YYYY-MM-dd HH:mm:ss"),
            "Comments": Additional instructions for the doctor (string),
            "Patient" : {
                "Name" : Patient Name (string),
                "SecondName" : Patient SecondName (string),
                "Email" :  Patient Email (string),
                "Phone" : Patient Phone (string)
            }
}   
```

### API calls examples: 

`GET https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/20170612`

Response:
```
{                  
            [
                {
                    "Start":"2017-06-13T10:00:00",
                    "End":"2017-06-13T11:00:00"
                },
                {
                    "Start":"2017-06-13T11:00:00",
                    "End":"2017-06-13T12:00:00"
                },
                {
                    "Start":"2017-06-13T12:00:00",
                    "End":"2017-06-13T13:00:00"
                },
                {
                    "Start":"2017-06-13T17:00:00",
                    "End":"2017-06-13T18:00:00"
                },
                {
                    "Start":"2017-06-13T18:00:00",
                    "End":"2017-06-13T19:00:00"
                },
                {
                    "Start":"2017-06-15T12:00:00",
                    "End":"2017-06-15T13:00:00"
                },
                {
                    "Start":"2017-06-15T13:00:00",
                    "End":"2017-06-15T14:00:00"
                }
            ]        
}
```



`POST https://draliatest.azurewebsites.net/api/availability/BookSlot`

Payload:
```
{                        
            "Start":"2017-06-13 11:00:00",
            "End":"2017-06-13 12:00:00",
            "Patient" : {
                "Name" : "Mario",
                "SecondName" : "Neta",
                "Email" : "mario@myspace.es",
                "Phone" : "555 44 33 22"
            },
            "Comments":"my arm hurts a lot"
}  
```






