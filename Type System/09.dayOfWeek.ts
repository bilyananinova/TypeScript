enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thuersday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
}

function dayOfWeek(day: string): void {

    if (day == "Monday") {
        console.log(Days.Monday);
    } else if (day == "Tuesday") {
        console.log(Days.Tuesday);
    } else if (day == "Wednesday") {
        console.log(Days.Wednesday);
    } else if (day == "Thuersday") {
        console.log(Days.Thuersday);
    } else if (day == "Friday") {
        console.log(Days.Friday);
    } else if (day == "Saturday") {
        console.log(Days.Saturday);
    } else if (day == "Sunday") {
        console.log(Days.Sunday);
    } else {
        console.log("error");
    }

}

dayOfWeek("Monday");
dayOfWeek("Friday");