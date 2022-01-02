import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Donation() {
    return (
        <>
            <Head>
                <title>Donation</title>
                <meta name="description" content="Donation" />
                <link rel="icon" href="/Logo.svg" />
            </Head>

            <Row className='DonationBar'>
                <Link href='?q=All'>
                    <a className='DonationBarLink active'>
                        All
                    </a>
                </Link>
                <Link href='?q=Today'>
                    <a className='DonationBarLink'>
                        Today
                    </a>
                </Link>
                <Link href='?q=This Month'>
                    <a className='DonationBarLink'>
                        This Month
                    </a>
                </Link>
            </Row>
            <Row style={{
                height: "273px",
                margin: "28px",
                background: "white",
                color: "black",
                overflow: "hidden",
                padding: 0,
            }}>

                <div><h4>14 Days 3 hours 49 mintues 24 seconds</h4></div>
                <div style={{ "display": "flex" }}>
                    <img src="/Logo.svg" style={{ width: "200px" }} />
                    <div style={{
                        "paddingTop": "11px",
                        "marginLeft": "50px",
                        display: "flex",
                        "flexDirection": "column",
                        width: "100%",
                        "rowGap": "10px"
                    }}>
                        <h4>Hiv Protection</h4>
                        <div style={{ display: "flex", "whiteSpace": "pre-wrap" }}>
                            <h4>Goal:  </h4>
                            <h4>$400,000</h4>
                        </div>
                        <div style={{ display: "flex" }}>
                            <h4>Descripiton:</h4>
                            <h4 style={{
                                width: "100%",
                                overflow: "hidden",
                                height: "27px"
                            }}>333333333333333333as 234   werrrrrrrrr 423    324 </h4>
                        </div>
                        <div style={{
                            display: "flex",
                            height: "58px",
                            float: "right",
                            gap: "26px",
                            right: 0,
                            width: "100%",
                            "justifyContent": "right"
                        }}>
                            <div className="card" style={{ color: "white", background: "rgb(0, 222, 205)", "textAlign": "center", cursor: "pointer", height: "100%", float: "right", }}>
                                <div className="card-body" style={{ height: "100%", "paddingTop": "6px" }}>
                                    Donate NFT
                                </div>
                            </div>
                            <div className="card" style={{ color: "white", background: "rgb(0, 222, 205)", "textAlign": "center", cursor: "pointer", height: "100%", float: "right", }}>
                                <div className="card-body" style={{ height: "100%", "paddingTop": "6px" }}>
                                    Go to auction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Row>

        </>
    );
}
