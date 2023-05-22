import lambdaWrapper, {
  RequestService,
  ResponseModel,
} from '@comicrelief/lambda-wrapper';

/**
 * An example handler
 */
export default lambdaWrapper.wrap(async (di) => {
  const request = di.get(RequestService);

  // Get the name from the query parameters
  const name = request.get('name');

  const body = {
    response: name ? `Hello ${name}` : 'Hello',
  };

  return ResponseModel.generate(
    body,
    200,
    'ok',
  );
});
