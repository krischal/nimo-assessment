import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../hooks/useAPi";
import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const HomeScreen = () => {
  const [coinsList, setCoinsList] = useState({});

  const { data, refetch, isFetching } = useQuery(
    ["get-coins-list"],
    () =>
      api(
        "get",
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
        {}
      ),
    {
      enabled: true,
      onSuccess: (res) => {
        setCoinsList(res);
      },
    }
  );

  const columns = [
    {
      field: "image",
      headerName: "image",
      width: 130,
      width: 40,
      height: 40,
      rendercell: (params) => {
        return <img src={params.value} />;
      },
    },

    { field: "name", headerName: "Coins", width: 130 },
    {
      field: "current_price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "market_cap",
      headerName: "Market Cap",
      type: "number",
      width: 130,
    },
    {
      field: "price_change_24h",
      headerName: "24 Hr",
      type: "number",
      width: 90,
    },
    ,
  ];

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={8}>
        <DataGrid
          rows={coinsList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            {" "}
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Your Favorite's
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
