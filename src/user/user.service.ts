import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './user/dto/create-user.dto';
import { UpdateUserDto } from './user/dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity'
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { userInfo } from 'os';
import { IoTThingsGraph } from 'aws-sdk';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}
  async create(createUserData: CreateUserDto): Promise<Partial<User>> {
    const user = this.userRepository.create({
      ...createUserData
    }) 
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserData.password, user.salt);
    try{
       await this.userRepository.save(user);

    }
    catch(e){
      throw new Error(e)
    }
    return {
      id: user.id,
      email: user.email,
    }
  }

  async findByEmail(email: string): Promise<Partial<User>> {
    const user = await this.userRepository.findOneBy({email: email}); 
    if (!user){
      throw new NotFoundException('User not found')
    }
    return user;
  }


  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
