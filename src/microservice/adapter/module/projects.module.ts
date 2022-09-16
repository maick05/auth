import { ProjectsMongoose } from '../repository/projects.repository';
import { ProjectService } from './../../domain/service/project.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '../../domain/schema/projects.schema';
import { ProjectController } from '../controller/project.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Project.name, schema: ProjectSchema }
        ])
    ],
    controllers: [ProjectController],
    providers: [ProjectService, ProjectsMongoose, JwtService],
    exports: [ProjectService]
})
export class ProjectsModule {}
