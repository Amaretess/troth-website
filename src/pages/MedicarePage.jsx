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
            <Header title="Plans to Fit Your Lifestyle" tagline="Medicare" subtitle="Medicare plans can cover doctors and hospitalization in one simple plan." image={image}>
                <Content>
                    <div>
                        <ul>
                            <li>Medicare</li>
                            <li>Medicare supplements</li>
                            <li>Drug Plans</li>
                            <li>Vision</li>
                            <li>Dental</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Plans also include:</h3>
                        <ul>
                            <li>Hearing Aids</li>
                            <li>Fitness Membership</li>
                            <li>Allowance for over-the-counter (OTC) products</li>
                            <li>Telehealth coverage</li>
                            <li>Meals after hospital stay</li>
                            <li>Naturopathic/Chiropractic/Acupuncture care</li>
                        </ul>
                        <i>We do not offer every plan available in your area.  Any information we provide is limited to those plans we do offer in your area.  Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.</i>
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
    flex-direction: column;
`