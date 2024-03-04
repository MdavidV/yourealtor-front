import { Router } from "express";
import axios from "axios";
import { CALENDLY_TOKEN } from "../config.js";

const router = Router();

const token =
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzA5MTQ5MDg3LCJqdGkiOiI4ODk0ZjEzNC1iOTFmLTQ5ZTMtOTlmMy1iZTRlMGQyMjE3ZGEiLCJ1c2VyX3V1aWQiOiI1MWE3MDM1Yy0xZWJkLTQxOTctYWQ0My0wMmIzMWVmNDIwOTkifQ.CYRzAKbnUDyAhqQczcCHdgc6DxDXNl7KO1t3hei8r7LpeAl2fYemCKTZnwzbG7Lbrn-N1JTN4t0P_1VYEY-utw";
const userId =
  "https://api.calendly.com/users/51a7035c-1ebd-4197-ad43-02b31ef42099";

const eventUuid =
  "da967fd8-9092-4797-953b-88fc760b7051";
router.get("/meetings", async (req, res) => {
  try {
    const response = await axios.get("https://api.calendly.com/users/me", {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al obtener la información del usuario de Calendly:",
      error.response.data
    );
    res
      .status(500)
      .send("Error al obtener la información del usuario de Calendly");
  }
});

router.get("/meetings-schedule", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.calendly.com/scheduled_events`,
      {
        headers: {
          Authorization: `Bearer ${CALENDLY_TOKEN}`,
        },
        params: {
          user: "https://api.calendly.com/users/51a7035c-1ebd-4197-ad43-02b31ef42099",
          organization:
            "https://api.calendly.com/organizations/57580e6b-9462-4101-945b-e5a64d7566ee",
          min_start_time: "2024-01-01T00:00:00Z",
          max_start_time: "2024-12-31T23:59:59Z",
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al obtener la información del usuario de Calendly:",
      error.response.data
    );
    res
      .status(500)
      .send("Error al obtener la información del usuario de Calendly");
  }
});

router.get("/scheduled-events", async (req, res) => {
  try {
    const response = await axios.get(`https://api.calendly.com/scheduled_events/47b6a786-89eb-47f8-8b93-f68c61992d2e`, {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        
      },
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los eventos programados");
  }
});

export default router;
