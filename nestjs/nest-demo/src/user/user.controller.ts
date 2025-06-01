import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpException,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { MyFileValidator } from 'src/validator/FileValidator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  getUserList() {
    return this.userService.getUserList();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  handleUpload(
    @UploadedFile(
      new ParseFilePipe({
        // validators: [
        //   new MaxFileSizeValidator({ maxSize: 1024 * 1024 }),
        //   new FileTypeValidator({
        //     fileType: 'image/png',
        //     skipMagicNumbersValidation: true,
        //   }),
        // ],
        validators: [new MyFileValidator({})],
        exceptionFactory: (err) => {
          console.log(err);
          throw new HttpException(err, 400);
        },
      }),
    )
    file: Express.Multer.File,
  ) {
    return {
      code: 0,
      msg: '上传成功',
      file: file.filename,
    };
  }

  @Post('/mupload')
  @UseInterceptors(FilesInterceptor('files'))
  handleMultiUpload(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files);
    return {
      code: 0,
      msg: '上传成功',
    };
  }

  @Post('/uploads')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'files1', maxCount: 3 },
      { name: 'files2', maxCount: 3 },
    ]),
  )
  uploadFiles2(
    @UploadedFiles()
    files: {
      file1?: Express.Multer.File[];
      file2?: Express.Multer.File[];
    },
  ) {
    console.log(files);
    return {
      message: '上传成功',
      files,
    };
  }

  @Post('anyUploads')
  @UseInterceptors(AnyFilesInterceptor())
  uploadAnyFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log('files', files);
    return {
      message: '上传成功',
      files,
    };
  }
}
