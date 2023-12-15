import React from "react";
import { usePostTicketMutation } from "./ticketSlice";
import { useState } from "react";
import "./Styling/TicketForm.less";

function TicketForm() {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [seatSection, setSeatSection] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [seller, setSeller] = useState("");
  const [postTicket, { isLoading }] = usePostTicketMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDateTime = new Date(dateTime).toISOString();

      await postTicket({
        eventName,
        location,
        dateTime: formattedDateTime,
        description,
        seatSection,
        imageUrl,
        price,
        seller,
      }).unwrap();

      setEventName("");
      setLocation("");
      setDateTime("");
      setDescription("");
      setSeatSection("");
      setImageUrl("");
      setPrice("");
      setSeller("");

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="post-div">
        <h1 className="form-title">Create Ticket Posting</h1>
        <form className="post-form">
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
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </label>
          <button type="submit" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Creating . . ." : "Create Post"}
          </button>
        </form>
      </div>
    </>
  );
}

export default TicketForm;
