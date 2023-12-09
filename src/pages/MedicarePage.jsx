import styled from 'styled-components';
import Header from '../components/common/Header';
import image from '../images/medicareheader.jpeg';
import bannerimage from '../images/bannermedicare.jpeg';
import Banner from '../components/common/Banner';
import DisplaySteps from '../components/medicare/DisplaySteps';
import DisplayButtons from '../components/medicare/DisplayButtons';

const MedicarePage = () => {
    return (
        <Container>
            <Header title="Plans to Fit Your Lifestyle" tagline="Medicare" image={image}>
                <Content>
                    <RedBox>
                        <h2>Medicare plans can cover doctors and hospitalization in one simple plan</h2>
                        <List>
                            <Item>Medicare</Item>
                            <Item>Medicare supplements</Item>
                            <Item>Drug Plans</Item>
                            <Item>Vision</Item>
                            <Item>Dental</Item>
                        </List>
                    </RedBox>
                    <RedBox>
                        <h2>Plans also include:</h2>
                        <List>
                            <Item>Hearing Aids</Item>
                            <Item>Fitness Membership</Item>
                            <Item>Allowance for over-the-counter (OTC) products</Item>
                            <Item>Telehealth coverage</Item>
                            <Item>Meals after hospital stay</Item>
                            <Item>Naturopathic/Chiropractic</Item>
                            <Item>Acupuncture</Item>
                        </List>
                    </RedBox>
                </Content>
            </Header>
            <Banner image={bannerimage} title='Service Areas' description="Customized Medicare planning at no cost to you offered in AK, AZ, CA, DC, FL, ID, IL, MT, NC, NJ, OR, PA, TX, and WA." />
            <DisplaySteps />
            <DisplayButtons />

        </Container>
    )
}

export default MedicarePage


const Container = styled.div`
    width: 100vw;

`

const RedBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Content = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-wrap: wrap;
`

const List = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    @media (max-width: 500px) {
        width: 150px;
    }
    padding: 1rem;
`
const Item = styled.li`
    margin: 1rem;
    font-weight: bold;
    flex-wrap: wrap;
    border: 1px solid #f7f7f7;
`