import {
  LambdaWrapper,
  DependencyInjection,
  ResponseModel,
  RequestService,
} from '@comicrelief/lambda-wrapper';

import CONFIGURATION from '../Config/Configuration';

export default LambdaWrapper(CONFIGURATION, (di: DependencyInjection, request: RequestService, done) => {
  // Get a name from the query parameters.
  const name = request.get('name');

  const response = new ResponseModel({
    response: name !== null ? `Hello ${name}` : 'Hello',
  }, 200, 'ok');

  done(null, response.generate());
});
