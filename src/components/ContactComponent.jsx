import React from "react";
import { FaPhone } from "react-icons/fa";
import { Row } from "react-bootstrap";
const ContactComponent = () => {
    return (
        <>
            <h2 id="contact" className="my-2 text-center sectionHeader text-light">
            Tentang Kami
            </h2>
            <Row className="py-5 text-light">
                <div>
                    <p className="my-3 me-3">
                    Tim kami memilih project dengan judul <strong>GuruCoding</strong>{" "}
                    kerena bagi kami project ini berpotensi besar untuk memberikan
                    dampak positif bagi industri TIK di Indonesia. GuruCoding dapat
                    meningkatkan keterampilan dan mendapatkan pekerjaan yang sesuai
                    dengan keinginan mereka. Hal ini sangat membantu meningkatkan
                    kualitas tenaga kerja di industri TIK dan akan mendorong untuk
                    meningkatkan pertumbuhan ekonomi di Indonesia dengan terbukanya
                    lapangan kerja yang beragam.
                    </p>
                    <form>
                    <a href="mailto:gurucoding@gmail.com" className="btn btn-purple-report" >
                        {" "}
                        <FaPhone size="1rem" className="me-1 text-purple" />{" "}
                        <strong> Hubungi Kami </strong>
                    </a>
                    </form>
                </div>
            </Row>
        </>
    );
}

export default ContactComponent