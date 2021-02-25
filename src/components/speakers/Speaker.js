
import data from "../../api/db.json"

const Speaker = (user) => {

  return (
    <>
      <div>{user.name}</div>
      <div>
        <img alt={user.name} src={user.avatar} />
      </div>
      <div>{user.email}</div>
    </>
  );
};


export default Speaker;
