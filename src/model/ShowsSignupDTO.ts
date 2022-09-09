export interface ShowSignupDTO {
   bandId: string,
   weekday: SHOW_DAY,
   startTime: number,
   endTime: number
};

export interface ShowModel {
id:string,
   weekday: SHOW_DAY,
    startTime: number,
    endTime: number,
    bandId: string
}

export enum SHOW_DAY {
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY", 
    SUNDAY = "SUNDAY" 

}

export interface ShowDetailDTO {
    weekday: string;
  }

  

export enum time {
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
