import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  SelectControl,
  TextareaControl,
  TextControl,
  FormToggle,
} from "@wordpress/components";
import { themeTypeOptions } from "../../../../utils/options";
import {
  fileUploaded,
  themeSwitch,
  updateData,
} from "../../../../utils/functions";
import { Label, MediaArea } from "../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes }) => {
  const { options,notes} = attributes;
  

  return (
    <>
    
      <PanelBody
        className="bPlPanelBody"
        title={__("Notes", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          label={__("Type ", "b-blocks")}
          labelPosition="left"
          value={options?.selectedTheme}
          options={themeTypeOptions}
          onChange={(value) => setAttributes(themeSwitch(value++, attributes))}
        />
        <TextControl
          value={notes[options?.selectedTheme]?.name}
          label={__("Name", "b-blocks")}
          onChange={(value) =>
            setAttributes({ notes: updateData(notes, value,options?.selectedTheme, "name") })
          }
          placeholder="name..."
        />
        <TextareaControl
          label={__("Message", "b-blocks")}
         value={notes[options?.selectedTheme]?.message}
          onChange={(value) =>
            setAttributes({ notes: updateData(notes, value,options?.selectedTheme, "message") })
          }
          placeholder="message..."
        />
      </PanelBody>

      {(options?.selectedTheme === 2 ||
        options?.selectedTheme === 10) && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Button", "b-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Title", "b-blocks")}
            placeholder={__("button text...", "b-blocks")}
            value={notes[options?.selectedTheme]?.link?.text}
            onChange={(value) =>
              setAttributes({
                notes: updateData(notes, value,options?.selectedTheme, "link", "text"),
              })
            }
          />
          {options?.selectedTheme === 10 ? (
            <>
             
              <Label>Choose Your File</Label>
              <MediaArea
                label="Choose Your File"
               
                value={notes[options?.selectedTheme]?.link?.link}
                default={notes[options?.selectedTheme]?.link?.link}
                onChange={(v) => setAttributes(fileUploaded(v, attributes,options?.selectedTheme))}
              />
               {/* <TextControl
              label={__("Link", "b-blocks")}
              placeholder={__("button link...", "b-blocks")}
              value={notes[options?.selectedTheme]?.link?.link}
              onChange={(value) =>
                setAttributes({
                  notes: updateData(notes, value,options?.selectedTheme, "link", "link"),
                })
              }
            /> */}
            </>
          ) : (
            <TextControl
              label={__("Link", "b-blocks")}
              placeholder={__("button link...", "b-blocks")}
              value={notes[options?.selectedTheme]?.link?.link}
              onChange={(value) =>
                setAttributes({
                  notes: updateData(notes, value,options?.selectedTheme, "link", "link"),
                })
              }
            />
          )}
           { options?.selectedTheme === 2 && <Label>
            Open A New Tab
            <FormToggle
              checked={options?.isNewTab}
              onChange={() =>
                setAttributes({
                  options: updateData(options, !options?.isNewTab, "isNewTab"),
                })
              }
            />
          </Label>}
        </PanelBody>
      )}
    </>
  );
};

export default General;
