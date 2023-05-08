import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import SearchCar from "../pages/search-car";
import DetailCar from "../pages/search-car/detail-paket-sewa";
import HasilPencarian from "../pages/search-car/hasil-pencarian";
import Payment from "../pages/payment";


const router = (props) => {
  return [
    { index: true, path: "/", element: <Home {...props} title="Home" /> },

    {
      index: true,
      path: "/cari-mobil",
      element: <SearchCar {...props} title="Cari Mobil" />,
    },
    {
      index: true,
      path: "/cari-mobil/:id",
      element: <DetailCar {...props} title="Cari Mobil" />,
    },
    {
      index: true,
      path: "/hasil-pencarian/",
      element: <HasilPencarian {...props} title="Hasil Pencarian" />,
    },
    {
      index: true,
      path: "/payment",
      element: <Payment {...props} title="Payment" />,
    },
    { index: true, path: "*", element: <div>Halaman Not Found</div> },
  ];
};

const PublicRoutes = (props) => {
  const routes = useRoutes(router(props));
  return routes;
};

export default PublicRoutes;
