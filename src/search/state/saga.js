
import { all, put, call, takeEvery  } from 'redux-saga/effects';
import { Types , actions } from './index'
import { callApi } from '../../common/util/api';

function *FetchAutoComplete( { keyword } ){
  const { isSuccess, data } = yield call (callApi, {
    url : '/user/search', 
    params : { keyword },
  });
  
  if( isSuccess && data ){
    yield put(actions.setValue('autoCompletes', data));
  }

}

export default function* () {
  yield all([
    takeEvery( Types.FetchAutoComplete, FetchAutoComplete)  
  ]);
}