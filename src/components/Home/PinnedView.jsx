import React, { useContext, useMemo, useCallback } from "react";
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material";
import "../../assets/css/animation.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  PriceChange,
  CryptoAvatar,
  CryptoSymbol,
  RemoveButton,
} from "./CryptoDataView";

const PinnedView = () => {
  const { pinnedList, removePinnedItem } = useContext(GlobalContext);

  const handleRemove = useCallback(
    (item) => {
      removePinnedItem(item);
    },
    [removePinnedItem]
  );

  const renderedList = useMemo(() => {
    return pinnedList.map((item) => (
      <CSSTransition key={item.id} timeout={500} classNames="zoom">
        <div>
          <Paper
            elevation={3}
            sx={{ padding: 3, flexDirection: "row" }}
            className={`zoom-in crypto-item`}
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CryptoAvatar image={item.image} />
              <CryptoSymbol symbol={item.symbol} />
              <PriceChange
                value={item.price_change_percentage_24h.toFixed(2)}
                symbol={"%"}
              />
              <RemoveButton item={item} onRemove={handleRemove} />
            </Stack>
          </Paper>
        </div>
      </CSSTransition>
    ));
  }, [pinnedList, removePinnedItem, handleRemove]);

  return (
    <TransitionGroup className="crypto-list">{renderedList}</TransitionGroup>
  );
};

export default PinnedView;
