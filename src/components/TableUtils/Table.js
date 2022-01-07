import React from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import BTable from "react-bootstrap/Table";
import { Button, PageButton } from "./Button";
import { classNames } from "./Utils";
import { SortIcon, SortUpIcon, SortDownIcon } from "./Icons";
import {
  Header,
  SearchBar,
  Select,
} from "../ConsultantComponent/ConsultantDetails/ProjectTable/ProjectTableStyled";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Header>
      <div>
        <SearchBar
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </div>
    </Header>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <Header>
      <Select
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All Status</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Header>
  );
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "";

  return (
    <span
      className={classNames(
        "px-3 py-1  fw-lighter ",
        status.startsWith("in progress")
          ? "bg-primary bg-opacity-25 border border-primary text-primary "
          : null,
        status.startsWith("active")
          ? "bg-success bg-opacity-25 border border-success text-success  "
          : null,
        status.startsWith("inactive")
          ? "bg-secondary bg-opacity-25 border border-secondary text-secondary "
          : null,
        status.startsWith("completed")
          ? "bg-success bg-opacity-25 border border-success text-success "
          : null,
        status.startsWith("cancelled")
          ? "bg-danger bg-opacity-25 border border-danger text-danger "
          : null,
        status.startsWith("pending")
          ? "bg-primary bg-opacity-25 border border-primary text-primary "
          : null,
        status.startsWith("approved")
          ? "bg-success bg-opacity-25 border border-success text-success  "
          : null,
        status.startsWith("rejected")
          ? "bg-danger bg-opacity-25 border border-danger text-danger "
          : null,
      )}
    >
      {status}
    </span>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="d-flex ">
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  );

  // Render the UI for your table
  return (
    <>
      <BTable striped borderless hover>
        <Header>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                // filter ui
                <div className=" " key={column.id}>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
        </Header>

        {/* table */}

        <div className="overflow-auto ">
          <table {...getTableProps()} className="m-auto w-100 ">
            <thead className="bg-primary text-white text-left ">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th
                      scope="col"
                      className=""
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="ml-4">
                        {column.render("Header")}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <SortDownIcon />
                            ) : (
                              <SortUpIcon />
                            )
                          ) : (
                            <SortIcon className=" text-white" />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()} className="bg-white text-left">
              {page.map((row, i) => {
                // new
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="border-bottom py-3"
                          role="cell"
                        >
                          {cell.column.Cell.name === "defaultRenderer" ? (
                            <div className="ml-4">{cell.render("Cell")}</div>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="py-3 ">
          <div className="flex-1 d-flex justify-content-between">
            <Button
              className="bg-primary"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </Button>
            <Button
              className="bg-primary"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </Button>
          </div>
          <div className=" d-md-flex  justify-content-lg-between align-items-center">
            <div className="d-flex ">
              <div>
                <div className="d-flex ">Items Per Page</div>
                <span className=" mt-3">
                  Page{" "}
                  <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
                  <span className="font-medium">{pageOptions.length}</span>
                </span>
                <Select
                  className="mt-3 d-flex"
                  value={state.pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[5, 10, 20].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div>
              <nav
                className=" d-flex justify-content-center"
                aria-label="Pagination"
              >
                <PageButton
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  className="bg-primary"
                >
                  <i class="bi bi-chevron-double-left" />
                </PageButton>
                <PageButton
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className="bg-primary"
                >
                  <i class="bi bi-chevron-left" />
                </PageButton>
                <PageButton
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="bg-primary"
                >
                  <i class="bi bi-chevron-right" />
                </PageButton>
                <PageButton
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  className="bg-primary"
                >
                  <i class="bi bi-chevron-double-right" />
                </PageButton>
              </nav>
            </div>
          </div>
        </div>
      </BTable>
    </>
  );
}

export default Table;
