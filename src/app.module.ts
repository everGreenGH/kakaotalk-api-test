import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import kakaotalkConfig from "./common/config/kakaotalk.config";
import { ConfigModule } from "@nestjs/config";

import * as path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [kakaotalkConfig],
      envFilePath: path.join("env", `.${process.env.NODE_ENV}.env`),
      ignoreEnvFile: !(process.env.NODE_ENV === "local"),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
