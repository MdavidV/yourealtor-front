import React from "react";
import {
  IoCallOutline,
  IoLogoWhatsapp,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  List,
  NavLink,
} from "reactstrap";
import { InlineShareButtons } from "sharethis-reactjs";
import { useData } from "../../../contexts/DataContext.jsx";
import { useNavigate } from "react-router-dom";

const SideContact = () => {
  const navigate = useNavigate();
  const { activo } = useData();
  return (
    <Card className="card__detail">
      <CardHeader>
        <CardTitle>Contáctanos</CardTitle>
      </CardHeader>
      <CardBody>
        <List>
          <li className="my-3">
            <NavLink>
              <span>
                <IoCallOutline />
              </span>
              <p className="px-2"> +573178845335</p>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink>
              <span>
                <IoLogoWhatsapp />
              </span>
              <p className="px-2"> +573178845335</p>
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink>
              <span>
                <IoPaperPlaneOutline />
              </span>
              <p className="px-2"> coo@yourealtor.co</p>
            </NavLink>
          </li>
          <li className="my-3">
            <p className="strong-text">Compartelo en tus redes</p>
            <InlineShareButtons
              config={{
                alignment: "center", // alignment of buttons (left, center, right)
                color: "social", // set the color of buttons (social, white)
                enabled: true, // show/hide buttons (true, false)
                font_size: 16, // font size for the buttons
                labels: "cta", // button labels (cta, counts, null)
                language: "es", // which language to use (see LANGUAGES)
                networks: [
                  // which networks to include (see SHARING NETWORKS)
                  "whatsapp",
                  "linkedin",
                  "messenger",
                  "facebook",
                  "twitter",
                ],
                padding: 12, // padding within buttons (INTEGER)
                radius: 4, // the corner radius on each button (INTEGER)
                show_total: true,
                size: 40, // the size of each button (INTEGER)

                // OPTIONAL PARAMETERS
                // url: "https://www.sharethis.com", // (defaults to current url)
                // image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
                // description: "custom text", // (defaults to og:description or twitter:description)
                // title: "custom title", // (defaults to og:title or twitter:title)
                // message: "custom email text", // (only for email sharing)
                // subject: "custom email subject", // (only for email sharing)
                // username: "custom twitter handle", // (only for twitter sharing)
              }}
            />
          </li>
        </List>
      </CardBody>
      <CardFooter className="text-center">
        <Button
          className="secondary-button-l"
          onClick={() => navigate(`/offer`)}
        >
          {activo.Tipo_Servicio === "Arriendo" ? "Arrienda Ya!" : "Compra Ya!"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SideContact;
