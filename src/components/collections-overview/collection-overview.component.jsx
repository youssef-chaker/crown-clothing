import React from "react";
import { connect } from "react-redux";
import "./collection-overview.style.scss";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
