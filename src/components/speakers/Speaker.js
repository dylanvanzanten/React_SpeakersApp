import React, { useEffect, useState } from "react";

import { getUsers } from "../../api/data";

const Speaker = () => {
  const [data, setUser] = useState([]);

  useEffect(() => {
    let mounted = true;
    getUsers().then((user) => {
      if (mounted) {
        setUser(user);
      }
    });
    return () => (mounted = false);
  }, []);
  console.log(data.name);
  return (
    <>
      <div className="c-speaker">
        <div className="speaker__container">
          {data.map((data, index) => (
            <div className="speaker__content" key={index}>
              <h6>{data.name}</h6>
              <p>{data.company}</p>
              <p>{data.email}</p>
              <p>{data.website}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Speaker;
