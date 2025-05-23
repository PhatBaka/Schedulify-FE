import * as React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import { visuallyHidden } from "@mui/utils";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  CLASSGROUP_STRING_TYPE,
  ICommonOption,
  MAIN_SESSION_TRANSLATOR,
} from "@/utils/constants";
import { KeyedMutator } from "swr";
import { IClassTableData } from "../_libs/constants";
import AddClassModal from "./add_class";
import DeleteClassModal from "./delete_class";
import UpdateClassModal from "./update_class";
import { useRouter } from "next/navigation";
import ImportClassSelectModal from "./import_classes";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}
type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
  id: keyof IClassTableData;
  label: string;
  centered: boolean;
}
const headCells: readonly HeadCell[] = [
  {
    id: "id" as keyof IClassTableData,
    label: "STT",
    centered: false,
  },
  {
    id: "className" as keyof IClassTableData,
    label: "Tên lớp",
    centered: false,
  },
  {
    id: "grade" as keyof IClassTableData,
    label: "Tên khối",
    centered: true,
  },
  {
    id: "room" as keyof IClassTableData,
    label: "Phòng học mặc định",
    centered: true,
  },
  {
    id: "homeroomTeacherName" as keyof IClassTableData,
    label: "GVCN",
    centered: false,
  },
  {
    id: "schoolYear" as keyof IClassTableData,
    label: "Năm học",
    centered: true,
  },
  {
    id: "mainSession" as keyof IClassTableData,
    label: "Buổi chính khóa",
    centered: true,
  },
];
interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IClassTableData
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IClassTableData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.centered ? "center" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {headCell.id === "className" ? (
              <span>{headCell.label}</span>
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(
                  headCell.id as keyof IClassTableData
                )}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
        <TableCell>
          <h2 className="font-semibold text-white"></h2>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
interface IClassTableProps {
  classTableData: IClassTableData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalRows?: number;
  mutate: KeyedMutator<any>;
  isFilterable: boolean;
  setIsFilterable: React.Dispatch<React.SetStateAction<boolean>>;
  selectedGrade: number | null;
}

const dropdownOptions: ICommonOption[] = [
  { img: "/images/icons/compose.png", title: "Chỉnh sửa thông tin" },
  { img: "/images/icons/delete.png", title: "Xóa lớp học" },
];

const ClassTable = (props: IClassTableProps) => {
  const {
    classTableData,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalRows,
    mutate,
    isFilterable,
    setIsFilterable,
    selectedGrade,
  } = props;
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof IClassTableData>("className");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openAddForm, setOpenAddForm] = React.useState<boolean>(false);
  const [openImportForm, setOpenImportForm] = React.useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState<boolean>(false);
  const [selectedRow, setSelectedRow] = React.useState<
    IClassTableData | undefined
  >();
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleRowClick = (classId: number) => {
    router.push(`/class-management/detail?id=${classId}`);
  };

  const handleFilterable = () => {
    setIsFilterable(!isFilterable);
    mutate();
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    row: IClassTableData
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IClassTableData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleMenuItemClick = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    switch (index) {
      case 0:
        setOpenUpdateModal(true);
        break;
      case 1:
        setOpenDeleteModal(true);
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
  };

  const visibleRows = React.useMemo(() => {
    let filteredData = [...classTableData];
    if (selectedGrade !== null) {
      filteredData = classTableData.filter(
        (row) => row.grade === selectedGrade
      );
    }
    return filteredData.sort(getComparator(order, orderBy));
  }, [order, orderBy, classTableData, selectedGrade]);

  const emptyRows =
    classTableData.length < rowsPerPage && rowsPerPage < 10
      ? rowsPerPage - classTableData.length + 1
      : 0;

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenAddForm = () => setOpenAddForm(true);
  const handleOpenInportForm = () => setOpenImportForm(true);

  return (
    <div className="w-[79%] h-fit flex flex-row justify-center items-center gap-6 pt-[2vh]">
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <Toolbar
            sx={[
              {
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                width: "100%",
              },
            ]}
          >
            <h2 className="text-title-medium-strong font-semibold w-full text-left">
              Lớp đơn
            </h2>
            <Tooltip title="Thêm lớp học">
              <IconButton onClick={handleOpenAddForm}>
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Nhập lớp học">
              <IconButton onClick={handleOpenInportForm}>
                <FileUploadOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Lọc danh sách">
              <IconButton onClick={handleFilterable}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>

          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={classTableData.length}
              />
              <TableBody>
                {visibleRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      <h1 className="text-body-large-strong italic text-basic-gray">
                        {selectedGrade !== null
                          ? `Lớp học chưa có dữ liệu ${
                              CLASSGROUP_STRING_TYPE.find(
                                (item) => item.value === selectedGrade
                              )?.key
                            }`
                          : "Lớp học chưa có dữ liệu"}
                      </h1>
                    </TableCell>
                  </TableRow>
                )}
                {visibleRows.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={() => handleRowClick(row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="left"
                      >
                        {index + 1 + page * rowsPerPage}
                      </TableCell>
                      <TableCell align="left">{row.className}</TableCell>
                      <TableCell align="center">
                        {row.grade > 0
                          ? CLASSGROUP_STRING_TYPE.find(
                              (item) => item.value === row.grade
                            )?.key
                          : "-"}
                      </TableCell>
                      <TableCell align="center">{row.room}</TableCell>
                      <TableCell align="left">
                        {row.homeroomTeacherName}
                      </TableCell>
                      <TableCell align="center">{row.schoolYear}</TableCell>
                      <TableCell align="center">
                        {MAIN_SESSION_TRANSLATOR[row.mainSession]}
                      </TableCell>

                      <TableCell
                        width={80}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IconButton
                          color="success"
                          sx={{ zIndex: 10 }}
                          id="basic-button"
                          aria-controls={
                            open ? `basic-menu${index}` : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={(event) => handleClick(event, row)}
                        >
                          <Image
                            src="/images/icons/menu.png"
                            alt="notification-icon"
                            unoptimized={true}
                            width={20}
                            height={20}
                          />
                        </IconButton>

                        <Menu
                          id={`basic-menu${index}`}
                          anchorEl={anchorEl}
                          elevation={1}
                          open={Boolean(anchorEl) && selectedRow === row}
                          onClose={handleMenuClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          {dropdownOptions.map((option, index) => (
                            <MenuItem
                              key={option.title}
                              onClick={(e) => handleMenuItemClick(index, e)}
                              className={`flex flex-row items-center ${
                                index === dropdownOptions.length - 1 &&
                                "hover:bg-basic-negative-hover hover:text-basic-negative"
                              }`}
                            >
                              <Image
                                className="mr-4"
                                src={option.img}
                                alt={option.title}
                                width={15}
                                height={15}
                              />
                              <h2 className="text-body-medium">
                                {option.title}
                              </h2>
                            </MenuItem>
                          ))}
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}

                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 50 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={8} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            labelRowsPerPage="Số hàng"
            labelDisplayedRows={({ from, to, count }) =>
              `${from} - ${to} của ${count !== -1 ? count : `hơn ${to}`}`
            }
            count={totalRows ?? classTableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <AddClassModal
            open={openAddForm}
            onClose={setOpenAddForm}
            mutate={mutate}
          />

          <ImportClassSelectModal
            open={openImportForm}
            onClose={setOpenImportForm}
            mutate={mutate}
          />
          <DeleteClassModal
            open={openDeleteModal}
            onClose={setOpenDeleteModal}
            className={selectedRow?.className ?? "Không xác định"}
            classId={selectedRow?.id ?? 0}
            mutate={mutate}
          />
          <UpdateClassModal
            open={openUpdateModal}
            onClose={setOpenUpdateModal}
            classId={selectedRow?.id ?? 0}
            mutate={mutate}
          />
        </Paper>
      </Box>
    </div>
  );
};
export default ClassTable;
