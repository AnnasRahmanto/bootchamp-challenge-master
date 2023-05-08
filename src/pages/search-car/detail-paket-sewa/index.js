import React, { useCallback, useState, useEffect } from "react";
import vectorDwn from "../../../assets/images/fi_chevron-down.png";
import CalendarIcon from "../../../assets/images/fi_calendar.png";
import Clock from "../../../assets/images/fi_clock.png";
import User from "../../../assets/images/fi_users.png";
import { useNavigate, useParams } from "react-router-dom";
import { fetchApi } from "../../../config/services";
import { Button, Spinner } from "react-bootstrap";
import Calendar from "../../../component/Calendar";
import { Token } from "../../../config/token";

const carSize = {
  small: "2 - 4 orang",
  medium: "4 - 6 orang",
  large: " 6 - 8 orang",
};

const DetailCar = (props) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState("idle");
  const [date, setDate] = useState()
  const navigate = useNavigate()
   
 
    
    
  // console.log(date);
  const handleClick = () => {
    !Token ? navigate("/login") : navigate("/payment")
  }
  


  const { id } = useParams();
  const fetchingCar = useCallback(
    (params = null) => {
      setLoader("fetching");
      fetchApi(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`,
        params
      )
        .then((result) => {
          setData(result.data);
          setLoader("resolve");
        })
        .catch((e) => {
          setLoader("reject");
        });
    },
    [id]
  );

  useEffect(() => {
    fetchingCar();
  }, [fetchingCar]);

  const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  return (
    <div>
      <div
        className="container-fluid"
        style={{ background: "#F1F3FF", height: "180px" }}
      ></div>
      <div className="container position-relative" style={{ bottom: "50px" }}>
        <div className=" card border shadow border-2 rounded-3">
          <span className="card-title p-text px-5 pt-3">Pencarianmu</span>
          <div className="row p-3 text-center">
            <div className="col">
              <div className="d-inline-flex flex-column">
                <span className="text-detail p-2 text-detail p-2 text-start">
                  Nama Mobil
                </span>
                <div className="d-inline-flex flex-row shadow bg-detail">
                  <div className="p-1">
                    <input
                      disabled={true}
                      type="text"
                      name="todoListName"
                      className="bg-detail border border-0"
                    />
                  </div>
                  <div className="p-1">
                    <input
                      disabled={true}
                      type="image"
                      src={vectorDwn}
                      className="px-1 border border-0"
                      alt="pict"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-inline-flex flex-column">
                <span className="text-detail p-2 text-detail p-2 text-start">
                  Kategori
                </span>
                <div className="d-inline-flex flex-row shadow bg-detail">
                  <div className="p-1">
                    <input
                      disabled={true}
                      type="text"
                      name="todoListName"
                      className="border border-0 bg-detail"
                    />
                  </div>
                  <div className="p-1">
                    <input
                      disabled={true}
                      type="image"
                      src={CalendarIcon}
                      alt="..."
                      className="px-1 dropbtn border border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-inline-flex flex-column">
                <span className="text-detail p-2 text-detail p-2 text-start">
                  Harga Sewa per Hari
                </span>
                <div className="d-inline-flex flex-row shadow bg-detail">
                  <div className="p-1">
                    <input
                      disabled={true}
                      type="text"
                      name="todoListName"
                      className="border border-0 bg-detail"
                    />
                  </div>
                  <div className="p-1">
                    <input
                      type="image"
                      src={Clock}
                      alt="..."
                      className="px-1 dropbtn border border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-inline-flex flex-column">
                <span className="text-detail p-2 text-detail p-2 text-start">
                  Status
                </span>
                <div className="d-inline-flex flex-row shadow bg-detail">
                  <div className="p-1">
                    <input
                      disabled={true}
                      type="text"
                      name="todoListName"
                      className="border border-0 bg-detail"
                    />
                  </div>
                  <div className="p-1">
                    <input
                      type="image"
                      src={User}
                      alt="..."
                      className="px-1 dropbtn border border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loader !== "resolve" && (
          <div className="text-center w-100">
            <Spinner variant="primary" size="md" />
          </div>
        )}
        {loader === "resolve" && (
          <div className="row gap-3">
            <div className="col-8 py-4">
              <div className="card shadow">
                <div className="card-body">
                  <p className="p-text">Tentang Paket</p>
                  <div className="d-flex flex-column">
                    <div className="py-2">
                      <span className="p-2 p-text">Include</span>
                      <ul className="text-detail-li">
                        <li>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                      </ul>
                    </div>
                    <div className="p-2">
                      <span className="p-text">Exclude</span>
                      <ul className="text-detail-li">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                    <div className="p-2">
                      <span className="p-text">
                        Refund, Reschedule, Overtime
                      </span>
                      <ul className="text-detail-li">
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col py-4">
              <div className="card shadow">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <img
                      src={data?.image}
                      className="img-fluid py-5"
                      alt="Pict_alt"
                    />
                  </div>
                  <span className="p-text px-2">{data?.name}</span>
                  <div className="d-flex">
                    <div className="mx-2">
                      <img
                        src={User}
                        className="img-fluid mb-2"
                        alt="Pict-alt"
                      />
                    </div>

                    <div className="p-text-10 py-1">
                      {carSize[data?.category]}
                    </div>
                  </div>
                  <div>
                    <Calendar
                      onChange={setDate}
                      name="startDate"
                      value={date}
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">Total</div>
                    <div className="p-2 p-text">
                      {formatNumber(data?.price)}
                    </div>
                  </div>
                  <div className="vstack align-self-end">
                    <Button
                      variant="success"
                      disabled={!date}
                      onClick={() =>
                        !Token ? navigate("/login") : navigate("/payment")
                      }
                    >
                      Lanjutkan Pembayaran
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailCar;
