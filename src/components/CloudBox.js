import { React, useState, useEffect, useRef } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Muuri from "muuri";

import NavBar from "./NavBar";
import Box from "./Box";
import Upload from "./Upload";
import CheckListModal from "./CheckListModal";

import { boxModalOptions, shareModalOptions } from "./utils";

//import "../CSS/CloudBox.css";
import "../CSS/TestDrag.css";

import { useApi } from "../hooks/useApi";

export default function CloudBox() {
  const { user, isLoading } = useAuth0();
  const { loading, token, refresh, data } = useApi(
    "http://localhost:5000/getGroup"
  );

  const ref = useRef(null);

  useEffect(() => {
    if (!isLoading && !loading) {
      let grid = new Muuri(ref.current, { dragEnabled: true });
      return () => grid.destroy();
    }
  }, [data]);

  const [shareModalShow, setShareModalShow] = useState(false);
  const [boxModalShow, setBoxModalShow] = useState(false);

  const showShareModal = () => {
    setShareModalShow(true);
  };
  const showBoxModal = () => {
    setBoxModalShow(true);
  };

  if (isLoading && loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <Spinner
          animation="border"
          style={{ width: "10em", height: "10em" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <NavBar email={user.name} showModal={showShareModal} />

      <CheckListModal
        {...boxModalOptions}
        show={boxModalShow}
        onHide={() => setBoxModalShow(false)}
        email={user.email}
        emailgroup={data.accessArray}
        refresh={refresh}
        token={token}
      />

      <CheckListModal
        {...shareModalOptions}
        show={shareModalShow}
        onHide={() => setShareModalShow(false)}
        email={user.email}
        emailgroup={data.shareArray}
        refresh={refresh}
        token={token}
      />

      <div className="grid" ref={ref}>
        {data.boxArray.map((email) => (
          <div className="item">
            <div className="item-content">
              <Box id={email} email={email} token={token} refresh={refresh} key={email.toString()} style={{width: "40rem", height: "40rem"}}/>
            </div>  
          </div>
        ))}
        <div className="item">
          <Upload email={user.email} refresh={refresh} token={token} />
        </div>
      </div>

      <Button
        onClick={showBoxModal}
        className="position-fixed bottom-0 end-0 m-5"
      >
        <h1>
          <i className="bi bi-plus-circle-fill"></i>
        </h1>
      </Button>
    </div>
  );
}
