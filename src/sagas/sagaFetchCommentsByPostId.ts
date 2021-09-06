import request from '../utils/request'
import { takeLatest, put, call } from 'redux-saga/effects'
import { SAGA_FETCH_COMMENTS_BY_POST_ID } from './actions'
import { setDatasetListToReducer } from '../redux/actions'
import { commentsByPostIdUrl } from '../api/routes'

function* fetchCommentsByPostId({ id }: any) {
    let { data, error } = yield call(request, { url: commentsByPostIdUrl(id) })
    if (error) return

    yield put(setDatasetListToReducer(data || [], 'comments'))
}

export default function* saga() {
    yield takeLatest(SAGA_FETCH_COMMENTS_BY_POST_ID, fetchCommentsByPostId)
}
