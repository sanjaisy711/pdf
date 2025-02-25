import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, Paper, Button } from "@mui/material";

// Define columns configuration with new fields
const columns = [
  { field: "id", headerName: "ID", width: 90, resizable: true },
  {
    field: "name",
    headerName: "Name",
    width: 180,
    sortable: true,
    resizable: true,
  },
  {
    field: "age",
    headerName: "Age",
    width: 180,
    type: "number",
    sortable: true,
    resizable: true,
  },
  { field: "country", headerName: "Country", width: 180, resizable: true },
  { field: "phone", headerName: "Phone No", width: 180, resizable: true }, // New column
  { field: "address", headerName: "Address", width: 250, resizable: true }, // New column
  { field: "company", headerName: "Company Name", width: 200, resizable: true }, // New column
  { field: "email", headerName: "Email", width: 250, resizable: true }, // New column
];

// Sample rows data with new fields
const rows = [
  {
    id: 1,
    name: "Bob",
    age: 32,
    country: "India",
    phone: "123-456-7890",
    address: "Street 1, Mumbai",
    company: "Worksbyte",
    email: "bob@worksbyte.com",
  },
  {
    id: 2,
    name: "Alice",
    age: 29,
    country: "USA",
    phone: "234-567-8901",
    address: "Street 2, New York",
    company: "TechCorp",
    email: "alice@techcorp.com",
  },
  {
    id: 3,
    name: "John",
    age: 25,
    country: "UK",
    phone: "345-678-9012",
    address: "Street 3, London",
    company: "Innovatech",
    email: "john@innovatech.com",
  },
  {
    id: 4,
    name: "Mia",
    age: 35,
    country: "Canada",
    phone: "456-789-0123",
    address: "Street 4, Toronto",
    company: "WebWorks",
    email: "mia@webworks.com",
  },
  {
    id: 5,
    name: "David",
    age: 40,
    country: "Australia",
    phone: "567-890-1234",
    address: "Street 5, Sydney",
    company: "DataTech",
    email: "david@datatech.com",
  },
  {
    id: 6,
    name: "Emma",
    age: 28,
    country: "Germany",
    phone: "678-901-2345",
    address: "Street 6, Berlin",
    company: "NextGen",
    email: "emma@nextgen.com",
  },
  {
    id: 7,
    name: "Liam",
    age: 38,
    country: "France",
    phone: "789-012-3456",
    address: "Street 7, Paris",
    company: "SoftCo",
    email: "liam@softco.com",
  },
  {
    id: 8,
    name: "Sophia",
    age: 26,
    country: "India",
    phone: "890-123-4567",
    address: "Street 8, Delhi",
    company: "TechWave",
    email: "sophia@techwave.com",
  },
  {
    id: 9,
    name: "Oliver",
    age: 31,
    country: "Italy",
    phone: "901-234-5678",
    address: "Street 9, Rome",
    company: "Innovate",
    email: "oliver@innovate.com",
  },
  {
    id: 10,
    name: "Ava",
    age: 33,
    country: "Spain",
    phone: "012-345-6789",
    address: "Street 10, Madrid",
    company: "CreativeTech",
    email: "ava@creativetech.com",
  },
  {
    id: 11,
    name: "James",
    age: 27,
    country: "USA",
    phone: "112-233-4455",
    address: "Street 11, Chicago",
    company: "DevWorld",
    email: "james@devworld.com",
  },
  {
    id: 12,
    name: "Charlotte",
    age: 34,
    country: "India",
    phone: "223-344-5566",
    address: "Street 12, Bengaluru",
    company: "SoftwareSolutions",
    email: "charlotte@softwaresolutions.com",
  },
  {
    id: 13,
    name: "Ethan",
    age: 30,
    country: "Germany",
    phone: "334-455-6677",
    address: "Street 13, Hamburg",
    company: "DigitalEdge",
    email: "ethan@digitaledge.com",
  },
  {
    id: 14,
    name: "Isabella",
    age: 24,
    country: "UK",
    phone: "445-566-7788",
    address: "Street 14, Manchester",
    company: "TechLabs",
    email: "isabella@techlabs.com",
  },
  {
    id: 15,
    name: "William",
    age: 36,
    country: "Australia",
    phone: "556-677-8899",
    address: "Street 15, Melbourne",
    company: "InnoTech",
    email: "william@innotech.com",
  },
  {
    id: 16,
    name: "Zoe",
    age: 29,
    country: "France",
    phone: "667-788-9900",
    address: "Street 16, Lyon",
    company: "TechGlobal",
    email: "zoe@techglobal.com",
  },
  {
    id: 17,
    name: "Lucas",
    age: 37,
    country: "Spain",
    phone: "778-899-0011",
    address: "Street 17, Barcelona",
    company: "DevX",
    email: "lucas@devx.com",
  },
  {
    id: 18,
    name: "Grace",
    age: 32,
    country: "USA",
    phone: "889-900-1122",
    address: "Street 18, San Francisco",
    company: "Innova",
    email: "grace@innova.com",
  },
  {
    id: 19,
    name: "Henry",
    age: 41,
    country: "Italy",
    phone: "990-011-2233",
    address: "Street 19, Florence",
    company: "GlobalTech",
    email: "henry@globaltech.com",
  },
  {
    id: 20,
    name: "Lily",
    age: 26,
    country: "Canada",
    phone: "101-112-2233",
    address: "Street 20, Vancouver",
    company: "CyberSoft",
    email: "lily@cybersoft.com",
  },
  {
    id: 21,
    name: "Jack",
    age: 33,
    country: "Germany",
    phone: "212-223-3344",
    address: "Street 21, Munich",
    company: "CodeX",
    email: "jack@codex.com",
  },
  {
    id: 22,
    name: "Amelia",
    age: 30,
    country: "UK",
    phone: "323-334-4455",
    address: "Street 22, Bristol",
    company: "DevMatrix",
    email: "amelia@devmatrix.com",
  },
  {
    id: 23,
    name: "Benjamin",
    age: 28,
    country: "India",
    phone: "434-445-5566",
    address: "Street 23, Chennai",
    company: "CloudTech",
    email: "benjamin@cloudtech.com",
  },
  {
    id: 24,
    name: "Scarlett",
    age: 39,
    country: "France",
    phone: "545-556-6677",
    address: "Street 24, Nice",
    company: "NextWave",
    email: "scarlett@nextwave.com",
  },
  {
    id: 25,
    name: "David",
    age: 40,
    country: "Australia",
    phone: "656-667-7788",
    address: "Street 25, Brisbane",
    company: "TechForge",
    email: "david@techforge.com",
  },
  {
    id: 26,
    name: "Sophie",
    age: 24,
    country: "USA",
    phone: "767-778-8899",
    address: "Street 26, Los Angeles",
    company: "PixelWorks",
    email: "sophie@pixelworks.com",
  },
  {
    id: 27,
    name: "Evan",
    age: 29,
    country: "Germany",
    phone: "878-889-9000",
    address: "Street 27, Frankfurt",
    company: "ByteLabs",
    email: "evan@bytelabs.com",
  },
  {
    id: 28,
    name: "Chloe",
    age: 31,
    country: "Italy",
    phone: "989-990-1122",
    address: "Street 28, Milan",
    company: "ProDev",
    email: "chloe@prodev.com",
  },
  {
    id: 29,
    name: "Sebastian",
    age: 35,
    country: "Spain",
    phone: "101-112-2233",
    address: "Street 29, Seville",
    company: "NextSolutions",
    email: "sebastian@nextsolutions.com",
  },
  {
    id: 30,
    name: "Madeline",
    age: 27,
    country: "UK",
    phone: "212-223-3344",
    address: "Street 30, Liverpool",
    company: "SoftWave",
    email: "madeline@softwave.com",
  },
  {
    id: 31,
    name: "Aiden",
    age: 33,
    country: "Canada",
    phone: "323-334-4455",
    address: "Street 31, Calgary",
    company: "CloudWave",
    email: "aiden@cloudwave.com",
  },
  {
    id: 32,
    name: "Harper",
    age: 28,
    country: "India",
    phone: "434-445-5566",
    address: "Street 32, Hyderabad",
    company: "AlphaTech",
    email: "harper@alphatech.com",
  },
  {
    id: 33,
    name: "Isaac",
    age: 34,
    country: "USA",
    phone: "545-556-6677",
    address: "Street 33, Houston",
    company: "VentureLabs",
    email: "isaac@venturelabs.com",
  },
  {
    id: 34,
    name: "Sophia",
    age: 30,
    country: "Germany",
    phone: "656-667-7788",
    address: "Street 34, Stuttgart",
    company: "DataPoint",
    email: "sophia@datapoint.com",
  },
  {
    id: 35,
    name: "Jackson",
    age: 40,
    country: "Australia",
    phone: "767-778-8899",
    address: "Street 35, Perth",
    company: "NetTech",
    email: "jackson@nettech.com",
  },
  {
    id: 36,
    name: "Lily",
    age: 26,
    country: "France",
    phone: "878-889-9000",
    address: "Street 36, Marseille",
    company: "TechInnovate",
    email: "lily@techinnovate.com",
  },
  {
    id: 37,
    name: "Oliver",
    age: 33,
    country: "Canada",
    phone: "989-990-1122",
    address: "Street 37, Ottawa",
    company: "SkyTech",
    email: "oliver@skytech.com",
  },
  {
    id: 38,
    name: "Natalie",
    age: 38,
    country: "India",
    phone: "101-112-2233",
    address: "Street 38, Kolkata",
    company: "TechVibe",
    email: "natalie@techvibe.com",
  },
  {
    id: 39,
    name: "Amos",
    age: 42,
    country: "Spain",
    phone: "212-223-3344",
    address: "Street 39, Valencia",
    company: "InnoWave",
    email: "amos@innowave.com",
  },
  {
    id: 40,
    name: "Hannah",
    age: 27,
    country: "USA",
    phone: "323-334-4455",
    address: "Street 40, Boston",
    company: "NextSolutions",
    email: "hannah@nextsolutions.com",
  },
];

const DataGrid1 = () => {
  const printTable = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Print Table</title>");
    printWindow.document.write(`
      <style>
        body { font-family: 'Arial', sans-serif; margin: 30px; }
        h1 { font-size: 28px; text-align: center; color: #2c3e50; margin-bottom: 20px; }
        .header { text-align: right; font-size: 14px; color: #7f8c8d; margin-bottom: 20px; }
        .table-container { width: 100%; border-collapse: collapse; margin-top: 30px; }
        th, td { padding: 12px 15px; border: 1px solid #ddd; text-align: left; font-size: 14px; }
        th { background-color: #2980b9; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        tr:hover { background-color: #dfe6e9; }
        .footer { margin-top: 50px; font-size: 12px; text-align: center; color: #95a5a6; }
        .footer a { color: #3498db; text-decoration: none; }
      </style>
    `);
    printWindow.document.write("</head><body>");

    // Add Header Section
    printWindow.document.write(
      '<div class="header">Generated on: ' +
        new Date().toLocaleString() +
        "</div>"
    );
    printWindow.document.write("<h1>Worksbyte User Data Report</h1>");

    // Table Section
    printWindow.document.write('<table class="table-container">');
    printWindow.document.write(
      "<thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Country</th><th>Phone No</th><th>Address</th><th>Company Name</th><th>Email</th></tr></thead>"
    );
    printWindow.document.write("<tbody>");

    rows.forEach((row) => {
      printWindow.document.write(
        `<tr><td>${row.id}</td><td>${row.name}</td><td>${row.age}</td><td>${row.country}</td><td>${row.phone}</td><td>${row.address}</td><td>${row.company}</td><td>${row.email}</td></tr>`
      );
    });

    printWindow.document.write("</tbody></table>");

    // Footer Section
    printWindow.document.write('<div class="footer">');
    printWindow.document.write("<p>Thank you for choosing Worksbyte!</p>");
    printWindow.document.write(
      'Generated by <strong>Worksbyte</strong>. All rights reserved. | <a href="https://worksbyte.com" target="_blank">Visit Us</a>'
    );
    printWindow.document.write(
      '<p>For support, contact us at <a href="mailto:support@worksbyte.com">support@worksbyte.com</a></p>'
    );
    printWindow.document.write("</div>");

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Paper
      elevation={12}
      sx={{
        padding: 2,
        borderRadius: 0,

        boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out", // Smooth Paper hover
        "&:hover": {
          boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textAlign: "center",
          fontWeight: "bold",
          color: "#000",
          fontFamily: "'Roboto', sans-serif",
          textTransform: "uppercase",
        }}
      >
        🚀 Worksbyte User Data Table
      </Typography>

      <Box
        sx={{
          height: "80vh",
          width: "100%",
          "& .MuiDataGrid-root": {
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out", // Smooth hover
            "&:hover": {
              transform: "scale(1.02)", // Slight grow effect on hover
              boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.2)",
            },
          },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={printTable}
          sx={{ mb: 2 }}
        >
          🖨 Print Tablaage
        </Button>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          checkboxSelection
          disableColumnMenu
          disableSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          columnResizeMode="intermediate"
        />
      </Box>
    </Paper>
  );
};

export default DataGrid1;
