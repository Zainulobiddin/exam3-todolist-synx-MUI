import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./todolist.css";
import { Fragment, useContext, useState } from "react";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import avatar5 from "@/assets/avatar5.png";
import avatar6 from "@/assets/avatar6.png";
import avatar7 from "@/assets/avatar7.png";
import avatar8 from "@/assets/avatar8.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DarkContext } from "@/context/theme-context";

export default function Todolist() {
  const { theme, setTheme } = useContext(DarkContext);

  const [users, setUsers] = useState([
    {
      id: 1,
      src: avatar1,
      name: "Jacob Jones",
      email: "jackson.graham@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88888 0090",
    },
    {
      id: 2,
      src: avatar2,
      name: "Jenny Wilson",
      email: "jessica.hanson@example.com",
      city: "Kulob",
      status: true,
      phone: "88888 0090",
    },
    {
      id: 3,
      src: avatar3,
      name: "Guy Hawkins",
      email: "bill.sanders@example.com",
      city: "Bokhtar",
      status: false,
      phone: "88888 0090",
    },
    {
      id: 4,
      src: avatar4,
      name: "Cody Fisher",
      email: "jackson.graham@example.com",
      city: "Khujand",
      status: true,
      phone: "88888 0090",
    },
    {
      id: 5,
      src: avatar5,
      name: "Esther Howard",
      email: "jhone.graham@example.com",
      city: "Dushanbe",
      status: false,
      phone: "88888 0090",
    },
    {
      id: 6,
      src: avatar6,
      name: "Kristin Watson",
      email: "watson.graham@example.com",
      city: "Dushanbe",
      status: true,
      phone: "88888 0090",
    },
    {
      id: 7,
      src: avatar7,
      name: "Dianne Russell",
      email: "russell.graham@example.com",
      city: "Hisor",
      status: false,
      phone: "88888 0090",
    },
    {
      id: 8,
      src: avatar8,
      name: "Ronald Richards",
      email: "ronald.graham@example.com",
      city: "Dushanbe",
      status: true,
      phone: "88888 0090",
    },
  ]);

  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const [addImage, setAddImage] = useState("");
  const [addName, setAddName] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addStatus, setAddStatus] = useState("");
  const [addCity, setAddCity] = useState("");
  const [addPhone, setAddPhone] = useState("");
  const [selecteduser, setSelectedUser] = useState(null);

  const [editImage, setEditImage] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [idx, setIdx] = useState(null);

  // function handledelete
  function handledelete(selecteduser) {
    deleteUser(selecteduser.id);
  }
  // function deleteUser
  function deleteUser(id) {
    setUsers(users.filter((user) => user.id != id));
  }

  // functoinhandleSave
  function handleSave() {
    addUser();
    handleClose();
  }

  // function addUser
  function addUser() {
    let addNewUser = {
      src: addImage,
      name: addName,
      email: addEmail,
      city: addCity,
      status: addStatus === "true",
      phone: addPhone,
    };

    setUsers([...users, addNewUser]);
  }
  // function add modal
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ------------------------

  // function edit modal

  const [openEdit, setOpenEdit] = useState(false);
  const handleClickOpenEdit = (selecteduser) => {
    setOpenEdit(true);
    setEditEmail(selecteduser.email);
    setEditName(selecteduser.name);
    setEditImage(selecteduser.src);
    setEditCity(selecteduser.city);
    setEditStatus(selecteduser.status);
    setEditPhone(selecteduser.phone);
    setIdx(selecteduser.id);
  };

  function handleEdit() {
    editUser();
  }
  // function editUser
  function editUser() {
    setUsers(
      users.map((user) =>
        user.id === idx
          ? {
              ...user,
              src: editImage,
              name: editName,
              email: editEmail,
              city: editCity,
              status: editCity === "true",
              phone: editPhone,
            }
          : user
      )
    );
    setOpenEdit(false);
  }
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  // ------------------------

  // function show modal
  const [openShow, setOpenShow] = useState(false);
  const handleClickOpenShow = (user) => {
    setSelectedUser(user);
    setOpenShow(true);
  };

  const handleCloseShow = () => {
    setOpenShow(false);
  };
  // ------------------------

  // info functions
  const [openInfo, setOpenInfo] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenInfo(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
        }}
      >
        <CloseIcon />
        <Typography variant="h5">Info suer</Typography>
      </Box>

      <Box className="infoUser">
        <img className="imgInfo" src={selecteduser?.src} alt="" />
        <Typography variant="h5">{selecteduser?.name}</Typography>
        <Typography>{selecteduser?.email}</Typography>
      </Box>

      <Box sx={{ borderBottom: "1px solid #ccc" }}>
        <Box className="actionParent">
          <Box className="action">
            <LockIcon />
            <Typography>City</Typography>
          </Box>
          <Typography>{selecteduser?.city}</Typography>
        </Box>

        <Box className="actionParent">
          <Box className="action">
            <WatchLaterIcon />
            <Typography>Status</Typography>
          </Box>
          <Typography>
            {selecteduser?.status ? "Active" : "InActive"}
          </Typography>
        </Box>

        <Box className="actionParent">
          <Box className="action">
            <LocalOfferIcon />
            <Typography>Phone</Typography>
          </Box>
          <Typography>{selecteduser?.phone}</Typography>
        </Box>
      </Box>

      <Box className="btn">
        <Button
          onClick={() => handleClickOpenEdit(selecteduser)}
          variant="contained"
        >
          <EditIcon /> Edit{" "}
        </Button>
        <Button
          onClick={() => handledelete(selecteduser)}
          variant="outlined"
          color="error"
        >
          <DeleteIcon /> Delete{" "}
        </Button>
      </Box>
    </Box>
  );

  return (
    <div
      style={theme ? { backgroundColor: "#f3f1f1" } : { backgroundColor: "#afafaf" }}
    >
      <Box className="header">
        <Typography variant="h4">User list</Typography>
        <Box className="header">
          <Button variant="contained" onClick={handleClickOpen}>
            + Add
          </Button>
          <Box>
            <Button variant="outlined" onClick={() => setTheme(true)}>
              {" "}
              <LightModeIcon /> Light
            </Button>
            <Button variant="outlined" onClick={() => setTheme(false)}>
              Dark <DarkModeIcon />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box 
      sx={{marginBottom: '20px'}}
      className="header">
        <Box className="header">
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={({ target }) => setStatus(target.value)}
              >
                <MenuItem value={""}>All</MenuItem>
                <MenuItem value={"true"}>Active</MenuItem>
                <MenuItem value={"false"}>InACtive</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="City"
                onChange={({ target }) => setCity(target.value)}
              >
                <MenuItem value={""}>All</MenuItem>
                <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                <MenuItem value={"Kulob"}>Kulob</MenuItem>
                <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                <MenuItem value={"Hisor"}>Hisor</MenuItem>
                <MenuItem value={"Khujand"}>Khujand</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow sx={theme ? { backgroundColor: "#ccc" } : { backgroundColor: "#1f1919" }}>
              <TableCell sx={theme ? {} : {color: 'white'}}>Name</TableCell>
              <TableCell sx={theme ? {} : {color: 'white'}} align="center">City</TableCell>
              <TableCell sx={theme ? {} : {color: 'white'}} align="center">Status</TableCell>
              <TableCell sx={theme ? {} : {color: 'white'}} align="center">Phone</TableCell>
              <TableCell sx={theme ? {} : {color: 'white'}} align="center"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={theme ? { backgroundColor: "#ccc" } : { backgroundColor: "#1f1919" }}>
            {users
              .filter((user) => user.city.includes(city))
              .filter((user) => {
                if (status == "") {
                  return true;
                } else {
                  return user.status.toString() == status;
                }
              })
              .filter((user) =>
                JSON.stringify(user)
                  .toLowerCase()
                  .includes(search.toLowerCase().trim())
              )
              .map((user) => (
                <TableRow
                  key={user.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={theme ? {} : {color: 'white'}}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <img className="imgUser" src={user.src} alt="" />
                      <Box>
                        <Typography> {user.name}</Typography>
                        <Typography> {user.email}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={theme ? {} : {color: 'white'}} align="center">{user.city}</TableCell>
                  <TableCell align="center">
                    <Typography className={user.status ? "active" : "inactive"}>
                      {user.status ? "Active" : "InActive"}
                    </Typography>
                  </TableCell>
                  <TableCell sx={theme ? {} : {color: 'white'}} align="center">{user.phone}</TableCell>
                  <TableCell sx={theme ? {} : {color: 'white'}} align="center">
                    <MoreHorizIcon onClick={() => handleClickOpenShow(user)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* add modal */}
        <Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
              {"ADD USER"}
            </DialogTitle>
            <DialogContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "35ch",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Image link"
                  variant="outlined"
                  value={addImage}
                  onChange={({ target }) => setAddImage(target.value)}
                />

                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={addName}
                  onChange={({ target }) => setAddName(target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={addEmail}
                  onChange={({ target }) => setAddEmail(target.value)}
                />
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={addStatus}
                      label="Status"
                      onChange={({ target }) => setAddStatus(target.value)}
                    >
                      <MenuItem value={"true"}>Active</MenuItem>
                      <MenuItem value={"false"}>InACtive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="City"
                      value={addCity}
                      onChange={({ target }) => setAddCity(target.value)}
                    >
                      <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                      <MenuItem value={"Kulob"}>Kulob</MenuItem>
                      <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                      <MenuItem value={"Hisor"}>Hisor</MenuItem>
                      <MenuItem value={"Khujand"}>Khujand</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  value={addPhone}
                  onChange={({ target }) => setAddPhone(target.value)}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="error"
                type="reset"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSave} autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>

        {/* show modal */}
        <Fragment>
          <Dialog
            open={openShow}
            onClose={handleCloseShow}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
              {"ADD USER"}
            </DialogTitle>
            <DialogContent>
              <Box className="divAction">
                <Box className="actions" onClick={toggleDrawer(true)}>
                  <AccountCircleIcon color="secondary" />
                  <Typography color="secondary">View profile</Typography>
                </Box>

                <Box
                  className="actions"
                  onClick={() => handleClickOpenEdit(selecteduser)}
                >
                  <EditIcon color="primary" />
                  <Typography color="primary">Edit</Typography>
                </Box>

                <Box
                  className="actions"
                  onClick={() => handledelete(selecteduser)}
                >
                  <DeleteIcon color="error" />
                  <Typography color="error">Delete</Typography>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Fragment>

        {/* edit modal */}
        <Fragment>
          <Dialog
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
              {"ADD USER"}
            </DialogTitle>
            <DialogContent>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "35ch",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Image link"
                  variant="outlined"
                  value={editImage}
                  onChange={({ target }) => setEditImage(target.value)}
                />

                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={editName}
                  onChange={({ target }) => setEditName(target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={editEmail}
                  onChange={({ target }) => setEditEmail(target.value)}
                />
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={editStatus}
                      label="Status"
                      onChange={({ target }) => setEditStatus(target.value)}
                    >
                      <MenuItem value={"true"}>Active</MenuItem>
                      <MenuItem value={"false"}>InACtive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="City"
                      value={editCity}
                      onChange={({ target }) => setEditCity(target.value)}
                    >
                      <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                      <MenuItem value={"Kulob"}>Kulob</MenuItem>
                      <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                      <MenuItem value={"Hisor"}>Hisor</MenuItem>
                      <MenuItem value={"Khujand"}>Khujand</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  value={editPhone}
                  onChange={({ target }) => setEditPhone(target.value)}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="error"
                type="reset"
                onClick={handleCloseEdit}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handleEdit} autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
        <Drawer anchor="right" open={openInfo} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </TableContainer>
    </div>
  );
}
