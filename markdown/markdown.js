import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextArea, FormGroup } from "@blueprintjs/core";
import {
  faUnlink,
  faPlayCircle,
  faLink,
  faRedoAlt,
  faMobileAlt,
  faIdBadge,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUnlink,
  faPlayCircle,
  faLink,
  faRedoAlt,
  faMobileAlt,
  faIdBadge,
  faCommentDots
);
import PropTypes from "prop-types";
import "./markdown.styl";
import markdown from 'markdown';
const defaultMarkdown = require('../default.md');



const Markdown = () => {

    const [input, setInput] = useState("An h1 header");
    const [preview, setPreview] = useState("");

    const updatePreview = (inputValue) => {
        setInput(inputValue);
        setPreview(markdown.parse(inputValue));
    };

    const createAsHtmlMarkup = (htmlAsString) => {
        return {__html: htmlAsString};
    };

    const showDefaultPreview = () => {
        fetch(defaultMarkdown).then(resp => {
            return resp.text()
        }).then(text => {
            updatePreview(text);
        });
    }

    return (
        <div className="markdown-wrapper">
            <div className="markdown-area" >
                <div style={{
                    display: 'flex',
                    flexFlow: 'column wrap',
                    maxWidth: '33em',
                    margin: 'auto'
                }}>
                <TextArea class="text-input" rows="6" cols="60"
                    value={input}
                    onInput={event => {updatePreview(event.target.value)}}>
                </TextArea>
                <Button onClick={showDefaultPreview}>Load Demo</Button>

                <div className="preview text_side"
                    dangerouslySetInnerHTML={createAsHtmlMarkup(preview)}>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Markdown;
