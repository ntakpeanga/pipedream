import base from "../common/common.mjs";
import common from "./common.mjs";

export default {
  ...base,
  ...common,
  name: "New Records",
  description: "Emit new event for each new record in a table",
  key: "airtable_oauth-new-records",
  version: "0.0.4",
  type: "source",
  props: {
    ...base.props,
    tableId: {
      propDefinition: [
        base.props.airtable,
        "tableId",
        ({ baseId }) => ({
          baseId,
        }),
      ],
      description: "The table ID to watch for changes.",
    },
  },
};
