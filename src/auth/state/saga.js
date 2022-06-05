
import { all, put, call, takeLeading  } from 'redux-saga/effects';  
import { Types , actions } from './index'
import { callApi } from '../../common/util/api';
import { makeFetchSaga,} from '../../common/util/fetch';

function* fetchLogin({ name, password }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/auth/login',
    method: 'post',
    data: {
      name,
      password,
    },
  });

  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

export default function* () {
  yield all([
    takeLeading(
      Types.FetchLogin,
      makeFetchSaga({ fetchSaga: fetchLogin, canCache: false }),
    ),
  ]);
}

