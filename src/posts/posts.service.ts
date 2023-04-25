import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) { }

  async create(dto: CreatePostDto, image: any) {
    const fileName = 'asdff';
    const post = this.postRepository.create({ ...dto, image: fileName });
  }
}
