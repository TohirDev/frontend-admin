import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
interface IModalProps extends Omit<DialogProps, "onClose"> {
  onClose: VoidFunction;
  open: boolean;
  width: number;
}
export const AddElon = ({
  onClose,
  open,
  width,
  ...props
}: IModalProps) => {
  return (
    <Dialog
      open={open}
      PaperProps={{
        ...props.PaperProps,
        sx: { width },
      }}
    >
      <DialogTitle sx={{ borderBottom: "1px solid #F1F5F9" }}>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Typography variant="body2">title</Typography>
          <IconButton onClick={onClose}>"close"</IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ p: 2 }}>heloo</DialogContent>
      <DialogActions sx={{ borderTop: "1px solid #F1F5F9" }}>
        <Stack sx={{ flexDirection: { md: "row", sm: "column" } }} gap={2}>
          <Button color="inherit" variant="contained" fullWidth>
            Close
          </Button>
          <Button variant="contained" fullWidth>
            Done
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};
