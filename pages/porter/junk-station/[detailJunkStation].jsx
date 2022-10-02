import React from "react";
import { Row } from "react-bootstrap";
import HeaderPorter from "../../../components/HeaderPorter";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Junk Station</h3>
                <br />
                <br />
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <CgProfile className="text-alpukat" style={{ fontSize: "282.5px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h1 className="text-alpukat">Provinsi: {router.query.provinsi}</h1>
                        <h1 className="text-alpukat">Kota/Kab: {router.query.kota}</h1>
                        <h1 className="text-alpukat">Kecamatan: {router.query.kecamatan}</h1>
                        <h1 className="text-alpukat">Jalan: {router.query.jalan}</h1>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Index;
