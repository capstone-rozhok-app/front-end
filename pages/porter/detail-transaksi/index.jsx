import React, { useState, useEffect } from "react";
import HeaderPorter from "../../../components/HeaderPorter";
import { Row, Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import Cookies from "js-cookie";

const Index = () => {
    const router = useRouter();
    const [detailList, setDetailList] = useState([]);

    const getDataDetails = async () => {
        try {
            const response = await axios.get(`https://altagp3.online/transaksi/${router.query.idTransaksi}/porter?type_transaction=${router.query.tipeTransaksi}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
            setDetailList(response.data.data);
            console.log(JSON.stringify(response.data.data));
        } catch (error) {
            console.log("hayo kenapa", error);
        }
    };

    useEffect(() => {
        getDataDetails();
    }, []);

    return (
        <div>
            <HeaderPorter />
            <div className="container">
                <h3 className="text-alpukat float-end mt-5 fw-bolder">Detail Transaksi</h3>
                <br />
                <br />
                <Row className="" style={{ marginTop: "100px" }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4 className="text-alpukat">Nama: {detailList?.client?.name}</h4>
                        <CgProfile className="text-alpukat" style={{ fontSize: "92.5px" }} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-grid justify-content-end">
                        <h4 className="text-alpukat">Provinsi: {router.query.provinsi}</h4>
                        <h4 className="text-alpukat">Kota/Kab: {router.query.kota}</h4>
                        <h4 className="text-alpukat">Kecamatan: {router.query.kecamatan}</h4>
                        <h4 className="text-alpukat">Jalan: {router.query.jalan}</h4>
                    </div>
                </Row>
                <Card className="w-100 mb-5 shadow-sm mt-5 border border-lime">
                    <Card.Body className="bg-tea shadow-md">
                        <Row>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <Card.Title className="text-alpukat fs-3">Kategori: Besi </Card.Title>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end">
                                {router.query.status === "Sudah bayar" || router.query.status === "Terjual" ? (
                                    <Card.Title className="text-alpukat fs-5 pt-1 text-center text-white bg-lime rounded-3 w-25">{router.query.status}</Card.Title>
                                ) : (
                                    <Card.Title className="text-alpukat fs-5 pt-1 text-center text-white bg-danger rounded-3 w-25">{router.query.status}</Card.Title>
                                )}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-5">
                                {router.query.status === "Sudah bayar" || router.query.status === "Terjual  " ? (
                                    <Card.Title className="text-alpukat fs-3">Berat 10 (Kg)</Card.Title>
                                ) : (
                                    <Card.Title className="text-alpukat fs-3">
                                        Berat <input className="w-25" type="number"></input> (Kg)
                                    </Card.Title>
                                )}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end mt-5">
                                {router.query.status === "Sudah bayar" || router.query.status === "Terjual" ? (
                                    <Card.Title className="text-alpukat fs-3 text-center text-alpukat rounded-3 w-50">Rp 50.000</Card.Title>
                                ) : (
                                    <Card.Title className="text-alpukat fs-3 text-center text-alpukat rounded-3 w-50">
                                        Rp <input className="w-25" type="number"></input>
                                    </Card.Title>
                                )}
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
                {router.query.status === "Belum bayar" ? (
                    <Button variant="alpukat" className="hover-overlay hover-zoom text-white fs-5 float-end">
                        Simpan
                    </Button>
                ) : (
                    <Button variant="danger" className="hover-overlay hover-zoom text-white fs-5 float-end">
                        Jual
                    </Button>
                )}
                {router.query.status === "Terjual" ? null : null}
            </div>
        </div>
    );
};

export default Index;