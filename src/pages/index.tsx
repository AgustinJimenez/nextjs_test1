import React from 'react'
import Layout from '../layout'
import request from '../utils/request'
import { url_list_all_by_letter } from '../api'
import MealCard from '../components/MealCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { datasetSelector } from '../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { setDatasetListToReducer } from '../redux/actions'

const HomePage = (props: any) => {
    const dispatch = useDispatch()
    const meals: any = useSelector((state: any) => datasetSelector(state, 'meals', { list_format: true }))
    const fetchMeals = React.useCallback(async () => {
        let { data, error } = await request({ url: url_list_all_by_letter, params: { s: '' } })
        if (error) return

        dispatch(setDatasetListToReducer(data['meals'], 'meals', { keyName: 'idMeal' }))
    }, [])

    React.useEffect(() => {
        fetchMeals()
    }, [])

    //console.log('HomePage ===> ', { meals })
    return (
        <Layout>
            <Container fluid>
                <Row style={{}}>
                    {meals.map((meal: any, key: number) => (
                        <Col lg='4' md='12' key={key} style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                            <MealCard meal={meal} key={key} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps() {
    //let { data, erro  r, message } = await request({ url: url_list_all_by_letter, params: { s: '' } })
    //console.log('HOMEPAGE-response ===> ', { data, error, message })
    return { props: {} }
}
export default HomePage
