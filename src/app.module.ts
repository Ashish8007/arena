import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ForgotPasswordController } from './component/forget-password/forget-password.controller';
import { ForgotPasswordService } from './component/forget-password/forget-password.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService globally available
    }),
  ],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
})
export class AppModule {}
