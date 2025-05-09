import { Col, Row, Container } from "react-bootstrap";
import "../style/landingPage.css"

const VMSAbout = () => {
    return (
        <div className="vmsabout ">
            <Container className="text-white text-right d-flex justify-content-center align-items-center ">
                <Row>
                    <Col>
                        <p className="VMS">Our Vision</p>
                        <div className="descWrapped">
                            <p className="descVM">1. Pusat terpercaya untuk segala keperluan konstruksi Anda.</p>
                            <p className="descVM">2. Penyedia jasa kuli bangunan profesional dengan standar tinggi.</p>
                            <p className="descVM">3. Menggabungkan ide segar dan teknologi untuk hasil terbaik.</p>
                            <p className="descVM">4. Menjalin kolaborasi yang solid dan saling menguntungkan.</p>
                            <p className="descVM">5. Selalu menempatkan kepuasan pelanggan sebagai prioritas utama.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="text-white text-center d-flex justify-content-center align-items-center ">
                <Row>
                    <Col>
                        <p className="VMS">OUR SLOGAN</p>
                        <p className="slogan">BERIKAN KAMI KOPI</p>
                        <p className="slogan">AKAN KAMI</p>
                        <p className="slogan">BANGUN NEGERI INI</p>
                    </Col>
                </Row>
            </Container>
            <Container className="text-white text-right d-flex justify-content-center align-items-center ">
                <Row>
                    <Col>
                        <p className="VMS">Our Mission</p>
                        <div className="descWrapped">
                            <p className="descVM">Kami bertekad untuk menghadirkan pelayanan unggul melalui produk-produk berkualitas dan tenaga kuli yang profesional. Kepuasan pelanggan menjadi prioritas utama kami, didukung oleh inovasi yang terus berkembang serta kepedulian terhadap lingkungan dan masyarakat. Dengan semangat dan komitmen penuh, kami siap menjadi mitra andalan Anda dalam memenuhi segala kebutuhan pembangunan, demi menciptakan masa depan yang lebih baik dan berkelanjutan.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default VMSAbout;