var resume = [{
    "name": "ABDUL BASITH M",
    "email": "abdulbasith88@gamil.com",
    "phone": 9994098674,
    "degree": "B.E. Computer science Engineering",
    "location": {
        "address": "No:21 Evr nagar Pudukkottai",
        "postalCode": 622001,
        "city": "Pudukkottai",
        "state": "Tamilnadu",
        "country": "India"
    },
},
{
    "profession": "Business",
    "Started_at": "10-08-2021",
    "till": "present",
    "role": "i have to handle all business transactions",
},
{
    "institution": "Dhaanish Ahamed College of Engineering",
    "degree": "B.E. Computer science Engineering",
    "department": "Comuter Science Engineering",
    "studyType": "fulltime",
    "year passed": 2011,
    "Percentage": 63,
},
{
    "name": "java,jsp,servlets,javascript",
    "level": "beginner",
    "project": "automatic generation user interface using metadata"
},
{
    "language": "Tamil,Enlish",
}]

// for loop iteration
for (var i = 0; i<resume.length; i++) {
    console.log(resume[i])
}

//for in loop iteration
for(var key in resume){
    console.log(key,resume[key])
}
for(var x in resume){
    console.log(resume[x].department)
}
