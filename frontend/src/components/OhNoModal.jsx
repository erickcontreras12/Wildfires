import { Box, Icon, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export const OhNoModal = ({ openModal, setOpenModal }) => {
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Icon>local_fire_department</Icon> Oh No!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This month did not have any wildfires ending
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default OhNoModal;
