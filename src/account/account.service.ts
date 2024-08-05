import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RegisterDto } from './dto/register.dto';
import { Account } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private prismaService: PrismaService) {}
  register = async (accountData: RegisterDto): Promise<Account> => {
    const account = await this.prismaService.account.findUnique({
      where: {
        email: accountData.email,
      },
    });

    if (account) {
      throw new HttpException(
        { message: 'this email has been used' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.prismaService.account.create({
      data: accountData,
    });
  };
}
