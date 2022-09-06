import { app } from "./controller/app"
import { bandRouter } from "./controller/routes/BandRouter"
import { userRouter } from "./controller/routes/UserRouter"

app.use('/', userRouter)
app.use('/band', bandRouter)