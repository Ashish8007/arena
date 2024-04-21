import { Module } from '@nestjs/common';
import { ForgotPasswordService } from './forget-password.service';
import { ForgotPasswordController } from './forget-password.controller';

@Module({
  providers: [ForgotPasswordService],
  controllers: [ForgotPasswordController]
})
export class ForgetPasswordModule {}
