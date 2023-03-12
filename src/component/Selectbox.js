import React from "react";

const placeholderStyle = {
  color: "#8A8A8A",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "18px",
};

const SelectBox = ({ label = "", title = "", data = [], ...props }) => {
  return (
    <div className="form-group" style={{ width: "14rem" }}>
      <label className="text-detail">{label}</label>
      <select
        {...props}
        className="text-detail form-control p-2"
        placeholder=""
        id="inputGroupSelect01"
        style={placeholderStyle}
      >
        <option className="text-detail" selected value={""} disabled>
          {title}
        </option>
        {data.map((item, index) => (
          <option className="text-detail" key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
