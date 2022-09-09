import { BaseDatabase } from "./BaseDatabase";
import { ShowModel, ShowSignupDTO } from "../model/ShowsSignupDTO";

export class ShowsDatabase extends BaseDatabase {
  private TABLE = "SHOWS";
  public createShow = async (input: ShowModel, id: string) => {
    try {
      const { bandId, weekday, startTime, endTime } = input;
      await ShowsDatabase.connection(this.TABLE).insert({
        id,
        week_day: weekday,
        start_time: startTime,
        end_time: endTime,
        band_id: bandId,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
  public alreadyExist = async (
    weekday: string,
    startTime: number
  ): Promise<any> => {
    const [result] = await ShowsDatabase.connection(this.TABLE)
      .select("*")
      .where({
        week_day: weekday,
        start_time: startTime,
      });
    return result;
  };

  public getShowById = async (id: string): Promise<any> => {
    try {
      const result = await ShowsDatabase.connection(this.TABLE)
        .select("*")
        .where("id", "like", id)
        .andWhere("start_time", "<=", "end_time")
        .andWhere("end_time", ">=", "start_time")
        .orderBy("start_time", "asc");
      return result[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
