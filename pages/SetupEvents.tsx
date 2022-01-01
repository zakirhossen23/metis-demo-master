

import Link from 'next/link';
import { setter } from '../components/variables/Events';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as dotenv from 'dotenv';
import Button from 'react-bootstrap/Button';
import path from "path";
import { readFileSync } from 'fs';
import * as fs from 'fs';
import UseFormInput from '../components/UseFormInput';


export default function CreateEvents() {
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
    function setupEvent() {
        const data = { datetime: (document.getElementById("enddate") as HTMLInputElement).value };

        process.env.EndTime = (document.getElementById("enddate") as HTMLInputElement).value
        console.log(process.env.NODE_ENV);
        setter((document.getElementById("enddate") as HTMLInputElement).value
        );

        // window.location.href = "/"
    }
    return (
        <><>
            <Head>
                <title>Setup Event</title>
                <meta name="description" content="Event" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Row>
                <Col>
                    <h3>Event Title</h3>
                    {EventTitleInput}
                    <h3>Event Description</h3>
                    {EventDescriptionInput}
                    <h3>Event End Date</h3>
                    {EventDateInput}

                    <Button
                        className="float-end"
                        onClick={setupEvent}
                    >
                        Setup Event
                    </Button>

                </Col>
            </Row>

        </>
        </>
    );
}
