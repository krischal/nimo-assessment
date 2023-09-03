import { CoinImage, CoinPrice, Coin24HrChange, Coin24HrChangePercentage, ActionButtons } from "../components/Home/DataGridColumnView";

export const columns = [
    {
      field: "market_cap_rank",
      headerName: "Rank",
      width: 40,
      type: "number",
    },
    {
      field: "image",
      headerName: "Image",
      width: 50,
      renderCell: (params) => <CoinImage src={params.value} />,
    },
    { 
      field: "name", 
      headerName: "Coins", 
      width: 200 
    },
    {
      field: "current_price",
      headerName: "Price",
      width: 150,
      renderCell: (params) => <CoinPrice value={params.value} />,
    },
    {
      field: "price_change_24h",
      headerName: "24 Hr",
      width: 120,
      renderCell: (params) => <Coin24HrChange value={params.value} />,
    },
    {
      field: "price_change_percentage_24h",
      headerName: "24 Hr (%)",
      width: 100,
      renderCell: (params) => <Coin24HrChangePercentage value={params.value} />,
    },
    {
        field: "high_24h",
        headerName: "24H High",
        type: "number",
        width: 100,
      },
      {
        field: "low_24h",
        headerName: "24H Low",
        type: "number",
        width: 100,
      },
    {
      field: "market_cap",
      headerName: "Market Cap",
      type: "number",
      width: 200,
    },
    {
      field: "id",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => <ActionButtons id={params.value} row={params.row} />,
      align:"right",
      headerAlign:"right",
    },
  ];
  