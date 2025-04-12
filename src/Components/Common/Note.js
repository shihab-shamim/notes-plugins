import {  RichText } from '@wordpress/block-editor';
import { updateData } from '../../utils/functions';
import icon4 from '../assest/image/icon-4.png';
import icon5 from '../assest/image/icon-5.png';
import icon15 from '../assest/image/icon-15.png';
import { __ } from '@wordpress/i18n';
const Note = ({attributes,setAttributes,isBacked, }) => {
    const {notes,options}=attributes
    const note= notes[options?.selectedTheme]
    console.log(options?.selectedTheme);
    return (
        <div className="box-content">
            <div className="container">
                <div className="content-box-one">
                    <div className="content-inner">
                        <div className="single-box">
                            <div className="text-box">
                                <div className="icon"><span dangerouslySetInnerHTML={{__html:note?.icon}}></span></div>
                                {isBacked ?<RichText placeholder='type note name' tagName='h3' value={note?.name} onChange={(value) =>
            setAttributes({ notes: updateData(notes, value,options?.selectedTheme, "name") })
          } />:<h3>{note?.name}</h3>}
                                {isBacked ?<RichText placeholder='type note message' tagName='p' value={note?.message} onChange={(value) =>
            setAttributes({ notes: updateData(notes, value,options?.selectedTheme, "message") })
          } />: <p>{note?.message}</p>}

                                {options?.selectedTheme ===2 &&( isBacked?<span className="basic-information-button" ><img src={icon4} alt=""/><RichText  placeholder={__('button text...', 'b-blocks')}  tagName='span' value={notes[options?.selectedTheme]?.link?.text} onChange={value=>setAttributes({
                  notes: updateData(notes, value,options?.selectedTheme, "link", "text"),
                })
              } /><img src={icon5} alt=""/></span>:<a target={options?.isNewTab?"_jsjhfjs":"_self"} href={notes[options?.selectedTheme]?.link?.link} className="basic-information-button" ><img src={icon4} alt=""/><span>{notes[options?.selectedTheme]?.link?.text}</span><img src={icon5} alt=""/></a>)}

                                
                                {options?.selectedTheme ===10 &&( isBacked?<span className="basic-file-button" ><img src={icon15} alt=""/><RichText  placeholder={__('button text...', 'b-blocks')}  tagName='span' value={notes[options?.selectedTheme]?.link?.text} onChange={value=>setAttributes({
                  notes: updateData(notes, value,options?.selectedTheme, "link", "text"),
                })
              } /></span>:<a download={notes[options?.selectedTheme]?.link?.link} target={options?.isNewTab?"_jsjhfjs":"_self"} href={notes[options?.selectedTheme]?.link?.link} className="basic-file-button" ><img src={icon15} alt=""/><span>{notes[options?.selectedTheme]?.link?.text}</span></a>)}

                               
                            </div>
                        </div>
                       
                    </div>
                    
                </div>

               
               
            </div>
        </div>
    );
};

export default Note;
