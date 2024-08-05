import { PrismaService } from '../prisma.service';
import { RegisterDto } from './dto/register.dto';
import { Account } from '@prisma/client';
export declare class AccountService {
    private prismaService;
    constructor(prismaService: PrismaService);
    register: (accountData: RegisterDto) => Promise<Account>;
}
