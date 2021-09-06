export const homePageRouteProps = { href: '/' }
export const postPageRouteProps = ({ id }: any) => ({ href: `/posts/[id]`, as: `/posts/${id}` })
