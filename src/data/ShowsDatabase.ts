import { BaseDatabase } from "./BaseDatabase";
import { showsSignupDTO } from "../model/ShowsSignupDTO";

export class ShowsDatabase extends BaseDatabase {
  private TABLE = "SHOWS";
  public insertShow = async (input: showsSignupDTO, id: string) => {
    try {
      const { bandId, weekday, startTime, endTime } = input;
      await ShowsDatabase.connection(this.TABLE).insert({
        id,
        week_day: weekday,
        start_time: startTime,
        end_time: endTime,
        band_id: bandId
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

}
