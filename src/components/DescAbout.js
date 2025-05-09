import { Row, Col, Container } from "react-bootstrap";
import "../style/landingPage.css";

const DescAbout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="DescAbout ">Toko Bangunan kami adalah pilihan tepat untuk memenuhi segala kebutuhan konstruksi Anda. Kami menyediakan jasa kuli bangunan profesional yang siap membantu Anda merealisasikan proyek impian dengan hasil yang memuaskan. Didukung oleh tenaga kerja berpengalaman dan handal, kami berkomitmen menjadi mitra terpercaya dalam setiap tahap pembangunan, mulai dari pondasi hingga penyelesaian akhir. Dengan pelayanan yang penuh semangat dan keahlian, kami hadir untuk memberikan solusi terbaik. Percayakan proyek Anda kepada kami, dan wujudkan bangunan yang kuat, fungsional, dan menawan bersama kami.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DescAbout;