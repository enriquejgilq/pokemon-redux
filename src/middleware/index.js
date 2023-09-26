export const logger = (store) => (next) => (action) => {
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'example' }, ...actionInfo.action.payload]
    const updateActionInfo = { ...actionInfo, action: { ...actionInfo.action, payload: featured } }
    next(updateActionInfo)
}