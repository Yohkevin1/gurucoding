import { Col, Row } from "react-bootstrap";
import funfact from "../assets/funfact.png";
const FunfactComponent = () => {
    return (
      <>
        <h2 id="funfact" className="my-2 mt-5 mb-5 text-center sectionHeader text-light">Fun Fact</h2>
        <Row className="text-light" xs={1} md={2} g={4}>
            <Col id="mainImg" className="order-1 order-md-1">
                <img src={funfact} />
            </Col>
            <Col className="aboutText text-left align-center order-2 order-md-2">
                <h3 className="text-logo">HTML</h3>
                <p>
                Bahasa Tua yang Masih Kuat: HTML (HyperText Markup Language)
                pertama kali diciptakan oleh Tim Berners-Lee pada tahun 1989.
                Meskipun sudah lebih dari 3 dekade, HTML masih menjadi bahasa
                dasar untuk membangun halaman web dan terus berkembang hingga saat
                ini.
                </p>
                <h3 className="text-logo">CSS</h3>
                <p>
                CSS bukan hanya tentang membuat halaman web terlihat cantik dengan
                warna dan font yang menarik. CSS memiliki berbagai kemampuan yang
                membuatnya menjadi alat yang ampuh untuk membangun web modern.
                Dari menyelamatkan bandwidth dan mengatasi perang browser di
                masa lalu, hingga memungkinkan efek visual kreatif, layout
                responsif, dan animasi halus saat ini, CSS terus berkembang dan
                menawarkan banyak peluang untuk menciptakan pengalaman web yang
                interaktif dan memukau. Komunitas developer CSS yang aktif dan
                inovatif memastikan bahwa masa depan CSS penuh dengan kemungkinan
                yang menarik
                </p>
                <h3 className="text-logo">Fun Fact</h3>
                <p>
                Bahasa Tua yang Masih Kuat: HTML (HyperText Markup Language)
                pertama kali diciptakan oleh Tim Berners-Lee pada tahun 1989.
                Meskipun sudah lebih dari 3 dekade, HTML masih menjadi bahasa
                dasar untuk membangun halaman web dan terus berkembang hingga saat
                ini.
                </p>
            </Col>
        </Row>
      </>  
    );
}

export default FunfactComponent;
