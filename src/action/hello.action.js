import ResponseService, { success } from '../service/responseService';

export default ((event, context) => {
  context.done(null, ResponseService(success, {
    test: 'hello',
  }));
});
