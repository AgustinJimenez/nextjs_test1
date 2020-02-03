export const homeRoute = (query?: any) => ({ pathname: '/', query })
export const aboutRoute = (query?: any) => ({ pathname: '/about', query }) //query: { name: 'ZEIT' }
export const postRouteProps = ({ query, id }: any) => ({ href: `/posts/[id]`, as: `/posts/${id}` })
