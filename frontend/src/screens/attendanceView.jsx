import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getStudentsByRoomNo as action } from "../actions/studentActions";
import AttendanceTable from "../components/attendanceTable";

const AttendanceView = () => {
  const [roomNo, setRoomNo] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(action(roomNo));
  };

  const changeRoomNo = (e) => {
    setRoomNo(e.target.value);
  };
  return (
    <>
      <h2>Take Attendance</h2>
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          as="select"
          type="text"
          value={roomNo}
          name="roomNo"
          placeholder="Enter RoomNo"
          className="mr-sm-3 ml-sm-5" 
          onChange={(e) => changeRoomNo(e)}
        >
          <option value="select Room">select Room</option>
          <option value="B001">B001</option>
          <option value="B002">B002</option>
          <option value="B003">B003</option>
          <option value="B004">B004</option>
          <option value="B005">B005</option>
          <option value="B006">B006</option>
          <option value="B007">B007</option>
          <option value="B008">B008</option>
          <option value="B009">B009</option>
          <option value="B010">B010</option>
        </Form.Control>
        <Button type="submit" onClick={submitHandler}>
          Get Students
        </Button>
      </Form>
      <AttendanceTable roomNo={roomNo} />
    </>
  );
};

export default AttendanceView;
