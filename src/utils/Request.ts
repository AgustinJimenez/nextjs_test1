import fetch from 'isomorphic-unfetch'

const request = async (options: any) => {
    let res = await fetch(options)
    //console.log('RESPONSE ===> ', {res})
    let json = await res.json()
    return json
}

export default request
