import React from 'react';
import style from './style.css';
import Modal from 'react-modal';

import H1 from '../h1';
import ControllButton from '../controllButton';
import SelectedPrinters from '../selectedPrinters';

let fileInput;

function extractFileNameFromPath(path) {{

}
  return path.match(/[^\/\\]+$/);
}

function confirmButtonstate() {
  if (fileInput) {
    if (fileInput.value) {
      return false;
    }
  }
  return true;
}

function onUploadButtonClick(confirm) {
  if (fileInput && fileInput.value) {
    console.log(fileInput.files);
    confirm(fileInput.files);
  }
}

const FileUploadModal = ({ isOpen, children, close, confirm, isUploadingFile, selectedPrinters }) => (
  <Modal
    isOpen={isOpen}
    className={style.modal}
    overlayClassName={style.modalOverlay}
    onRequestClose={() => { close(); }}
    contentLabel="fileUpload">
    <H1>File upload</H1>
    { isUploadingFile && <span>this is a loading spinner for now</span> }
    <SelectedPrinters selectedPrinters={selectedPrinters} />
    <span className={style.fileName}>{fileInput && extractFileNameFromPath(fileInput.value)}</span>
    <ControllButton onClick={() => { fileInput.click(); }}>Load file</ControllButton>
    <input type="file" hidden open ref={(input) => { fileInput = input; }} accept=".gcode, .gco"/>
    <ControllButton disabled={confirmButtonstate()} onClick={() => { onUploadButtonClick(confirm); }}>Upload</ControllButton>
  </Modal>
);

export default FileUploadModal;
