import React from "react";
import "./ErrorTable.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiCheck } from "react-icons/bi";

const ErrorTable = () => {
  return (
    <div className="error-container">
      <br/>
      <div className="error-card">
        <div className="error-card-title">Error Records</div>
        <div className="error-card-body">
          <Table id="error-table" responsive striped bordered hover>
            <thead>
              <tr className="halo">
                <td rowSpan={2}>No.</td>
                <td rowSpan={2}>Error</td>
                <td colSpan={7}>Date (September 2022)</td>
                <td rowSpan={2}>Temporary Solve</td>
                <td rowSpan={2}>Follow-Up</td>
              </tr>
              <tr className="halo">
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td>Nomor Rekening Tidak Dikenal </td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Nomor Rekening Tidak Dikenal </td>
                <td>Nomor Rekening Tidak Dikenal </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>2</td>
                <td>General Error </td>
                <td></td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>General Error </td>
                <td>General Error </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>3</td>
                <td>
                  io.mib.arx.is.server.gateway.exceptions.EndpointClientExce{" "}
                </td>
                <td></td>
                <td></td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  io.mib.arx.is.server.gateway.exceptions.EndpointClientExce
                </td>
                <td>
                  io.mib.arx.is.server.gateway.exceptions.EndpointClientExce{" "}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>4</td>
                <td>
                  io.mib.nio.common.exceptions.ReadResponseTimeoutException{" "}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td>
                  <BiCheck size={15} />
                </td>
                <td>
                  io.mib.nio.common.exceptions.ReadResponseTimeoutException
                </td>
                <td>
                  io.mib.nio.common.exceptions.ReadResponseTimeoutException{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ErrorTable;
