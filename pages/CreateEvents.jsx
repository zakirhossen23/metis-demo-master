
import React from 'react';

import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import UseFormInput from '../components/UseFormInput';
import useContract from '../services/useContract';
import Router from 'next/router'
import FileBase64 from 'react-file-base64';


export default function CreateEvents() {


    const { contract, signerAddress } = useContract('ERC721');
    const [EventTitle, EventTitleInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Title',
        id: ''
    });
    const [EventDescription, EventDescriptionInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Description',
        id: ''
    });
    const [EventDate, EventDateInput] = UseFormInput({
        defaultValue: "",
        type: 'datetime-local',
        placeholder: 'Event End Date ',
        id: 'enddate',
    });
    const [EventGoal, EventGoalInput] = UseFormInput({
        defaultValue: "",
        type: 'text',
        placeholder: 'Event Goal in ETH',
        id: 'goal',
    });
    const [EventLogo, EventLogoInput] = UseFormInput({
        defaultValue: "",
        type: 'file',
        placeholder: 'Event Logo',
        id: 'logo',
    });
    async function getBase64() {
        let file = document.getElementById("logo").files[0];

        // Make new FileReader
        let reader = new FileReader();
        // Convert the file to base64 text
        const response = await reader.readAsDataURL(file);
        await new Promise(r => setTimeout(r, 200));
        console.log(reader.result);
        return reader.result;
    }

    async function createEvent() {
        var base64 = await getBase64();
        const createdObject = {
            title: 'Asset Metadata',
            type: 'object',
            properties: {
                Title: {
                    type: 'string',
                    description: EventTitle,
                },
                Description: {
                    type: 'string',
                    description: EventDescription,
                },
                Date: {
                    type: 'string',
                    description: EventDate,
                },
                Goal: {
                    type: 'string',
                    description: EventGoal
                },
                logo: {
                    type: 'string',
                    description: base64
                },
                typeimg: {
                    type: 'string',
                    description: "Event"
                }
            }
        };
        try {
            const result = await contract.createEvent(
                signerAddress,
                JSON.stringify(createdObject)
            );

            console.log(result);
        } catch {
            Router.push('/login');
        }

        Router.push('/donation');

    }

    return (
        <><>
            <Head>
                <title>Create Event</title>
                <meta name="description" content="Create Event" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Row>
                <Col style={{ padding: "0 30%", "paddingTop": 0, width: "100%" }}>
                    <div style={{ width: "500px", background: "transparent", padding: "19px", borderRadius: "4px", height: "100%", border: "white solid" }}>
                        <div style={{ margin: "0px 0px 30px 0px" }}>
                            <h1>Create Event</h1>
                        </div>

                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Title</h6>
                            {EventTitleInput}
                        </div>
                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Description</h6>
                            {EventDescriptionInput}
                        </div>
                        <div style={{ margin: "18px 0" }}>
                            <h6>Event End Date</h6>
                            {EventDateInput}
                        </div>
                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Goal</h6>
                            {EventGoalInput}
                        </div>
                        <div style={{ margin: "18px 0" }}>
                            <h6>Event Logo</h6>
                            {EventLogoInput}
                        </div>

                        <Button style={{ margin: "17px 0 0px 0px", width: "100%" }}
                            onClick={createEvent}
                        >
                            Create Event
                        </Button>
                    </div>
                </Col>
            </Row>

        </>
        </>
    );
}
