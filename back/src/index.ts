import { server } from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-Source";

AppDataSource.initialize()
.then(() => {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})




