import { 
  LambdaWrapper, 
  DependencyInjection, 
  ResponseModel, 
  RequestService 
} from '@comicrelief/lambda-wrapper';
import '../Common/data-processor.js';

import CONFIGURATION from '@/src/Config/Configuration';
import DataProcessor from '../Common/data-processor.js';

export default LambdaWrapper(CONFIGURATION, async (di: DependencyInjection, request: RequestService) => {
  let lambdaResponse;
  const dataprocessor = new DataProcessor();
  try {
    const data = await dataprocessor.getWebData();
    lambdaResponse = new ResponseModel(data, 200, 'ok');
  } catch (error) {
    lambdaResponse = new ResponseModel({error}, 500, 'error');
  }
  return lambdaResponse.generate();
});
