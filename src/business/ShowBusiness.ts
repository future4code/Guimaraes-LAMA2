import { ShowsDatabase } from "../data/ShowsDatabase";
import {
  ShowDetailDTO,
  ShowModel,
  ShowSignupDTO,
} from "../model/ShowsSignupDTO";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { SHOW_DAY } from "../model/ShowsSignupDTO";
import {
  InvalidFields,
  InvalidID,
  InvalidRole,
  InvalidShow,
  InvalidTime,
  InvalidWeekday,
  MissingToken,
  TimeAlreadyRegistered,
  Unauthorized,
} from "../error/CustomError";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

export class ShowBusiness {
  private showDatabase: ShowsDatabase;
  constructor() {
    this.showDatabase = new ShowsDatabase();
  }
  public createShow = async (input: ShowSignupDTO, token: string) => {
    const { weekday, startTime, endTime, bandId } = input;

    if (!token) {
      throw new MissingToken();
    }

    const tokenData = authenticator.getTokenData(token);

    if (tokenData.role !== "admin") {
      throw new Unauthorized();
    }

    if (!weekday || !startTime || !endTime || !bandId) {
      throw new InvalidFields();
    }

    if (startTime < 8 || startTime > 23) {
      throw new InvalidTime();
    }

    if (endTime < startTime || endTime === startTime) {
      throw new InvalidTime();
    }

    if (
      weekday !== SHOW_DAY.FRIDAY &&
      weekday !== SHOW_DAY.SATURDAY &&
      weekday !== SHOW_DAY.SUNDAY
    ) {
      throw new InvalidWeekday();
    }

    const alreadyExist = await this.showDatabase.alreadyExist(
      weekday,
      startTime
    );

    if (alreadyExist) {
      throw new TimeAlreadyRegistered();
    }

    const id = idGenerator.generateId();

    const newShow: ShowModel = {
      id,
      weekday,
      startTime,
      endTime,
      bandId,
    };
    console.log(newShow);

    const show = await this.showDatabase.createShow(newShow, id);
    return show
  };

  public getShow = async (weekday: string, token: string) => {
    // if (!id) {
    //   throw new InvalidID();
    // }

    // if (!token) {
    //   throw new InvalidRole();
    // }

    const tokenData = authenticator.getTokenData(token);

    if (tokenData.role !== "admin") {
      throw new Unauthorized();
    }

    const showInfo = await this.showDatabase.getShowByDay(weekday);

    if (!showInfo) {
      throw new InvalidShow();
    }

    return showInfo;
  };
}
