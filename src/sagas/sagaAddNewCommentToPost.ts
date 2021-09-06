import { takeLatest, select, put } from 'redux-saga/effects'
import { SAGA_ADD_NEW_COMMENT_TO_POST } from './actions'
import { setDatasetListToReducer, setDatasetToReducer } from '../redux/actions'
import CommentInterface from '../interfaces/CommentInterface'
import { datasetSelector } from '../redux/selectors'

function* sagaAddNewCommentToPost({ postId, message }: any) {
    const comments: CommentInterface[] = yield select(state => datasetSelector(state, 'comments', { list_format: true }))
    const comment: CommentInterface = {
        id: comments?.length + 1,
        postId,
        name: 'anonymous',
        email: 'anonymousUser@anonymousMail.com',
        body: message,
    }
    yield put(setDatasetListToReducer(comment, 'comments'))
    yield put(setDatasetToReducer('', 'new_comment'))
}

export default function* saga() {
    yield takeLatest(SAGA_ADD_NEW_COMMENT_TO_POST, sagaAddNewCommentToPost)
}
