import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Nest} from './nest.entity';

@Injectable()
export class NestService {
    constructor(
        @InjectRepository(Nest)
        private readonly nestRepository: Repository<Nest>,
    ) {}

    async findAll(): Promise<Nest[]> {
        return this.nestRepository.find();
    }

    async add(word: Nest): Promise<Nest> {
        const toSave = this.nestRepository.create(word);
        return this.nestRepository.save(toSave);
    }
}
