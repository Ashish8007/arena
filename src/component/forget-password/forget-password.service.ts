import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ForgotPasswordService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  private generateUniquePassword(): string {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+';

    const getRandomChar = (chars: string) =>
      chars.charAt(Math.floor(Math.random() * chars.length));

    let password = '';
    for (let i = 0; i < 4; i++) {
      password += getRandomChar(upperCaseLetters);
      password += getRandomChar(lowerCaseLetters);
      password += getRandomChar(numbers + specialCharacters);
    }

    return password;
  }

  async sendPasswordResetEmail(email: string) {
    const newPassword = this.generateUniquePassword();

    const mailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: email,
      subject: 'Password Reset Request',
      text: `Your new password is: ${newPassword}`,
    };

    await this.transporter.sendMail(mailOptions);

    return newPassword; // Returning the new password for further use if needed
  }
}
