export const SET_ITEM_TO_DATASET_LIST_REDUCER: string = 'SET_ITEM_TO_DATASET_LIST_REDUCER'
export const SET_ITEM_TO_DATASET_REDUCER: string = 'SET_ITEM_TO_DATASET_REDUCER'
export const DELETE_ITEM_FROM_DATASET_LIST_REDUCER: string = 'DELETE_ITEM_FROM_DATASET_LIST_REDUCER'

const arrListToObjListParser = (data: any = []) => {
    let obj: any = {}
    data.map((item: any) => {
        obj[item.id] = item
    })
    return obj
}
export default arrListToObjListParser

export const setDatasetToReducer = (data: any, dataset_name: string, options = { key: '' || 0 }) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name,
    data,
    options,
})

export const setDatasetListToReducer = (dataList: any[], dataset_name: string, options = { keyName: '' }) => ({
    type: SET_ITEM_TO_DATASET_LIST_REDUCER,
    dataset_name,
    data: dataList,
    options,
})

export const setDatasetListToObjectReducer = (data: any, dataset_name: string) => ({
    type: SET_ITEM_TO_DATASET_REDUCER,
    dataset_name,
    data: arrListToObjListParser(data),
})
