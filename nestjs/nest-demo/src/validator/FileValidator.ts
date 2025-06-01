import { FileValidator } from '@nestjs/common';

export class MyFileValidator extends FileValidator {
  constructor(options: Record<string, any>) {
    super(options);
  }

  isValid(file: Express.Multer.File): boolean | Promise<boolean> {
    console.log(file);

    if (file.size > 1024 * 1024) {
      return false;
    } else if (file.mimetype !== 'image/png') {
      return false;
    }
    return true;
  }
  buildErrorMessage(file: Express.Multer.File): string {
    if (file.size > 10 * 1024) {
      return `文件 ---${file.originalname}--- 大小超出 10k`;
    } else if (file.mimetype !== 'image/jpeg') {
      return `文件 ---${file.originalname}--- 类型不是 image/jpeg`;
    }

    return '';
  }
}
