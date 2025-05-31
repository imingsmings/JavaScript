import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class MyExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
