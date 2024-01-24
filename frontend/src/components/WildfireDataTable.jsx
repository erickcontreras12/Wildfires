import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import OhNoModal from "./OhNoModal";

const columns = [
  { field: "country", headerName: "Country", width: 230 },
  { field: "name", headerName: "Wildfire Title", width: 550 },
];

export const WildfireDataTable = ({ isLoading, wildfireData, clicked, setClicked }) => {
  const [openModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
      // validate if there are wildfires for the search made after loading has finished
      if (!isLoading && clicked) {
        // for empty data display "oh no" message
        if (wildfireData.length === 0) {
          setOpenModal(true);
        }
        setRows(wildfireData);
        setClicked(false)
      }
  }, [clicked, isLoading, wildfireData]);

  return (
    <div style={{ height: "91%", width: "100%" }}>
      <OhNoModal openModal={openModal} setOpenModal={setOpenModal} />
      <h2>List of Wildfires</h2>
      <DataGrid
        getRowId={(row) => row.name}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 30]}
      />
    </div>
  );
};

export default WildfireDataTable;
