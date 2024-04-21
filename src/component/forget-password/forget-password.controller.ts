import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ForgotPasswordService } from './forget-password.service';

interface ForgotPasswordDto {
  email: string;
}

@Controller('api')
export class ForgotPasswordController {
  // Use camelCase naming for the property
  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  @Post('forgot-password')
  async sendPasswordReset(@Body() dto: ForgotPasswordDto) {
    if (!dto.email) {
      throw new BadRequestException('Email is required');
    }

    // Validate the email against a database or user list
    const isValidUser = true; // Placeholder for your validation logic
    if (!isValidUser) {
      throw new BadRequestException('Invalid email address');
    }

    // Correct the variable name to match the updated constructor parameter
    await this.forgotPasswordService.sendPasswordResetEmail(dto.email);

    return { message: 'Password reset email sent. Check your inbox.' };
  }
}
