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
                    <div>
                        <h3>Medicare plans can cover doctors and hospitalization in one simple plan</h3>
                        <List>
                            <li>Medicare</li>
                            <li>Medicare supplements</li>
                            <li>Drug Plans</li>
                            <li>Vision</li>
                            <li>Dental</li>
                        </List>
                    </div>
                    <div>
                        <h3>Plans also include:</h3>
                        <List>
                            <li>Hearing Aids</li>
                            <li>Fitness Membership</li>
                            <li>Allowance for over-the-counter (OTC) products</li>
                            <li>Telehealth coverage</li>
                            <li>Meals after hospital stay</li>
                            <li>Naturopathic/Chiropractic/Acupuncture care</li>
                        </List>
                    </div>
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

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 2px solid black;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
    width: 300px;
    border: 2px solid red;
`
