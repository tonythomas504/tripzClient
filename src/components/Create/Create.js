import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, TextField, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './Create.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        margin: '100px',
        padding: '80px'
    },
}));


function Create() {
    const classes = useStyles();

    const [To, setTo] = useState('')
    const [From, setFrom] = useState('')
    const [Date, setDate] = useState('')
    const [Flying, setFlying] = useState('')
    const [Driving, setDriving] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/trip/createtrip`, {
            method: 'POST',
            body: JSON.stringify({
                To: To,
                From: From,
                Date: Date,
                Flying: Flying,
                Driving: Driving
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
        <div className="create">
            <Navbar />
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField type="text" placeholder="To:" onChange={(e) => setTo(e.target.value)} name="To" value={To} />
                <TextField type="text" placeholder="From:" onChange={(e) => setFrom(e.target.value)} name="From" value={From} />
                <TextField type="text" placeholder="Date:" onChange={(e) => setDate(e.target.value)} name="Date" value={Date} />
                <TextField type="text" placeholder="Flying:" onChange={(e) => setFlying(e.target.value)} name="Flying" value={Flying} />
                <TextField type="text" placeholder="Driving:" onChange={(e) => setDriving(e.target.value)} name="Driving" value={Driving} />
                <br />
                <br />
                <Button type="submit">Create Trip!</Button>
            </form>
        </div >
    )
}

export default Create
