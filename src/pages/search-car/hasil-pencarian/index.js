import React, { useCallback, useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { fetchApi } from "../../../config/services.js";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Input from "../../../component/Input.js";
import SelectBox from "../../../component/Selectbox.js";




const HasilPencarian = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const hasilData = location.state;

  

  const fetchingCar = useCallback((params = null) => {
    //setloader("fetching");
    fetchApi("https://bootcamp-rent-cars.herokuapp.com/customer/car", params)
      .then((result) => {
        setData(result.data)
        // setData(result.data);
        //setloader("resolve");
    })
    .catch((e) => {
        //setloader("reject");
    });
}, []);

//console.log(data);
  useEffect(() => {
    fetchingCar();
  }, [fetchingCar]);

  const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

//   console.log(hasilData);
// console.log(data)
  return (
    <div>
      <div
        className="container-fluid"
        style={{ background: "#F1F3FF", height: "180px" }}
      ></div>
      <div className="container position-relative" style={{ bottom: "50px" }}>
        <div className="card shadow">
          <div className="card-body">
            <form>
              <div className="row row-cols-1 row-cols-md-1 row-cols-lg-5">
                <div className="col text-center text-md-start">
                  <Input
                    // onFocus={() => {
                    //   setBackDrop(true);
                    // }}
                    // onChange={handleChange}
                    placeholder={hasilData.carName}
                    className="form-control text-detail"
                    name="carName"
                    label={"Nama Mobil"}
                  />
                </div>
                <div className="col text-center text-md-start">
                  <SelectBox
                    // onFocus={() => {
                    //   setBackDrop(true);
                    // }}
                    // onChange={handleChange}
                    name="kapasitas"
                    title={hasilData.kapasitas}
                    label="Kategori"
                  />
                </div>
                <div className="col text-center text-md-start">
                  <SelectBox
                    // onFocus={() => {
                    //   setBackDrop(true);
                    // }}
                    // onChange={handleChange}
                    name="harga"
                    title={hasilData.harga}
                    label="Harga Sewa"
                  />
                </div>
                <div className="col text-center text-md-start">
                  <SelectBox
                    // onFocus={() => {
                    //   setBackDrop(true);
                    // }}
                    // onChange={handleChange}
                    name="status"
                    title={hasilData.status}
                    label="Status"
                  />
                </div>
                <div className="col d-flex align-items-end">
                  <button
                    type="submit"
                    className="btn btn-outline-primary ms-5"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">

      <Row xs={1} md={2} lg={3} className="g-4">
            {
                data.map((item, index) => {
                    return (
                      <Col>
                        <div
                          className="card shadow h-100"
                        >
                          <img
                            src={item.image}
                            alt="Pict_alt"
                            className="card-img-top px-3 py-3 h-100"
                          />
                          <div className="card-body">
                            <div className="card-title">
                              <h5 className="p-text-testi-footer">
                                {item.name}
                              </h5>
                            </div>
                            <p className="p-text-16">
                              {formatNumber(item.price)} / Hari
                            </p>
                            <p className="p-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                          <div
                            className="card-footer border border-0 pb-3"
                            style={{ background: "white" }}
                          >
                            <div className="vstack align-self-end">
                              <Button
                                onClick={() =>
                                  navigate(`/cari-mobil/${item.id}`)
                                }
                                type="button"
                                variant="success"
                              >
                                Pilih Mobil
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                })
            }
      </Row>
      </div>
    </div>
  );
};

export default HasilPencarian;
