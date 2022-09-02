import { app } from "./controller/app"
import { Request, Response} from 'express'

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Servidor em pé! 👣");
  });
