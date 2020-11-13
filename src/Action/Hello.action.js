import {
  DependencyInjection,
  LambdaWrapper,
  ResponseModel,
  RequestService,
} from '@comicrelief/lambda-wrapper';

import CONFIGURATION from '@/src/Config/Configuration';

/**
 * An example handler
 *
 * @param {DependencyInjection} di
 * @param {RequestService} request
 */
export const Hello = async (di: DependencyInjection, request: RequestService) => {
  // Get a name from the query parameters.
  const name = request.get('name');

  const body = {
    response: name !== null ? `Hello ${name}` : 'Hello',
  };
  return ResponseModel.generate(body, 200, 'ok');
};

export default LambdaWrapper(CONFIGURATION, Hello);
