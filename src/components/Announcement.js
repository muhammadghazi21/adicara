import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

export const Announcement = () => {
  const [response, setResponse] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BASE_URL}/api/user`, {
  //       params: {},
  //     })
  //     .then((result) => {
  //       console.log("datas => ", result.data.data);
  //       setResponse(result.data.data);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:3004/EO").then((result) => {
      console.log("datas => ", result.data);
      setResponse(result.data);
    });
  }, []);

  const TableRow = (props) => {
    const { sieId, sieName, dl, info } = props;
    while (sieId <= 5) {
      return (
        <tr>
          <td>{sieId}</td>
          <td className="fw-bold">{sieName}</td>
          <td>{dl}</td>
          <td>{info ? info : "--"}</td>
          <td>
            <Button
              onClick={() => {
                navigate(`kanban`);
              }}
              variant="dark"
            >
              look
            </Button>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="content tablemember">
      <Card border="light" className="shadow-sm mb-4">
        <Card.Body className="pb-0">
          <Table responsive className="table-centered table-nowrap rounded mb-0">
            <thead className="thead-light">
              <tr>
                <th className="border-0">No</th>
                <th className="border-0">Jobdesk</th>
                <th className="border-0">Deadline</th>
                <th className="border-0">Task</th>
                <th className="border-0">function</th>
              </tr>
            </thead>
            <tbody>
              {response.map((data) => {
                return <TableRow key={`data-${data.id}`} {...data} />;
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Announcement;
