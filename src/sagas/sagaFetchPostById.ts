import request from '../utils/request'
import { takeLatest, put, call } from 'redux-saga/effects'
import { SAGA_FETCH_COMMENTS_BY_POST_ID } from './actions'
import { setDatasetListToReducer } from '../redux/actions'
import { postByIdUrl } from '../api/routes'

function* sagaFetchPostById({ id }: any) {
    let { data, error } = yield call(request, { url: postByIdUrl(id) })
    if (error) return
    yield put(setDatasetListToReducer(data || [], 'posts'))
}

export default function* saga() {
    yield takeLatest(SAGA_FETCH_COMMENTS_BY_POST_ID, sagaFetchPostById)
}
