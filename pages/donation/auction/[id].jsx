import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import BidNFTModal from '../../../components/modals/BidNFTModal';

import useContract from '../../../services/useContract';

export default function ViewNFT(user) {
    const { contract, signerAddress } = useContract('ERC721');
    const router = useRouter();
    const [tokenId, setTokenId] = useState(-1);
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [title, setTitle] = useState('');
    const [goalusd, setgoalusd] = useState('');
    const [goal, setgoal] = useState('');
    const [dateleft, setdateleft] = useState('');
    const [logo, setlogo] = useState('');
    const [owner, setOwner] = useState('');
    const [url, setUrl] = useState('');
    const [eventuri, setEventuri] = useState('');
    const [modalShow, setModalShow] = useState(false);


    function LeftDate(datetext) {
        var c = new Date(datetext).getTime();
        var n = new Date().getTime();
        var d = c - n;
        var da = Math.floor(d / (1000 * 60 * 60 * 24));
        var h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((d % (1000 * 60)) / 1000);
        return (da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds");
    }
    async function fetchContractData() {
        try {
            const { id } = router.query;
            if (contract && id) {
                const value = await contract.eventURI(id);
                setEventuri(value);

                const object = JSON.parse(value);
                setTitle(object.properties.Title.description);
                setgoalusd(Number(object.properties.Goal.description * 3817.09));
                setgoal(Number(object.properties.Goal.description));
                setdateleft(LeftDate(object.properties.Date.description));
                setlogo(object.properties.logo.description);
                setTokenName(await contract.name());
                setTokenSymbol(await contract.symbol());

            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchContractData();

        window.ethereum.on('chainChanged', fetchContractData);

        return () => {
            window.ethereum.removeListener('chainChanged', fetchContractData);
        };
    }, [router.query, contract]);


    function activateBidNFTModal() {
        setModalShow(true);
    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="row EventContainer" >
                <div style={{ "display": "flex" }}>
                    <img src={logo} className="AuctionImage" />
                    <div className="DetialsContainer">
                        <h4>{title}</h4>

                        <div className='TextContainer'>
                            <h4>Goal: </h4>
                            <h4>$ {goalusd} ({goal} ETH)</h4>
                        </div>
                        <div className='TextContainer'>
                            <h4>14 Days 3 hours 49 mintues 24 seconds</h4>
                        </div>
                    </div>
                </div>
            </div>


            <BidNFTModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    // This is a poor implementation, better to implement an event listener
                    fetchContractData();
                }}
                contract={contract}
                Amount={signerAddress}
                tokenId={tokenId}
                senderAddress={signerAddress}
            />

        </>
    );
}
