import React, { useState } from "react";
import {Helmet} from "react-helmet";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar as Cal, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "ECE Day",
        allDay: true,
        start: new Date(2023, 4, 5),
        end: new Date(2023, 4, 6),
    },
    {
        title: "Graduation",
        start: new Date(2023, 4, 19),
        end: new Date(2023, 4, 22),
    },
    {
        title: "Star Wars Day",
        start: new Date(2023, 4, 4),
        end: new Date(2023, 4, 5),
    },
];

function Calendar(){
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        const d1 = new Date(newEvent.start);
        const d2 = new Date(newEvent.end);
        if (d2<d1){
            alert("Invalid date range. Start date must be before end date")
        }
        else{
            setAllEvents([...allEvents, newEvent]);
            events.push(newEvent)
        }
    
    }

    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Calendar</title>
            </Helmet>

            <div className="App">
                <h3 className="main-heading">Calendar</h3>
                <div className="underline mx-auto"></div>
                <h2>Add New Event</h2>
                <div>
                    <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px", color: "#181717" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker placeholderText="Start Date" style={{ marginRight: "100px", color: "#181717"}} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button stlye={{ marginTop: "10px" , color: "#181717"}} onClick={handleAddEvent}>
                        Add Event
                    </button>
                </div>
                <Cal localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>
        </div>
    );
}

export default Calendar;
