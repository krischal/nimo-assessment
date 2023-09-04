import React, { useContext, useCallback } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PushPinIcon from "@mui/icons-material/PushPin";
import Stack from "@mui/material/Stack";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CryptoAvatar, PriceChange } from "./CryptoDataView";
import { useNavigate } from "react-router-dom";

export const CoinImage = ({ src }) => <CryptoAvatar image={src} />;

export const CoinPrice = ({ value }) => (
  <Typography variant="subtitle2">$ {value?.toFixed(2)}</Typography>
);

export const Coin24HrChange = ({ value }) => {
  if (typeof value !== "number") {
    return <PriceChange value={0} symbol={"$"} />;
  }

  return <PriceChange value={value.toFixed(3)} symbol={"$"} />;
};

export const Coin24HrChangePercentage = ({ value }) => (
  <PriceChange value={value.toFixed(2)} symbol={"%"} />
);

export const ActionButtons = ({ id, row }) => {
  const navigate = useNavigate();

  const { pinnedList, removePinnedItem, addPinnedItem, setSelectedCrypto } =
    useContext(GlobalContext);
  const handleRemovePinnedItem = useCallback(() => {
    removePinnedItem(row);
  }, [removePinnedItem, row]);

  const handleAddPinnedItem = useCallback(() => {
    addPinnedItem(row);
  }, [addPinnedItem, row]);

  return (
    <Stack direction="row" justifyContent={"flex-end"} alignItems={"flex-end"}>
      {!pinnedList.some((item) => item.id === id) ? (
        <IconButton aria-label="pin" onClick={handleAddPinnedItem}>
          <PushPinIcon sx={{ color: "grey" }} />
        </IconButton>
      ) : (
        <IconButton aria-label="pin" onClick={handleRemovePinnedItem}>
          <PushPinIcon sx={{ color: "#f6eca4" }} />
        </IconButton>
      )}
      {/* <IconButton aria-label="view" onClick={handleViewDetails}>
        <VisibilityIcon sx={{ color: "grey" }} />
      </IconButton> */}
    </Stack>
  );
};
