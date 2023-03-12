import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../component/Input.js";
import SelectBox from "../../component/Selectbox.js";
import { fetchApi } from "../../config/services.js";

const categoryData = [
  {
    value: "small",
    label: "2-4 orang",
  },
  {
    value: "medium",
    label: "4-6 orang",
  },
  {
    value: "large",
    label: "6-8 orang",
  },
];

const priceData = [
  {
    value: 400000,
    label: "< Rp. 400.000",
  },
  {
    value: 6000000,
    label: "Rp. 400.000 - Rp. 600.000",
  },
  {
    value: 400000,
    label: "> Rp. 400.000",
  },
];

const statusData = [
  {
    value: true,
    label: "Disewa",
  },
  {
    value: false,
    label: "Tidak Disewa",
  },
];

const SearchCar = (props) => {
  const [value, setValue] = useState({
    carName: "",
    kapasitas: "",
    harga: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const [backDrop, setBackDrop] = useState(false);
  const [data, setData] = useState([]);
  const [loader, setloader] = useState("resolve");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchingCar({
      name: value.carName,
      catgory: value.kapasitas,
      isRented: value.status,
      minPrice: value.harga,
      maxPrice: value.harga,
    });
    setBackDrop(false);
    //console.log(value)
  };
  // const x = data.filter((item) => item.category === value.kapasitas)
  // console.log(x);
  //console.log(data.includes(value.carName))
  document.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      setBackDrop(false);
    }
  });
  const fetchingCar = useCallback((params = null) => {
    //setloader("fetching");
    fetchApi("https://bootcamp-rent-cars.herokuapp.com/customer/car", params)
      .then((result) => {
        setData(result.data);
        //setloader("resolve");
      })
      .catch((e) => {
        //setloader("reject");
      });
  }, []);

  useEffect(() => {
    //fetchingCar();
  }, [fetchingCar]);

  const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  return (
    <div>
      <div>
        {backDrop && <div id="back" className="back-drop"></div>}
        <div
          className="container position-absolute start-50 translate-middle"
          style={{ top: "610px" }}
        >
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-5">
                  <div className="col text-center text-md-start">
                    <Input
                      onFocus={() => {
                        setBackDrop(true);
                      }}
                      onChange={handleChange}
                      placeholder="Ketik Nama/Tipe Mobil"
                      className="form-control text-detail"
                      name="carName"
                      label={"Nama Mobil"}
                    />
                  </div>
                  <div className="col text-center text-md-start">
                    <SelectBox
                      onFocus={() => {
                        setBackDrop(true);
                      }}
                      onChange={handleChange}
                      name="kapasitas"
                      title="Masukan Kapasitas Mobil"
                      label="Kategori"
                      data={categoryData}
                    />
                  </div>
                  <div className="col text-center text-md-start">
                    <SelectBox
                      onFocus={() => {
                        setBackDrop(true);
                      }}
                      onChange={handleChange}
                      name="harga"
                      title="Masukan Harga Sewa"
                      label="Harga Sewa"
                      data={priceData}
                    />
                  </div>
                  <div className="col text-center text-md-start">
                    <SelectBox
                      onFocus={() => {
                        setBackDrop(true);
                      }}
                      onChange={handleChange}
                      name="status"
                      title="Masukan Status Mobil"
                      label="Status"
                      data={statusData}
                    />
                  </div>
                  <div className="col d-flex align-items-end">
                    <Link to="/hasil-pencarian/" state={value}>
                      <button type="submit" className="btn btn-success ms-5">
                        Cari Mobil
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>.
        </div>
      </div>
      {/* <div className="container pb-5">
        {loader !== "resolve" && (
          <div className="text-center w-100">
            <Spinner variant="primary" size="md" />
          </div>
        )}
        {loader === "resolve" && (
          <Row xs={1} md={2} lg={3} className="g-4">
            {data.map((item, index) => {
              //console.log(item)
              return (
                <Col>
                  <div className="card shadow h-100" style={{ top: "100px" }}>
                    <img
                      src={item.image}
                      alt="Pict_alt"
                      className="card-img-top px-3 py-3 h-100"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h5 className="p-text-testi-footer">{item.name}</h5>
                      </div>
                      <p className="p-text-16">
                        {formatNumber(item.price)} / Hari
                      </p>
                      <p className="p-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div
                      className="card-footer border border-0 pb-3"
                      style={{ background: "white" }}
                    >
                      <div className="vstack align-self-end">
                        <Button
                          onClick={() => navigate(`/cari-mobil/${item.id}`)}
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
            })}
          </Row>
        )}
      </div>. */}
    </div>
  );
};

export default SearchCar;
