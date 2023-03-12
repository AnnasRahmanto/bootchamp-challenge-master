import React from "react";
import Testimonial from "../../component/Testimonial";
import Image from "../../assets/images/img_service.png";
import Tick from "../../assets/images/Group53.png";
import IconComplete from "../../assets/images/icon_complete.png";
import IconPrice from "../../assets/images/icon_price.png";
import IconHrs from "../../assets/images/icon_24hrs.png";
import IconProfessional from "../../assets/images/icon_professional.png";
import VectorDown from "../../assets/images/Vector.png";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  // console.log(window.location)
  return (
    <>
      <section className="container" id="our_services">
        <div className="row p-5">
          <div className="col-lg px-5">
            <img src={Image} className="img-fluid" alt="pict-alt" />
          </div>
          <div className="col-lg py-5">
            <div className="p-text-header">
              Best Car Rental for any kind of trip in (Lokasimu) !
            </div>
            <p className="p-text">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain,kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="d-flex flex-row">
              <div className="p-1">
                <img src={Tick} className="img-fluid" alt="pict-alt" />
              </div>
              <div className="p-2 p-text">
                Sewa Mobil Dengan Sopir di Bali 12 Jam
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-1">
                <img src={Tick} className="img-fluid" alt="pict-alt" />
              </div>
              <div className="p-2 p-text">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-1">
                <img src={Tick} className="img-fluid" alt="pict-alt" />
              </div>
              <div className="p-2 p-text">
                Sewa Mobil Jangka Panjang Bulanan
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-1">
                <img src={Tick} className="img-fluid" alt="pict-alt" />
              </div>
              <div className="p-2 p-text">Gratis Antar - Jemput di Bandara</div>
            </div>
            <div className="d-flex flex-row">
              <div className="p-1">
                <img src={Tick} className="img-fluid" alt="pict-alt" />
              </div>
              <div className="p-2 p-text">
                Layanan Airport Transfer / Drop In Out
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5" id="why_us">
        <div className="py-3 text-center text-md-start">
          <div className="py-3 p-text-header">Why US</div>
          <div className="pb-4 p-text">
            Mengapa harus pilih Binar Car Rental?
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 p-2">
              <div className="card-body">
                <img src={IconComplete} className="img-fluid" alt="pict-alt" />
                <p className="card-title mt-3 p-text-16">Mobil Lengkap</p>
                <p className="card-text p-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 p-2">
              <div className="card-body">
                <img src={IconPrice} className="img-fluid" alt="pict-alt" />
                <p className="card-title mt-3 p-text-16">Harga Murah</p>
                <p className="card-text p-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 p-2">
              <div className="card-body">
                <img src={IconHrs} className="img-fluid" alt="pict-alt" />
                <p className="card-title mt-3 p-text-16">Layanan 24 Jam</p>
                <p className="card-text p-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 p-2">
              <div className="card-body">
                <img
                  src={IconProfessional}
                  className="img-fluid"
                  alt="pict-alt"
                />
                <p className="card-title mt-3 p-text-16">Sopir Profesional</p>
                <p className="card-text p-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Testimonial />
      </div>

      <section className="container py-5">
        <div className="d-flex justify-content-center">
          <div className="card w-100 text-center">
            <div className="bg-color-blue card-body">
              <h2 className="card-title text-header-action pt-5 pb-4">
                Sewa Mobil di (Lokasimu) Sekarang
              </h2>
              <p className="text-action pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                dolor
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="btn btn-success btn-sm mb-5"
                onClick={() => navigate("/cari-mobil")}
              >
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5" id="FAQ">
        <div className="row">
          <div className="col-sm text-center text-md-start">
            <p className="p-text-24">Frequently Asked Question</p>
            <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col col-sm">
            <div className="d-flex flex-row justify-content-between border rounded mb-3">
              <div className="p-3 p-text">Apa saja syarat yang dibutuhkan?</div>
              <div className="p-3 pe-3">
                <input type="image" src={VectorDown} alt="Submit" />
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between border rounded mb-3">
              <div className="p-3 p-text">
                Berapa hari minimal sewa mobil lepas kunci?
              </div>
              <div className="p-3 pe-3">
                <input type="image" src={VectorDown} alt="Submit" />
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between border rounded mb-3">
              <div className="p-3 p-text">
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </div>
              <div className="p-3 pe-3">
                <input type="image" src={VectorDown} alt="Submit" />
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between border rounded mb-3">
              <div className="p-3 p-text">Apakah Ada biaya antar-jemput?</div>
              <div className="p-3 pe-3">
                <input type="image" src={VectorDown} alt="Submit" />
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between border rounded mb-3">
              <div className="p-3 p-text">
                Bagaimana jika terjadi kecelakaan
              </div>
              <div className="p-3 pe-3">
                <input type="image" src={VectorDown} alt="Submit" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
