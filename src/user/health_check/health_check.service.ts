import { Injectable } from '@nestjs/common';
import { HealthCheckDto } from './dto/health_check.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthCheck } from './entities/health_check.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
// import { UpdateHealthCheckDto } from './dto/update-health_check.dto';

@Injectable()
export class HealthCheckService {
  
  constructor(
    @InjectRepository(HealthCheck) private healthCheckRepository: Repository<HealthCheck>
    ){}
  
  create(healthCheckDetails: HealthCheckDto) {
    //const user = this.userRepository.findOne(userId);
    const newHealthCheck = this.healthCheckRepository.create({
      ...healthCheckDetails,
      //user:user,
    })
    return this.healthCheckRepository.save(newHealthCheck);
  }

  findAll() {
    const healthChecks = this.healthCheckRepository.find();
    return healthChecks;
  }

  findOne(id: number) {
    const healthCheck = this.healthCheckRepository.find({where:{id:id}})
    return healthCheck;
  }

  // update(id: number, updateHealthCheckDto: UpdateHealthCheckDto) {
  //   return `This action updates a #${id} healthCheck`;
  // }

  remove(id: number) {
    
    return this.healthCheckRepository.softDelete(id);
  }
}
