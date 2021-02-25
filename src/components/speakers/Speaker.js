import React, { useState } from "react";

const Speaker = () => {
  const [user, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await this.get("http://localhost:4000");

    setBooks(response.data);
  };

  return (
    <>
      <div>

	  </div>
    </>
  );
};

export default Speaker;
