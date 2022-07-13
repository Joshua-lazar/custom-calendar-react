import React, { useState } from 'react';
// packges
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// style
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//  all event
import Events from './Event';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
function MainCalender() {
  const [events, setevents] = useState(Events);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' }); // add  new events
  // model
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  // This function is used add new  event
  function handleClose() {
    setevents([...events, newEvent]);
    setShow(false);
  }
  //  This  fucntion is used to move Event
  const MoveEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event); // Get  Index  of Event
    const updatedEvent = { ...event, start, end }; // update the event for this Date
    console.log(updatedEvent);
    const nextEvents = [...events]; // move the  event for next date
    nextEvents.splice(idx, 1, updatedEvent);
    setevents(nextEvents); // set the new event date in State...
  };

  // This Function is used to Resize the  Event
  const ResizeEvent = ({ event, start, end }) => {
    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id ? { ...existingEvent, start, end } : existingEvent;
    });
    setevents(nextEvents);
  };

  return (
    <div>
      <div className="main_input">
        <Button variant="primary" onClick={handleShow}>
          Add New Events
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a New Event 🔥</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Event</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new  Event"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </Form.Group>
            <div style={{ display: 'flex' }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Start Date</Form.Label>

                <DatePicker
                  placeholderText="Start Date"
                  style={{ marginRight: '10px' }}
                  selected={newEvent.start}
                  onChange={(start) => setNewEvent({ ...newEvent, start })}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>End Date</Form.Label>

                <DatePicker
                  placeholderText="End Date"
                  selected={newEvent.end}
                  onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={MoveEvent}
          onEventResize={ResizeEvent}
          resizable
          className="main_calendar"
          style={{ height: '100vh' }}
        />
      </div>
    </div>
  );
}

export default MainCalender;
