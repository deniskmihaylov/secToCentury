function centuriesToMinutes (centuries) {

    let centToYear = centuries * 100; 
    let days = Math.trunc(centToYear * 365.2422); 
    let hours = 24 * days; 
    let minutes = 60 * hours; 


    console.log(`${centuries} centuries = ${centToYear} years = ${days} days = ${hours} hours = ${minutes} minutes`)

}

centuriesToMinutes(1)