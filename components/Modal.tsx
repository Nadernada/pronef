import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
  title: string
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  isOpen,
  title,
}) => {


  return (
    <Dialog
      onClose={onClose}
      open={isOpen}
      sx={{
        minWidth: 400,
        '& .MuiPaper-root': {
          width: 400,
          borderRadius: 5,
        }
      }}
    >
      <DialogTitle className='text-center font-bold'>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal