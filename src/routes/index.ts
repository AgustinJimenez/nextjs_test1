export const homeRoute = (query?: any) => ({ pathname: '/', query })
export const aboutRoute = (query?: any) => ({ pathname: '/about', query })//query: { name: 'ZEIT' }
export const productRouteProps = ({query, id}: any) => ({ href: `/products/[id]`, as: `/products/${id}` })