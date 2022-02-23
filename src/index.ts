import Server from "./Server"

import { ApiController } from "./Controllers"

const SRV = new Server([
    new ApiController()
])
SRV.listen()