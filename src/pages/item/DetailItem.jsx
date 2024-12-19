import React from "react";

import DetailItemLayout from "../../components/layout/item/DetailItemLayout";
import ItemDestination from "./ItemDestination";
import RelatedItem from "./RelatedItem";

const DetailItem = () => {
    return (
        <DetailItemLayout>
            <ItemDestination/>
            <RelatedItem/>
        </DetailItemLayout>
    );
};

export default DetailItem;