export const homeRoute = (query?: any) => ({ pathname: '/', query })
export const aboutRoute = (query?: any) => ({ pathname: '/about', query })//query: { name: 'ZEIT' }
export const productRoute = ({query, id}: any) => ({ pathname: '/products/[id]', query, as: `/products/${id}` })
