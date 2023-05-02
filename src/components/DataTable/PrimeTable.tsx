"use client"

// Imports
import { useState } from "react"
import { useParse } from "@/hooks/useParse"
import { useFlatten } from "@/hooks/useFlatten"
import "../../app/globals.css"

// Imports - PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { FilterMatchMode } from "primereact/api"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

//Types
type Props = {
  hideCategories: boolean
  rowAmount: number
}

const PrimeTable = ({ hideCategories, rowAmount }: Props) => {
  // States
  const { data } = useParse(
    "https://docs.google.com/spreadsheets/d/11R-Ak5Edggygo4nXv9QjU32ATR75-UDKeyBsZlOx-fI/pub?output=csv"
  )
  const { flattenedData } = useFlatten(data)
  const [filters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    "Asset Name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "Business Category": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Lat: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Long: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Earthquake: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Year: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Drought: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "Risk Rating": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "Extreme heat": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Volcano: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Flooding: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Tornado: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    Wildfire: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "Extreme cold": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "Sea level rise": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  })

  //Don't include certain categories since they have special parameters
  const headers = [
    "Lat",
    "Long",
    "Drought",
    "Earthquake",
    "Extreme heat",
    "Extreme cold",
    "Volcano",
    "Flooding",
    "Tornado",
    "Wildfire",
    "Sea level rise",
  ]

  return (
    <>
      <DataTable
        value={flattenedData}
        size="small"
        responsiveLayout="scroll"
        tableStyle={{ minWidth: "50rem" }}
        stripedRows
        paginator
        rows={rowAmount}
        rowsPerPageOptions={[10, 25, 50, 75, 100]}
        removableSort
        filters={filters}
        filterDisplay="row"
        globalFilterFields={[
          "Asset Name",
          "Business Category",
          "Lat",
          "Long",
          "Risk Rating",
          "Year",
          "Drought",
          "Earthquake",
          "Extreme heat",
          "Extreme cold",
          "Volcano",
          "Flooding",
          "Tornado",
          "Wildfire",
          "Sea level rise",
        ]}
      >
        <Column
          field="Asset Name"
          header="Asset Name"
          sortable
          filter
          filterField="Asset Name"
          filterPlaceholder="Search by name"
          style={{ minWidth: "14rem" }}
        ></Column>
        <Column
          field="Business Category"
          header="Business Category"
          sortable
          filter
          filterField="Business Category"
          filterPlaceholder="Search by category"
          style={{ minWidth: "7rem" }}
        ></Column>
        <Column
          field="Risk Rating"
          header="Risk Rating"
          sortable
          filter
          filterField="Risk Rating"
          filterPlaceholder="Search by rating"
          style={{ minWidth: "7rem" }}
          align="right"
        ></Column>
        <Column
          field="Year"
          header="Year"
          sortable
          filter
          filterField="Year"
          filterPlaceholder="Search by year"
          style={{ minWidth: "7rem" }}
          align="right"
        ></Column>
        {headers.map((column, index) => (
          <Column
            field={column}
            header={column}
            key={index}
            sortable
            filter
            filterField={column}
            filterPlaceholder={`Search by ${column}`}
            style={{ minWidth: "7rem" }}
            align="right"
            hidden={hideCategories ? true : false}
          ></Column>
        ))}
      </DataTable>
    </>
  )
}

export default PrimeTable
