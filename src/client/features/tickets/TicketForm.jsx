import React from "react";
import { usePostTicketMutation } from "./ticketSlice";
import { useState } from "react";

function TicketForm() {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [seatSection, setSeatSection] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [postTicket] = usePostTicketMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    postTicket({
      eventName,
      location,
      dateTime,
      description,
      seatSection,
      imageUrl,
      price,
    });
    setEventName("");
    setLocation("");
    setDateTime("");
    setDescription("");
    setSeatSection("");
    setImageUrl("");
    setPrice("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            required
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            required
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Date and Time:
          <input
            required
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Seat/Section:
          <input
            required
            type="text"
            value={seatSection}
            onChange={(e) => setSeatSection(e.target.value)}
          />
        </label>
        <label>
          ImageUrl:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            required
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button>Create Post</button>
      </form>
    </>
  );
}

export default TicketForm;
