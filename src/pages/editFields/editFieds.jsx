import React, { useState } from "react";
import Icon from "../../img/star.svg";
import EditFieds1 from "../../components/EditFieds1/EditFieds1";
import EditFieds2 from "../../components/EditFieds2/EditFieds2";

function EditFieds() {
  const [page, setPage] = useState(1);

  return (
    <div className="my-[80px] md:my-[90px] xl:px-5 lg:px-4 px-3">
      {page === 1 && <EditFieds1 page={page} setPage={setPage} />}
      {page === 2 && <EditFieds2 page={page} setPage={setPage} />}
    </div>
  );
}

export default EditFieds;
