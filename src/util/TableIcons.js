import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SearchIcon from "@material-ui/icons/Search";

export const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),

  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),

  Clear: forwardRef((props, ref) => null),

  Delete: forwardRef((props, ref) => <DeleteIcon {...props} ref={ref} />),

  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),

  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),

  Filter: forwardRef((props, ref) => null),

  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),

  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),

  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),

  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),

  ResetSearch: forwardRef((props, ref) => null),

  Search: forwardRef((props, ref) => (
    <SearchIcon fontSize="large" {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),

  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),

  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
