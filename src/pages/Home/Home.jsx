import React, { useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../hooks/useAPi";
import Grid from "@mui/material/Grid";
import cryptoData from "../../assets/lotties/crypto.json";
import Stack from "@mui/material/Stack";
import "chartjs-chart-financial";
import { GlobalContext } from "../../contexts/GlobalContext";
import PinnedView from "../../components/Home/PinnedView";
import { columns } from "../../config/dataGridColumns";
const HomeScreen = () => {
  const [coinsList, setCoinsList] = useState({});
  const { isFetching } = useQuery(
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
        if (res.length > 0) {
          setCoinsList(res);
        } else {
          setCoinsList(cryptoData);
        }
      },
    }
  );

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} padding={5}>
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            overflowX: "auto",
            flexWrap: "nowrap",
          }}
        >
          <PinnedView />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          rows={coinsList}
          columns={columns}
          loading={isFetching}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 50 },
            },
          }}
          pageSizeOptions={[50, 100, 200]}
        />
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
