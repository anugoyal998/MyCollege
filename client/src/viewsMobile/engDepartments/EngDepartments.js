import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllNotesAction } from "../../redux/actions/branchNotes.action";
//images
import computer from "../../img/computer.jpg";
import it from "../../img/it.jpg";
import ece from "../../img/ece.jpg";
import ee from "../../img/ee.jpg";
import mech from "../../img/mech.jpg";
import civil from "../../img/civil.jpg";
import pie from "../../img/pie.jpg";
//images
import { Link } from "react-router-dom";

//
const arr = [
  {
    title: "Computer Engineering",
    src: computer,
    idx: 0,
  },
  {
    title: "Information Technology",
    src: it,
    idx: 1,
  },
  {
    title: "Electronics and Communications",
    src: ece,
    idx: 2,
  },
  {
    title: "Electrical Engineering",
    src: ee,
    idx: 3,
  },
  {
    title: "Mechanical Engineering",
    src: mech,
    idx: 4,
  },
  {
    title: "Civil Engineering",
    src: civil,
    idx: 5,
  },
  {
    title: "Production and Industrial",
    src: pie,
    idx: 6,
  },
];
//

export const EngDepartments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_SERVER_BASE_URL2;
        const response = await axios.post(`${url}/search/all/notes`);
        dispatch(setAllNotesAction(response.data));
      } catch (err) {
        // console.log("error in all notes",err)
      }
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="custom-bg text-center pt-8" id="engDept">
      <p className="text-3xl custom-font">
        Engineering <span className="text-blue-700">Departments</span>{" "}
      </p>
      <div className="flex flex-col items-center">
        {arr.map((e, key) => {
          return <MyCard e={e} key={key} />;
        })}
      </div>
    </div>
  );
};

const MyCard = (props) => {
  const { src, title, idx } = props.e;
  return (
    <Link to={`/branch/${title}/${idx}`}>
      <div className="rounded-md m-5 zoom">
        <img src={src} className="rounded-md shadow-lg " alt="branch" />
        <p>{title}</p>
      </div>
    </Link>
  );
};
