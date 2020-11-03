import { 
  LambdaWrapper, 
  DependencyInjection, 
  ResponseModel, 
  RequestService 
} from '@comicrelief/lambda-wrapper';
import '../Common/data-processor.js';
import '../Common/data-processor-axios.js';
import '../Common/data-processor-got.js';

import CONFIGURATION from '@/src/Config/Configuration';
import DataProcessor from '../Common/data-processor.js';
import DataProcessorAxios from '../Common/data-processor-axios.js';
import DataProcessorGot from '../Common/data-processor-got.js';

export default LambdaWrapper(CONFIGURATION, async (di: DependencyInjection, request: RequestService) => {
  let lambdaResponse;
  const dataprocessor = new DataProcessorGot();
  try {
    const data = await dataprocessor.getWebData();
    lambdaResponse = new ResponseModel(data, 200, 'ok');
  } catch (error) {
    lambdaResponse = new ResponseModel({error}, 500, 'error');
  }
  return lambdaResponse.generate();
});
