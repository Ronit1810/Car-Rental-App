"use client";

import React, { useState } from "react";

const Form = () => {
  const [formValue, setFormValue] = useState({
    location: "",
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: "",
    contact: "",
  });
  const HandleChange = (event: any) => {
    event.preventDefault();
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const HandleSubmit = () => {
    event.preventDefault();
    console.log(formValue);
  };
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pickup Location</span>
        </label>
        <select
          className="select select-bordered"
          name="location"
          onChange={HandleChange}
        >
          <option disabled selected>
            Pick one
          </option>
          <option>Maharashtra</option>
          <option>Delhi</option>
          <option>Gujarat</option>
        </select>
      </div>
      <div className=" flex m-1 flex-col md:flex-row gap-1">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick up Date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            name="pickupDate"
            onChange={HandleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Drop off Date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            name="dropoffDate"
            onChange={HandleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className=" flex m-1 flex-col md:flex-row gap-1">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick up Time</span>
          </label>
          <input
            type="time"
            placeholder="Type here"
            name="pickupTime"
            onChange={HandleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Drop off Time</span>
          </label>
          <input
            type="time"
            placeholder="Type here"
            name="dropoffTime"
            onChange={HandleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Contact No.</span>
        </label>
        <input
          type="contact"
          placeholder="Type here"
          name="contact"
          onChange={HandleChange}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="modal-action">
        <form>
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
          <button
            className="btn bg-blue-500 text-white m-1 hover:bg-blue-900"
            onClick={HandleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
