import request from '../utils/request'
import { takeLatest, put, call } from 'redux-saga/effects'
import { SAGA_FETCH_POSTS } from './actions'
import { setDatasetListToReducer } from '../redux/actions'
import { postsUrl } from '../api/routes'

function* fetchPosts() {
    let { data, error } = yield call(request, { url: postsUrl })
    if (error) return
    yield put(setDatasetListToReducer(data || [], 'posts', { replaceList: true }))
}

export default function* saga() {
    yield takeLatest(SAGA_FETCH_POSTS, fetchPosts)
}
