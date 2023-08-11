import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({ children, isModalOpen, closeModal, title }) => {

  return (
    <div className=''>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="responsive-dialog-title"
        className="p-10 m-8"
        fullWidth
        TransitionComponent={Transition}
      >
        <DialogActions
          className='w-full'
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <DialogTitle > <span className='text-[14px] font-[600] text-[#000]'>{title}</span>
          </DialogTitle>
          <Button color="error" onClick={closeModal} autoFocus
          >
            <Close />
          </Button>
        </DialogActions>

        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomModal;
