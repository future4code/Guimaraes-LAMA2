export interface showsSignupDTO {
   bandId: string,
   weekday: weekday,
   startTime: time,
   endTime: time
}

enum weekday {
    sexta = "sexta",
    sabado = "sabado", 
    domingo = "domingo" 

}

enum time {
    eigthAM = "08:00",
    nineAM = "09:00",
    tenAM = "10:00",
    elevenAM = "11:00",
    midday = "12:00",
    onePM = "13:00",
    twoPM = "14:00",
    threePM = "15:00",
    fourPM = "16:00",
    fivePM = "17:00",
    sixPM = "18:00",
    sevenPM = "19:00",
    eightPM = "20:00",
    ninePM = "21:00",
    tenPM = "22:00",
    elevenPM = "23:00",
}
