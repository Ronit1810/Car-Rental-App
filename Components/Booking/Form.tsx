"use client";

import { BookingDetail } from "@/Services";
import { BookingContext } from "@/context/BookingContext";
import React, { useContext, useEffect, useState } from "react";

const Form = ({ car }: any) => {
  const {showToast, setShowToast} = useContext(BookingContext)
  const [formValue, setFormValue] = useState({
    username:"",
    location: "",
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: "",
    contact: "",
    carId: "",
  });
  useEffect(()=>{
    setFormValue({
      ...formValue,
      carId: car.id,
    });
  },[car])

  useEffect(() => {
    if (showToast) {
      setTimeout(function () {
        setShowToast(false)
      },2000)
    }
  },[showToast])

  const HandleChange = (event: any) => {
    event.preventDefault();
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const HandleSubmit = async (event: any) => {
    event.preventDefault();
    // console.log(formValue);
    const resp = await BookingDetail(formValue)
    // console.log(resp);
    if (resp) {
      setShowToast(true)
    }
    
  };
  return (
    <div>
      <div className="form-control w-full max-w-xs">
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="username"
            required
            onChange={HandleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <label className="label">
          <span className="label-text">Pickup Location</span>
        </label>
        <select
          className="select select-bordered"
          name="location"
          required
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
            required
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
            required
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
            required
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
            required
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
          required
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
