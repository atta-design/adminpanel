import { KTSVG } from "../../utils/KTSVG";
import Loading from "../../layouts/common/Spinner";
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { LoadPanel } from "devextreme-react/load-panel";
import ProgressBar from "devextreme-react/progress-bar";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { GetDataApi, PostApi } from "../../managers/HttpManager";

// components
import TextBoxComponent from "../textBox/TextBox";

import { default as FileUploader } from "../fileUploader/FileUploader";

//utiles

// configs
import { TextBoxConfig as TitleTextBoxConfig } from "./configs/country/TitleConfig";
import { FileUploaderConfig as ImageDropZone } from "./configs/country/imageConfig";
import { FileUploaderConfig as ThumbnailDropZone } from "./configs/country/thumbnailConfig";

// styles
import "./styles/dropZone.css";

export default function CountryEditModal(props) {
  const uid = props.uid;
  const titleModal = props.title;

  const [isLoading, setIsLoading] = useState(true);
  const [loadPanelVisible, setLoadPanelVisible] = useState(true);
  const [countryUID, setcountryUID] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);

  const [thumbnail, setThumbnail] = useState(null);
  const [tradition, setTradition] = useState(null);
  const [foodCulture, setFoodCulture] = useState(null);
  const [popularCondiments, setPopularCondiments] = useState(null);

  // Image Drop zone ############################################
  const [imageAlt, setImageAlt] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [imageTextVisible, setImageTextVisible] = useState(true);
  const [imageProgressValue, setImageProgressValue] = useState(0);
  const [imageProgressVisible, setImageProgressVisible] = useState(false);
  const [isDropZoneImageActive, setIsDropZoneImageActive] = useState(false);

  function onInitializedImage(e) {
    if (image) {
      setImageSource(`/assets/media/avatars/${image}.jpg`);
      setIsDropZoneImageActive(false);
      setImageTextVisible(false);
    }
  }

  function onDropZoneEnterImage(e) {
    if (e.dropZoneElement.id === "image-dropzone-external") {
      setIsDropZoneImageActive(true);
    }
  }

  function onDropZoneLeaveImage(e) {
    if (e.dropZoneElement.id === "image-dropzone-external") {
      setIsDropZoneImageActive(false);
    }
  }

  function onUploadedImage(e) {
    const { file } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setIsDropZoneImageActive(false);
      setImageSource(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setImageProgressValue(0);
    setImageTextVisible(false);
    setImageProgressVisible(false);
  }

  function onProgressImage(e) {
    setImageProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
  }

  function onUploadStartedImage() {
    setImageSource("");
    setImageProgressVisible(true);
  }
  // ############################################################

  // Thumbnail Drop zone ########################################
  const [thumbnailAlt, setThumbnailAlt] = useState("");
  const [thumbnailSource, setThumbnailSource] = useState("");
  const [thumbnailTextVisible, setThumbnailTextVisible] = useState(true);
  const [thumbnailProgressValue, setThumbnailProgressValue] = useState(0);
  const [thumbnailProgressVisible, setThumbnailProgressVisible] =
    useState(false);
  const [isDropZoneThumbnailActive, setIsDropZoneThumbnailActive] =
    useState(false);

  function onInitializedThumbnail(e) {
    if (thumbnail) {
      setThumbnailSource(`/assets/media/avatars/${thumbnail}.jpg`);
      setIsDropZoneThumbnailActive(false);
      setThumbnailTextVisible(false);
    }
  }

  function onDropZoneEnterThumbnail(e) {
    if (e.dropZoneElement.id === "thumbnail-dropzone-external") {
      setIsDropZoneThumbnailActive(true);
    }
  }

  function onDropZoneLeaveThumbnail(e) {
    if (e.dropZoneElement.id === "thumbnail-dropzone-external") {
      setIsDropZoneThumbnailActive(false);
    }
  }

  function onUploadedThumbnail(e) {
    const { file } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setIsDropZoneThumbnailActive(false);
      setThumbnailSource(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setThumbnailProgressValue(0);
    setThumbnailTextVisible(false);
    setThumbnailProgressVisible(false);
  }

  function onProgressThumbnail(e) {
    setThumbnailProgressValue((e.bytesLoaded / e.bytesTotal) * 100);
  }

  function onUploadStartedThumbnail() {
    setThumbnailSource("");
    setThumbnailProgressVisible(true);
  }
  // ############################################################

  const resetDropZoneSettings = () => {
    setImageAlt("");
    setImageSource("");
    setImageProgressValue(0);
    setImageTextVisible(true);
    setImageProgressVisible(false);
    setIsDropZoneImageActive(false);

    setThumbnailAlt("");
    setThumbnailSource("");
    setThumbnailProgressValue(0);
    setThumbnailTextVisible(true);
    setThumbnailProgressVisible(false);
    setIsDropZoneThumbnailActive(false);
  };

  const nullVariables = () => {
    setTitle(null);
    setImage(null);

    setThumbnail(null);
    setTradition(null);
    setFoodCulture(null);
    setPopularCondiments(null);
    setIsLoading(true);
  };

  useEffect(() => {
    async function getLoadData() {
      try {
        if (uid) {
          setLoadPanelVisible(true);
          const data = await GetDataApi("/country/item?uid=" + uid);

          if (data.status === 1) {
            setcountryUID(data.content.countryUID);
            setTitle(data.content.title);
            setTradition(data.content.tradition);
            setImage(data.content.imageUID || "");
            setImageAlt(data.content.title + "image");
            setFoodCulture(data.content.foodCulture);
            setThumbnail(data.content.thumbnailUID || "");
            setThumbnailAlt(data.content.title + "thumbnail");
            setPopularCondiments(data.content.popularCondiments);
            setLoadPanelVisible(false);
            setIsLoading(false);
          } else {
          }
        }
      } catch (e) {
        return <div>خطایی در واکشی داده رخ داده است</div>;
      }
    }
    getLoadData();
    nullVariables();
    resetDropZoneSettings();
  }, [uid]);

  async function postRole(e) {
    e.preventDefault();
    try {
      setLoadPanelVisible(true);

      var postOjb = {
        title: title,

        image: imageSource,
        tradition: tradition,
        foodCulture: foodCulture,
        thumbnail: thumbnailSource,
        popularCondiments: popularCondiments,

        status: 0,
        createDate: 0,
        modifyDate: 0,
        countryUID: countryUID,
        language: 0,
        thumbnailUID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        imageUID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      };

      const data = await PostApi("/country/Edit", postOjb);

      if (data.status === 1) {
        setLoadPanelVisible(false);
        window.location.reload();
      } else {
        setLoadPanelVisible(false);
      }
    } catch (e) {}
  }

  return (
    <div className="modal fade" id="kt_modal_edit_role" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen p-9">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{titleModal}</h2>

            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <KTSVG
                path="/assets/media/icons/duotone/arrows/arr061.svg"
                className="svg-icon-1"
              />
            </div>
          </div>

          <div className="modal-body py-lg-10 px-lg-10">
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              {isLoading ? (
                <Loading />
              ) : (
                <form
                  className="form mb-15"
                  id="kt_contact_form"
                  onSubmit={postRole}
                >
                  <div className="card-body p-lg-18" id="role-edit">
                    <div className="row mb-3">
                      <div className="row">
                        <div className="d-flex flex-column mb-10 fv-row">
                          <label className="fs-5 fw-bold mb-2">عنوان</label>
                          {title != null && (
                            <TextBoxComponent
                              config={TitleTextBoxConfig}
                              defaultValue={title}
                              onValueChanged={(data) => setTitle(data.value)}
                            ></TextBoxComponent>
                          )}
                        </div>
                      </div>

                      <div className="separator separator-dashed my-6"></div>
                      <div className="row">
                        <div className="d-flex flex-column mb-10 fv-row">
                          <label className="fs-5 fw-bold mb-2">
                            فرهنگ غذایی
                          </label>
                          {foodCulture != null && (
                            <CKEditor
                              config={{
                                language: {
                                  ui: "en",

                                  content: "ar",
                                },
                              }}
                              data={foodCulture}
                              editor={ClassicEditor}
                              onChange={(event, editor) => {
                                setFoodCulture(editor.getData());
                              }}
                              onReady={(editor) => {
                                editor.editing.view.change((writer) => {
                                  writer.setStyle(
                                    "max-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                  );
                                });
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="separator separator-dashed my-6"></div>
                      <div className="row">
                        <div className="d-flex flex-column mb-10 fv-row">
                          <label className="fs-6 fw-bold mb-2">
                            چاشنی های محبوب
                          </label>
                          {popularCondiments != null && (
                            <CKEditor
                              config={{
                                language: {
                                  ui: "en",

                                  content: "ar",
                                },
                              }}
                              data={popularCondiments}
                              editor={ClassicEditor}
                              onChange={(event, editor) => {
                                setPopularCondiments(editor.getData());
                              }}
                              onReady={(editor) => {
                                editor.editing.view.change((writer) => {
                                  writer.setStyle(
                                    "max-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                  );
                                });
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="separator separator-dashed my-6"></div>
                      <div className="row">
                        <div className="d-flex flex-column mb-10 fv-row">
                          <label className="fs-6 fw-bold mb-2">سنت</label>
                          {tradition != null && (
                            <CKEditor
                              config={{
                                language: {
                                  ui: "en",

                                  content: "ar",
                                },
                              }}
                              data={tradition}
                              editor={ClassicEditor}
                              onChange={(event, editor) => {
                                setTradition(editor.getData());
                              }}
                              onReady={(editor) => {
                                editor.editing.view.change((writer) => {
                                  writer.setStyle(
                                    "max-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                  );
                                });
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div className="separator separator-dashed my-6"></div>
                      <div className="col-md-18">
                        <div className="row mb-5">
                          <div className="col-md-6 fv-row">
                            <label className="fs-6 fw-bold mb-2">عکس</label>
                            <div
                              id="image-dropzone-external"
                              className={`drop-zone flex-box ${
                                isDropZoneImageActive
                                  ? "dx-theme-accent-as-border-color dropzone-active"
                                  : "dx-theme-border-color"
                              }`}
                            >
                              {imageSource && (
                                <img
                                  id="dropzone-image"
                                  src={imageSource}
                                  alt={imageAlt}
                                />
                              )}
                              {imageTextVisible && (
                                <div id="dropzone-text" className="flex-box">
                                  <span>Drag & Drop the desired file</span>
                                  <span>
                                    …or click to browse for a file instead.
                                  </span>
                                </div>
                              )}
                              <ProgressBar
                                id="upload-progress"
                                min={0}
                                max={100}
                                width="30%"
                                showStatus={false}
                                visible={imageProgressVisible}
                                value={imageProgressValue}
                              ></ProgressBar>
                              <FileUploader
                                config={ImageDropZone}
                                onUploaded={onUploadedImage}
                                onProgress={onProgressImage}
                                onInitialized={onInitializedImage}
                                onDropZoneEnter={onDropZoneEnterImage}
                                onDropZoneLeave={onDropZoneLeaveImage}
                                onUploadStarted={onUploadStartedImage}
                              />
                            </div>
                          </div>

                          <div className="col-md-6 fv-row">
                            <label className="fs-6 fw-bold mb-2">
                              Thumbnail
                            </label>
                            <div
                              id="thumbnail-dropzone-external"
                              className={`drop-zone flex-box ${
                                isDropZoneThumbnailActive
                                  ? "dx-theme-accent-as-border-color dropzone-active"
                                  : "dx-theme-border-color"
                              }`}
                            >
                              {thumbnailSource && (
                                <img
                                  id="dropzone-image"
                                  src={thumbnailSource}
                                  alt={thumbnailAlt}
                                />
                              )}
                              {thumbnailTextVisible && (
                                <div id="dropzone-text" className="flex-box">
                                  <span>Drag & Drop the desired file</span>
                                  <span>
                                    …or click to browse for a file instead.
                                  </span>
                                </div>
                              )}
                              <ProgressBar
                                id="thumbnail-upload-progress"
                                min={0}
                                max={100}
                                width="30%"
                                showStatus={false}
                                visible={thumbnailProgressVisible}
                                value={thumbnailProgressValue}
                              ></ProgressBar>
                              <FileUploader
                                config={ThumbnailDropZone}
                                onUploaded={onUploadedThumbnail}
                                onProgress={onProgressThumbnail}
                                onInitialized={onInitializedThumbnail}
                                onDropZoneEnter={onDropZoneEnterThumbnail}
                                onDropZoneLeave={onDropZoneLeaveThumbnail}
                                onUploadStarted={onUploadStartedThumbnail}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-end py-6 px-9">
                    <button className="btn btn-primary" type="submit">
                      ذخیره
                    </button>
                    <LoadPanel
                      shading={true}
                      showPane={true}
                      rtlEnabled={true}
                      showIndicator={true}
                      visible={loadPanelVisible}
                      closeOnOutsideClick={false}
                      shadingColor="rgba(0,0,0,0.4)"
                      message={"در حال آماده سازی ..."}
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
