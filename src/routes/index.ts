export const homePageRouteProps = { href: '/' }
export const aboutPageRouteProps = { href: `/acerca-de` }
export const branchesPageRouteProps = { href: `/sucursales` }
export const contactPageRouteProps = { href: `/contacto` }
export const shopPageRouteProps = { href: `/shop` }
export const workWithUsPageRouteProps = { href: `/trabaja-con-nosotros` }

export const postRouteProps = ({ query, id }: any) => ({ href: `/posts/[id]`, as: `/posts/${id}` })
