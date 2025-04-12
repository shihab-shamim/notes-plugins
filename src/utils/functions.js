import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, (draft) => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, (draft) => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(
      draft[currentProp],
      value,
      ...remainingProps
    );
  });
};

export const themeSwitch = (theme =0, attributes) =>
  produce(attributes, (draft) => {
    draft["options"]["selectedTheme"] = theme;
    switch (theme) {
      case 0:
       
        draft["styles"]["borderColor"] = "#ffa748";
        draft["styles"]["bg"] = " #fff6ed";

        break;

      case 1:
       
        draft["styles"]["borderColor"] = "#f85f5f";
        draft["styles"]["bg"] = "#feeded";

        break;

      case 2:
       
        draft["styles"]["borderColor"] = "#aad9f9";
        draft["styles"]["bg"] = "#f2f9fe";
       

        break;
      case 3:
        
        draft["styles"]["borderColor"] = "#aad9f9";
        draft["styles"]["bg"] = "#f2f9fe";

        break;
      case 4:
        
        draft["styles"]["borderColor"] = "#aad9f9";
        draft["styles"]["bg"] = "#f2f9fe";

        break;

      case 5:
        
        draft["styles"]["borderColor"] = "#92da6f";
        draft["styles"]["bg"] = "#f3fbef";

        break;

      case 6:
        
        draft["styles"]["borderColor"] = "#92da6f";
        draft["styles"]["bg"] = "#f3fbef";

        break;

      case 7:
       
        draft["styles"]["borderColor"] = "#92da6f";
        draft["styles"]["bg"] = "#f3fbef";

        break;

      case 8:
       
        draft["styles"]["borderColor"] = "#92da6f";
        draft["styles"]["bg"] = "#f3fbef";

        break;
      case 9:
       
        draft["styles"]["borderColor"] = "#92da6f";
        draft["styles"]["bg"] = "#f3fbef";

        break;

      case 10:
        
        draft["styles"]["borderColor"] = "#be8bff";
        draft["styles"]["bg"] = "#f8f2ff";
       

        break;
      case 11:

        draft["styles"]["borderColor"] = "#52e7b3";
        draft["styles"]["bg"] = "#eefdf8";

        break;
    }
  });

export const fileUploaded = (value, attributes,selectedTheme) =>
  produce(attributes, (draft) => {
    draft["notes"][selectedTheme]["link"]["link"] = value?.url;
    draft["notes"][selectedTheme]["link"]["text"] = value?.filename;
  });

