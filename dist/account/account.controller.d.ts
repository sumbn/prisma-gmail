import { RegisterDto } from './dto/register.dto';
import { Account } from '@prisma/client';
import { AccountService } from './account.service';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    register(body: RegisterDto): Promise<Account>;
}
