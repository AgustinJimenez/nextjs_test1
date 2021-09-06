import CommentInterface from '../interfaces/CommentInterface'

const getDataset = (state: any, datasetName: string) => state['datasets'][datasetName]

export const datasetSelector = (state: any, datasetName: string, { list_format = false, ids = null, id = -1 }: any = {}) => {
    //console.log('datasetSelector start ===> ', { datasetName, list_format, ids, id })
    let selected_dataset = getDataset(state, datasetName)
    if (!!id && id !== -1) return selected_dataset[id]
    else if (!!ids && Array.isArray(ids)) {
        let filtereds: any = {}
        for (let id of ids)
            if (!!selected_dataset[id]) {
                filtereds[id] = selected_dataset[id]
            }
        selected_dataset = filtereds
    }
    //console.log('datasetSelector mid ===> ', { selected_dataset })
    if (list_format) return Object.keys(selected_dataset || {}).map(id => selected_dataset[id])

    return selected_dataset
}

export const commentsByPostIdSelector = (state: any, postId: number): CommentInterface[] => {
    let comments: CommentInterface[] = datasetSelector(state, 'comments', { list_format: true })
        .filter((comment: CommentInterface) => comment['postId'] === postId)
        .sort((a: CommentInterface, b: CommentInterface) => +b.id - +a.id)
    return comments
}
