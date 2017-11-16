import ResponseService from '../service/responseService';
import RequestService from '../service/requestService';

export default ((event, context) => {
  const Request = new RequestService(event);

  // Get a name from the query parameters.
  const name = Request.get('name');

  // Return a 200 response,
  context.done(null, ResponseService({
    test: name !== null ? `Hello ${name}` : 'Hello',
  }, 200));
});
