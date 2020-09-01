import { LambdaWrapper, DependencyInjection, ResponseModel, RequestService } from '@comicrelief/lambda-wrapper';

import CONFIGURATION from '@/src/Config/Configuration';

export default LambdaWrapper(CONFIGURATION, async (di: DependencyInjection, request: RequestService) => {
  // Get a name from the query parameters.
  const name = request.get('name');

  const response = new ResponseModel(
    {
      response: name !== null ? `Hello ${name}` : 'Hello',
    },
    200,
    'ok'
  );

  return response.generate();
});
