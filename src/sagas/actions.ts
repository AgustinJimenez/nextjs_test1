export const SAGA_FETCH_POSTS: string = 'SAGA_FETCH_POSTS'
export const SAGA_FETCH_POST_BY_ID: string = 'SAGA_FETCH_POST_BY_ID'
export const SAGA_FETCH_COMMENTS_BY_POST_ID: string = 'SAGA_FETCH_COMMENTS_BY_POST_ID'
export const SAGA_ADD_NEW_COMMENT_TO_POST: string = 'SAGA_ADD_NEW_COMMENT_TO_POST'

export const sagaFetchPostsAction = ({}: any = {}) => ({
    type: SAGA_FETCH_POSTS,
})
export const sagaFetchPostByIdAction = ({ id }: any = {}) => ({
    type: SAGA_FETCH_POST_BY_ID,
    id,
})
export const sagaFetchCommentsByPostIdAction = ({ id }: any = {}) => ({
    type: SAGA_FETCH_COMMENTS_BY_POST_ID,
    id,
})
export const sagaAddNewCommentToPostAction = ({ postId, message }: any = {}) => ({
    type: SAGA_ADD_NEW_COMMENT_TO_POST,
    postId,
    message,
})
