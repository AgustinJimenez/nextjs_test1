import { takeLatest, put } from 'redux-saga/effects'
import { SAGA_ADD_NEW_COMMENT_TO_POST } from './actions'
import { setDatasetListToReducer, setDatasetToReducer } from '../redux/actions'
import CommentInterface from '../interfaces/CommentInterface'

function* sagaAddNewCommentToPost({ postId, message }: any) {
    const comment: CommentInterface = {
        id: +new Date(),
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
