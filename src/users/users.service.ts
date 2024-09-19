import { Injectable, NotFoundException } from '@nestjs/common';



const users = [
    { email: 'jim@gmail.com', number: '221122' },
    { email: 'jam@gmail.com', number: '830347' },
    { email: 'john@gmail.com', number: '221122' },
    { email: 'jams@gmail.com', number: '349425' },
    { email: 'jams@gmail.com', number: '141424' },
    { email: 'jill@gmail.com', number: '822287' },
    { email: 'jill@gmail.com', number: '822286' },
];


export interface IUser {
    number: string;
    email: string
}

@Injectable()
export class UsersService {
    async findUser(email: string, number?: string): Promise<IUser[]> {
        await new Promise(res => setTimeout(res, 5000))
        const result = users.filter(user => user.email === email && ( user.number === number.split('-').join('') || !number ));
        if (!result.length) throw new NotFoundException('Пользователь по указаному данным не найден');
        return result;
    }

}
