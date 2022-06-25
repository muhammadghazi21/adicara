import React, { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Nav, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

export const Member = () => {
  const [response, setResponse] = useState([]);

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
    axios.get("http://localhost:3004/user").then((result) => {
      console.log("datas => ", result.data);
      setResponse(result.data);
    });
  }, []);

  const TableRow = (props) => {
    const { id, name, email, job } = props;

    return (
      <tr>
        <td>{id}</td>
        <td className="fw-bold">{name}</td>
        <td>{email}</td>
        <td>{job ? job : "--"}</td>
      </tr>
    );
  };

  return (
    <div className="content tablemember">
      <Card border="light" className="shadow-sm mb-4">
        <Card.Body className="pb-0">
          <Table responsive className="table-centered table-nowrap rounded mb-0">
            <thead className="thead-light">
              <tr>
                <th className="border-0">No</th>
                <th className="border-0">Name</th>
                <th className="border-0">Email</th>
                <th className="border-0">Jobdesk</th>
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

export default Member;
