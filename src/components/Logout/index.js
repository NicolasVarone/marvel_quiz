import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import ReactTooltip from "react-tooltip";

const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      console.log("Déconnexion");
      firebase.signoutUser();
    }
  }, [checked, firebase]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider round" data-tip="Log out"></span>
      </label>
      <ReactTooltip place="left" effect="solid" />
    </div>
  );
};

export default Logout;
