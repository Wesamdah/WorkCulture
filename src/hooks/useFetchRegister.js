import { useState, useEffect } from "react";
import axios from "../api/axios";

export default function useFtechRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    backpoint_id: "",
    direction_id: "",
    subdirection_ids: "",
    image: "",
  });

  const [backPointData, setBackPointData] = useState([]);
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    const getBackPoint = async () => {
      try {
        const response = await axios.get(
          "https://api-workculture.next-ai.pro/api/back-points",
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        setBackPointData(response.data.data);
      } catch (err) {
        if (!err?.response) {
          console.log("No Server Response");
        } else {
          console.log("Error: ", err.response.data);
        }
      }
    };
    getBackPoint();
  }, []);

  useEffect(() => {
    const getDirections = async () => {
      try {
        const response = await axios.get(
          "https://api-workculture.next-ai.pro/api/directions",
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        setDirections(response.data.data);
      } catch (err) {
        if (!err?.response) {
          console.log("No Server Response");
        } else {
          console.log("Error: ", err.response.data);
        }
      }
    };
    getDirections();
  }, []);
  return { formData, setFormData, backPointData, directions };
}
