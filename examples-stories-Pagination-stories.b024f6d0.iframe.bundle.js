"use strict";(self.webpackChunk_sroueche_bespoketable=self.webpackChunk_sroueche_bespoketable||[]).push([[643],{"./stories/examples/stories/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Pagination:()=>Pagination_stories_Pagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories});var src=__webpack_require__("./src/index.tsx"),TableWithFullBorderHeader=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./stories/examples/Components/Header/TableWithFullBorderHeader.tsx")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pagination=({handleChangeRowsPerPage,handlePageSelectChange,rowsPerPage,currentPage,pageCount,itemsPerPage})=>(0,jsx_runtime.jsxs)("div",{className:"pagination",children:[(0,jsx_runtime.jsx)("span",{children:"Item per page :"}),(0,jsx_runtime.jsx)("select",{id:"rowsPerPage",value:rowsPerPage,onChange:event=>handleChangeRowsPerPage(Number(event.target.value)),style:{margin:"0 1rem",border:"1px solid #ccc",padding:"0.5rem"},children:itemsPerPage?.map((item=>(0,jsx_runtime.jsx)("option",{value:item,children:item},item)))}),(0,jsx_runtime.jsx)("button",{disabled:1===currentPage,onClick:()=>handlePageSelectChange(currentPage-1),children:"Précédent"}),(0,jsx_runtime.jsxs)("span",{children:["Page ",currentPage," sur ",pageCount]}),(0,jsx_runtime.jsx)("button",{disabled:currentPage===pageCount,onClick:()=>handlePageSelectChange(currentPage+1),children:"Suivant"})]});Pagination.displayName="Pagination";const Pagination_Pagination=Pagination;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},handleChangeRowsPerPage:{defaultValue:null,description:"",name:"handleChangeRowsPerPage",required:!0,type:{name:"(rowsPerPage: number) => void"}},handlePageSelectChange:{defaultValue:null,description:"",name:"handlePageSelectChange",required:!0,type:{name:"(page: number) => void"}},initialPage:{defaultValue:null,description:"",name:"initialPage",required:!1,type:{name:"number"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!1,type:{name:"number"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number[]"}},enablePagination:{defaultValue:null,description:"",name:"enablePagination",required:!1,type:{name:"boolean"}},dataLength:{defaultValue:null,description:"",name:"dataLength",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/Components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"stories/examples/Components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}var dateFormatUtils=__webpack_require__("./stories/examples/Utils/dateFormatUtils.ts");const buildMarsRoverPhotoTableData=roverPhotos=>{const result=roverPhotos.map((roverPhoto=>({rowId:roverPhoto.id.toString(),cells:[{headerId:"col-id",cellData:{value:roverPhoto.id}},{headerId:"col-sol",cellData:{value:roverPhoto.sol}},{headerId:"col-earth-date",cellData:{value:(0,dateFormatUtils.Y)(roverPhoto.earth_date),sortValue:(0,dateFormatUtils.a)(roverPhoto.earth_date).valueOf()}},{headerId:"col-rover-name",cellData:{value:roverPhoto.rover.name}},{headerId:"col-cam-name",cellData:{value:roverPhoto.camera.name}},{headerId:"col-img",cellData:{value:roverPhoto.img_src}}]})));return console.log({result}),result},CellSorting=({header,cellValue})=>(0,jsx_runtime.jsx)("div",{style:{borderBottom:"1px solid black",borderLeft:header.isFirstColumn?"1px solid black":"none",borderRight:"1px solid black",textAlign:"center"},children:"col-img"===header.id?(0,jsx_runtime.jsx)("a",{className:"link",href:cellValue?cellValue.value.toString():"#",target:"_blank",children:"See photo"}):(0,jsx_runtime.jsx)("p",{style:{paddingLeft:"4px"},children:cellValue?.value})});CellSorting.displayName="CellSorting";const Cell_CellSorting=CellSorting;try{CellSorting.displayName="CellSorting",CellSorting.__docgenInfo={description:"",displayName:"CellSorting",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"TableHeaderProps<MarsRoverPhotoTableDataProps, string>"}},cellValue:{defaultValue:null,description:"",name:"cellValue",required:!1,type:{name:"MarsRoverPhotoTableDataProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/Components/Cell/CellSorting.tsx#CellSorting"]={docgenInfo:CellSorting.__docgenInfo,name:"CellSorting",path:"stories/examples/Components/Cell/CellSorting.tsx#CellSorting"})}catch(__react_docgen_typescript_loader_error){}const Pagination_stories={title:"BespokeTable",component:src.A,args:{headers:[{id:"col-id",title:"Id",isFirstColumn:!0,width:"70px"},{id:"col-sol",title:"Sol"},{id:"col-earth-date",title:"Earth date"},{id:"col-rover-name",title:"Rover name"},{id:"col-cam-name",title:"Camera name"},{id:"col-img",title:"Image",isLastColumn:!0}],headerCellRender:header=>(0,jsx_runtime.jsx)(TableWithFullBorderHeader.A,{header}),cellRender:(header,rowProps,value)=>(0,jsx_runtime.jsx)(Cell_CellSorting,{header,cellValue:value}),pagination:{enablePagination:!0},paginationRender:pagination=>(0,jsx_runtime.jsx)(Pagination_Pagination,{...pagination})},loaders:[async()=>({roverPhotoResponse:await(await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-7-3&api_key=LLMHKmincgd2LJSKzGcx1D1ljBuRE7TOAiBLXjHf",{cache:"force-cache"})).json()})],render:({data,...args},{loaded:{roverPhotoResponse}})=>(0,jsx_runtime.jsx)(src.A,{data:buildMarsRoverPhotoTableData(roverPhotoResponse.photos),...args})},Pagination_stories_Pagination={};Pagination_stories_Pagination.parameters={...Pagination_stories_Pagination.parameters,docs:{...Pagination_stories_Pagination.parameters?.docs,source:{originalSource:"{}",...Pagination_stories_Pagination.parameters?.docs?.source}}};const __namedExportsOrder=["Pagination"]},"./src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_0});var react=__webpack_require__("./node_modules/react/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js");function getDataSorted(orderByColumnId,propertyKeyToOrder,data,order){return orderByColumnId&&propertyKeyToOrder?function sortTableData(data,orderByColumnId,propertyKeyToOrder,order){if(data&&data.length>0){const sortRows=(a,b)=>{const aValue=getCellValue(a,propertyKeyToOrder,orderByColumnId),bValue=getCellValue(b,propertyKeyToOrder,orderByColumnId);return"desc"===order?descendingComparator(aValue,bValue):-descendingComparator(aValue,bValue)};data.sort(sortRows)}return data}(data,orderByColumnId,propertyKeyToOrder,order):data}function getCellValue(rows,propertyKey,columnId){const cell=rows.cells.find((cell=>cell.headerId===columnId));return cell&&cell.cellData&&cell.cellData[propertyKey]?(0,lodash.isFunction)(cell.cellData[propertyKey])?cell.cellData[propertyKey]():cell.cellData[propertyKey]:0}function descendingComparator(a,b){return b<a?-1:b>a?1:0}function generateGridTemplateColumns(headers){return headers.map((header=>header.width?header.width:"1fr")).join(" ")}function generateGridTemplateRows(data,headerHeight="1fr"){return headerHeight+" "+data.map((row=>row.rowHeight?row.rowHeight:"1fr")).join(" ")}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function HeaderRow({headers,headerCellRender,handleSort,activeColumnIdSorted,orderDirection,headerSortComponent}){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:headers.map((header=>{const propertyKeyToOrder=header.propertyKeyToOrder,sortComponent=propertyKeyToOrder&&headerSortComponent&&headerSortComponent((()=>handleSort(header.id,propertyKeyToOrder,function getNextOrderDirection(nextColumnIdToSort,currentOrderDirection,columnIdSorted){return columnIdSorted===nextColumnIdToSort?"desc"===currentOrderDirection?"asc":"desc":"asc"}(header.id,orderDirection,activeColumnIdSorted))),activeColumnIdSorted===header.id,orderDirection);return(0,jsx_runtime.jsx)(react.Fragment,{children:headerCellRender(header,sortComponent)},header.id)}))})}try{HeaderRow.displayName="HeaderRow",HeaderRow.__docgenInfo={description:"",displayName:"HeaderRow",props:{headers:{defaultValue:null,description:"",name:"headers",required:!0,type:{name:"TableHeaderProps<C, H>[]"}},headerCellRender:{defaultValue:null,description:"",name:"headerCellRender",required:!0,type:{name:"HeaderCellRender<C, H>"}},handleSort:{defaultValue:null,description:"",name:"handleSort",required:!0,type:{name:"HandlerSort<C>"}},activeColumnIdSorted:{defaultValue:null,description:"",name:"activeColumnIdSorted",required:!1,type:{name:"string"}},orderDirection:{defaultValue:null,description:"",name:"orderDirection",required:!0,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},headerSortComponent:{defaultValue:null,description:"",name:"headerSortComponent",required:!1,type:{name:"HeaderSortComponent"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Header/HeaderRow.tsx#HeaderRow"]={docgenInfo:HeaderRow.__docgenInfo,name:"HeaderRow",path:"src/Header/HeaderRow.tsx#HeaderRow"})}catch(__react_docgen_typescript_loader_error){}var react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js");function Row({row,headers,cellRender,firstRow,lastRow,fallbackRender}){const{rowId,cells,className,meta}=row;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:headers.map((header=>{const key=`cell-${rowId}-${header.id}`,cell=cells.find((cell=>cell.headerId===header.id)),rowProps={rowId,firstRow,lastRow,className,meta};return(0,jsx_runtime.jsx)(react_error_boundary_esm.tH,{fallback:fallbackRender?fallbackRender(rowId,header,lastRow,cell):(0,jsx_runtime.jsx)("span",{children:"Rendering error"}),children:cellRender(header,rowProps,cell?.cellData)},key)}))})}try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"TableDataProps<C>"}},headers:{defaultValue:null,description:"",name:"headers",required:!0,type:{name:"TableHeaderProps<C, H>[]"}},cellRender:{defaultValue:null,description:"",name:"cellRender",required:!0,type:{name:"CellRender<C, H>"}},firstRow:{defaultValue:null,description:"",name:"firstRow",required:!0,type:{name:"boolean"}},lastRow:{defaultValue:null,description:"",name:"lastRow",required:!0,type:{name:"boolean"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"FallbackRender<C, H>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Row/Row.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"src/Row/Row.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}function Pagination({dataLength,paginationRender,paginationConfig}){const{rowsPerPage,...paginationConfigRest}=paginationConfig;return paginationRender({rowsPerPage,dataLength,pageCount:Math.ceil(dataLength/rowsPerPage),...paginationConfigRest})}try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{dataLength:{defaultValue:null,description:"",name:"dataLength",required:!0,type:{name:"number"}},paginationRender:{defaultValue:null,description:"",name:"paginationRender",required:!0,type:{name:"PaginationRender"}},paginationConfig:{defaultValue:null,description:"",name:"paginationConfig",required:!0,type:{name:"UsePaginationTableProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}function BespokeTable({data,headers,cellRender,headerCellRender,isLoading=!1,pagination,paginationRender,loadingComponent,noDataComponent,headerSortComponent,fallbackRender,headerHeight,containerClassName}){const{order,orderByColumnId,propertyKeyToOrder,handleSort}=function useTableSort(headers){const defaultColumnSort=function getDefaultColumnSort(headers){return headers.find((header=>void 0!==header.defaultSortDirection))}(headers),[order,setOrder]=(0,react.useState)(defaultColumnSort&&defaultColumnSort.defaultSortDirection?defaultColumnSort.defaultSortDirection:"asc"),[orderByColumnId,setOrderByColumnId]=(0,react.useState)(defaultColumnSort?defaultColumnSort.id:void 0),[propertyKeyToOrder,setPropertyKeyToOrder]=(0,react.useState)(defaultColumnSort&&defaultColumnSort.propertyKeyToOrder?defaultColumnSort.propertyKeyToOrder:void 0);return{order,orderByColumnId,propertyKeyToOrder,handleSort:(0,react.useCallback)(((columnId,orderKey,orderDirection)=>{setOrder(orderDirection),setPropertyKeyToOrder(orderKey),setOrderByColumnId(columnId)}),[])}}(headers),paginationConfig=function usePaginationTable(pagination){const{rowsPerPage:defaultRowPerPage,...paginationConfig}={initialPage:1,rowsPerPage:10,itemsPerPage:[5,10,25,50],enablePagination:!1,...pagination},[page,setPage]=(0,react.useState)(paginationConfig.initialPage),[rowsPerPage,setRowsPerPage]=(0,react.useState)(defaultRowPerPage);return{currentPage:page,rowsPerPage,handleChangeRowsPerPage:rowsPerPage=>{setRowsPerPage(rowsPerPage),setPage(1)},handlePageSelectChange:page=>{setPage(page)},...paginationConfig}}(pagination),isDataAvailable=!1===isLoading&&0!==data.length,dataTable=function getDataPaginated(dataTable,pagination){const pageIndex=pagination.currentPage-1,rowsPerPage=pagination.rowsPerPage;return pagination.enablePagination?dataTable.slice(pageIndex*rowsPerPage,pageIndex*rowsPerPage+rowsPerPage):dataTable}(getDataSorted(orderByColumnId,propertyKeyToOrder,data,order),paginationConfig);return(0,jsx_runtime.jsxs)("div",{className:containerClassName,children:[(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridTemplateColumns:generateGridTemplateColumns(headers),gridTemplateRows:isDataAvailable?generateGridTemplateRows(dataTable,headerHeight):"none"},children:[(0,jsx_runtime.jsx)(HeaderRow,{headers,headerCellRender,handleSort,activeColumnIdSorted:orderByColumnId,orderDirection:order,headerSortComponent}),!1===isLoading&&0===data.length&&(0,jsx_runtime.jsx)("div",{style:{gridColumn:"1/end"},children:noDataComponent}),isDataAvailable&&dataTable.map(((row,index)=>(0,jsx_runtime.jsx)(Row,{row,headers,cellRender,firstRow:0===index,lastRow:index===dataTable.length-1,fallbackRender},`row-${row.rowId}`))),isLoading&&(0,jsx_runtime.jsx)("div",{style:{gridColumn:"1/end"},children:loadingComponent})]}),isDataAvailable&&paginationRender&&(0,jsx_runtime.jsx)(Pagination,{dataLength:data.length,paginationRender,paginationConfig})]})}BespokeTable.displayName="BespokeTable";try{BespokeTable.displayName="BespokeTable",BespokeTable.__docgenInfo={description:"",displayName:"BespokeTable",props:{headers:{defaultValue:null,description:"",name:"headers",required:!0,type:{name:"TableHeaderProps<C, H>[]"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!1,type:{name:"`${string}px` | `${string}fr` | `${string}%` | `${string}em` | `${string}rem` | `${string}vh` | `${string}vw`"}},headerCellRender:{defaultValue:null,description:"",name:"headerCellRender",required:!0,type:{name:"HeaderCellRender<C, H>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TableDataProps<C>[]"}},cellRender:{defaultValue:null,description:"",name:"cellRender",required:!0,type:{name:"CellRender<C, H>"}},loadingComponent:{defaultValue:null,description:"",name:"loadingComponent",required:!1,type:{name:"ReactNode"}},noDataComponent:{defaultValue:null,description:"",name:"noDataComponent",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"PaginationTableConfigProps"}},paginationRender:{defaultValue:null,description:"",name:"paginationRender",required:!1,type:{name:"PaginationRender"}},headerSortComponent:{defaultValue:null,description:"",name:"headerSortComponent",required:!1,type:{name:"HeaderSortComponent"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"FallbackRender<C, H>"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/BespokeTable.tsx#BespokeTable"]={docgenInfo:BespokeTable.__docgenInfo,name:"BespokeTable",path:"src/BespokeTable.tsx#BespokeTable"})}catch(__react_docgen_typescript_loader_error){}const src_0=BespokeTable;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{headers:{defaultValue:null,description:"",name:"headers",required:!0,type:{name:"TableHeaderProps<C, H>[]"}},headerHeight:{defaultValue:null,description:"",name:"headerHeight",required:!1,type:{name:"`${string}px` | `${string}fr` | `${string}%` | `${string}em` | `${string}rem` | `${string}vh` | `${string}vw`"}},headerCellRender:{defaultValue:null,description:"",name:"headerCellRender",required:!0,type:{name:"HeaderCellRender<C, H>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TableDataProps<C>[]"}},cellRender:{defaultValue:null,description:"",name:"cellRender",required:!0,type:{name:"CellRender<C, H>"}},loadingComponent:{defaultValue:null,description:"",name:"loadingComponent",required:!1,type:{name:"ReactNode"}},noDataComponent:{defaultValue:null,description:"",name:"noDataComponent",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"PaginationTableConfigProps"}},paginationRender:{defaultValue:null,description:"",name:"paginationRender",required:!1,type:{name:"PaginationRender"}},headerSortComponent:{defaultValue:null,description:"",name:"headerSortComponent",required:!1,type:{name:"HeaderSortComponent"}},fallbackRender:{defaultValue:null,description:"",name:"fallbackRender",required:!1,type:{name:"FallbackRender<C, H>"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},"./stories/examples/Components/Header/TableWithFullBorderHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableWithFullBorderHeader=({header})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{borderTop:"1px solid black",borderBottom:"1px solid black",borderLeft:header.isFirstColumn?"1px solid black":"none",borderRight:"1px solid black"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{textAlign:"center",fontWeight:700},children:header.title})});TableWithFullBorderHeader.displayName="TableWithFullBorderHeader";const __WEBPACK_DEFAULT_EXPORT__=TableWithFullBorderHeader;try{TableWithFullBorderHeader.displayName="TableWithFullBorderHeader",TableWithFullBorderHeader.__docgenInfo={description:"",displayName:"TableWithFullBorderHeader",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"TableHeaderProps<MarsRoverTableDataProps, string> | TableHeaderProps<MarsRoverPhotoTableDataProps, string>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/examples/Components/Header/TableWithFullBorderHeader.tsx#TableWithFullBorderHeader"]={docgenInfo:TableWithFullBorderHeader.__docgenInfo,name:"TableWithFullBorderHeader",path:"stories/examples/Components/Header/TableWithFullBorderHeader.tsx#TableWithFullBorderHeader"})}catch(__react_docgen_typescript_loader_error){}},"./stories/examples/Utils/dateFormatUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>formatDate,a:()=>toDate});var dayjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);function formatDate(date,format="DD/MM/YYYY"){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format)}function toDate(date){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date)}}}]);