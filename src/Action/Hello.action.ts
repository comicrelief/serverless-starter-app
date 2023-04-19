import lambdaWrapper, {
  RequestService,
  ResponseModel,
} from '@comicrelief/lambda-wrapper';

/**
 * An example handler
 *
 * @param {DependencyInjection} di
 * @returns {Promise<ResponseModel>}
 */
export default lambdaWrapper.wrap(async (di) => {
  const request = di.get(RequestService);

  return ResponseModel.generate(
    {},
    200,
    `hello ${request.get('name', 'nobody')}`,
  );
});
