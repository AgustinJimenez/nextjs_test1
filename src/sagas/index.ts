import { all } from 'redux-saga/effects'
import sagaFetchPosts from './sagaFetchPosts'
import sagaFetchCommentsByPostId from './sagaFetchCommentsByPostId'
import sagaFetchPostById from './sagaFetchPostById'
import sagaAddNewCommentToPost from './sagaAddNewCommentToPost'

const allSagas: any[] = [sagaFetchPosts(), sagaFetchPostById(), sagaFetchCommentsByPostId(), sagaAddNewCommentToPost()]

export default function* rootSaga() {
    yield all(allSagas)
}
